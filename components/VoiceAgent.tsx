
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GoogleGenAI, Modality, Type, FunctionDeclaration, LiveServerMessage } from '@google/genai';
import {
  Loader2, X, Volume2, Shield, Mic, Activity, Zap, MessageSquare, Cpu, Globe, Maximize2, AlertCircle
} from 'lucide-react';

// SDK Compliance: Manual Base64 and PCM handling
function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) bytes[i] = binaryString.charCodeAt(i);
  return bytes;
}

async function decodePCM(data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

const NAVIGATE_FUNCTION_DECLARATION: FunctionDeclaration = {
  name: 'navigateToPage',
  parameters: {
    type: Type.OBJECT,
    description: 'Instantly navigates the user to a specific page.',
    properties: {
      path: { type: Type.STRING, description: 'The URL path (e.g., "/", "/pricing", "/security", "/use-cases", "/about", "/demo").' },
    },
    required: ['path'],
  },
};

const FOCUS_SECTION_FUNCTION_DECLARATION: FunctionDeclaration = {
  name: 'focusOnSection',
  parameters: {
    type: Type.OBJECT,
    description: 'Scrolls to and highlights a specific section of the page.',
    properties: {
      sectionId: {
        type: Type.STRING,
        description: 'The ID of the section (e.g., "features", "infrastructure", "pricing-tiers", "security-grid", "encryption-specs").'
      }
    },
    required: ['sectionId'],
  },
};

const POPULATE_DEMO_FUNCTION_DECLARATION: FunctionDeclaration = {
  name: 'populateDemoForm',
  parameters: {
    type: Type.OBJECT,
    description: 'Syncs data into the demo form fields.',
    properties: {
      firstName: { type: Type.STRING },
      lastName: { type: Type.STRING },
      email: { type: Type.STRING },
      role: { type: Type.STRING },
      businessType: { type: Type.STRING },
      callsPerDay: { type: Type.STRING },
      projectDescription: { type: Type.STRING },
    },
  },
};

const BASE_SYSTEM_INSTRUCTION = `You are "Trinity", the mission-critical AI systems guide for Trinity Labs AI.

STRICT LATENCY PROTOCOL:
- Responses MUST be extremely concise (max 10-15 words).
- Prioritize speed. Do not apologize or use filler words.

SEQUENTIAL DATA COLLECTION (FOR /DEMO):
- Ask for information ONE AT A TIME.
- 1. Name. 2. Email. 3. Role. 4. Scale.
- Call "populateDemoForm" IMMEDIATELY after every answer.

VISUAL INTERACTION:
- Use "focusOnSection" and "navigateToPage" to guide the user.

GREETING:
"Trinity online. How can I assist with your infrastructure today?"`;

const TrinitySymbol = ({ active = false, userSpeaking = false, vol = 0 }: { active?: boolean; userSpeaking?: boolean; vol?: number }) => (
  <div
    className="relative flex items-center justify-center transition-all duration-75 ease-out w-full h-full"
    style={{ transform: `scale(${1 + (vol * 0.35)})` }}
  >
    {active && (
      <div className={`absolute inset-0 blur-[30px] rounded-full animate-pulse-soft transition-all duration-300 scale-125 ${userSpeaking
        ? 'bg-blue-500/30'
        : 'bg-teal-500/30'
        }`} />
    )}
    <img
      src="https://i.ibb.co/x4XLWHH/Trinity-Symbol.png"
      alt="Trinity Symbol"
      className={`relative w-[80%] h-[80%] object-contain transition-all duration-150 ${active ? 'brightness-125' : 'opacity-60 brightness-75'
        } ${userSpeaking ? 'drop-shadow-[0_0_10px_#3b82f6]' : 'drop-shadow-[0_0_10px_#14b8a6]'}`}
    />
  </div>
);

export const VoiceAgent: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [aiIsTalking, setAiIsTalking] = useState(false);
  const [userVol, setUserVol] = useState(0);
  const [aiVol, setAiVol] = useState(0);
  const [statusAction, setStatusAction] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const navigate = useNavigate();
  const audioCtxIn = useRef<AudioContext | null>(null);
  const audioCtxOut = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const nextStartTime = useRef(0);
  const sources = useRef<Set<AudioBufferSourceNode>>(new Set());
  const processor = useRef<ScriptProcessorNode | null>(null);
  const userAnalyser = useRef<AnalyserNode | null>(null);
  const aiAnalyser = useRef<AnalyserNode | null>(null);
  const aiGain = useRef<GainNode | null>(null);
  const sessionRef = useRef<any>(null);
  const handshakeComplete = useRef(false);

  const isUserSpeaking = userVol > 0.05;

  const triggerHighlight = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('ring-4', 'ring-teal-500', 'ring-opacity-40', 'transition-all', 'duration-500');
      setTimeout(() => el.classList.remove('ring-4', 'ring-teal-500', 'ring-opacity-40'), 3000);
    }
  }, []);

  const stopSession = useCallback(() => {
    console.debug('Trinity: Termination sequence initiated.');
    handshakeComplete.current = false;
    if (processor.current) processor.current.disconnect();
    if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop());
    if (audioCtxIn.current) audioCtxIn.current.close().catch(() => { });
    if (audioCtxOut.current) audioCtxOut.current.close().catch(() => { });

    sources.current.forEach(s => { try { s.stop(); } catch (e) { } });
    sources.current.clear();

    sessionRef.current = null;
    setIsActive(false);
    setIsConnecting(false);
    setAiIsTalking(false);
    setStatusAction(null);
    setUserVol(0);
    setAiVol(0);
  }, []);

  const startSession = async () => {
    if (isConnecting || isActive) return;
    setErrorMsg(null);
    setIsConnecting(true);
    setIsActive(true);
    setIsMinimized(false);
    handshakeComplete.current = false;

    try {
      let apiKey = '';
      if (!apiKey) {
        try {
          const resp = await fetch('/api/config');
          if (resp.ok) {
            const data = await resp.json();
            apiKey = data.apiKey;
          }
        } catch (err) {
          console.error("Failed to fetch config", err);
        }
      }

      if (!apiKey) {
        throw new Error("API_KEY_MISSING");
      }

      const AudioCtx = (window.AudioContext || (window as any).webkitAudioContext);
      const ctxIn = new AudioCtx({ sampleRate: 16000 });
      const ctxOut = new AudioCtx({ sampleRate: 24000 });
      audioCtxIn.current = ctxIn;
      audioCtxOut.current = ctxOut;

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const ai = new GoogleGenAI({ apiKey });
      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        callbacks: {
          onopen: () => {
            console.debug('Trinity: WebSocket upgrade successful.');

            // Audio input configuration
            const source = ctxIn.createMediaStreamSource(stream);
            userAnalyser.current = ctxIn.createAnalyser();
            userAnalyser.current.fftSize = 64;
            // SDK stability: using 4096 buffer
            processor.current = ctxIn.createScriptProcessor(4096, 1, 1);

            processor.current.onaudioprocess = (e) => {
              // CRITICAL: Prevent streaming audio until handshake is finalized
              if (!sessionRef.current || !handshakeComplete.current) return;

              const inputData = e.inputBuffer.getChannelData(0);
              const int16 = new Int16Array(inputData.length);
              for (let i = 0; i < inputData.length; i++) {
                int16[i] = Math.max(-1, Math.min(1, inputData[i])) * 32767;
              }

              const pcmData = encode(new Uint8Array(int16.buffer));
              if (pcmData) {
                sessionPromise.then(s => {
                  try {
                    s.sendRealtimeInput({ media: { data: pcmData, mimeType: 'audio/pcm;rate=16000' } });
                  } catch (err) {
                    console.error('Trinity: Media egress failed.', err);
                  }
                });
              }

              if (userAnalyser.current) {
                const data = new Uint8Array(userAnalyser.current.frequencyBinCount);
                userAnalyser.current.getByteFrequencyData(data);
                let sum = 0;
                for (let i = 0; i < data.length; i++) sum += data[i];
                setUserVol(sum / data.length / 150);
              }
            };

            source.connect(userAnalyser.current);
            userAnalyser.current.connect(processor.current);
            processor.current.connect(ctxIn.destination);

            aiGain.current = ctxOut.createGain();
            aiAnalyser.current = ctxOut.createAnalyser();
            aiAnalyser.current.fftSize = 64;
            aiGain.current.connect(aiAnalyser.current);
            aiAnalyser.current.connect(ctxOut.destination);

            // SEQUENTIAL HANDSHAKE:
            // First, get the session reference
            sessionPromise.then(s => {
              sessionRef.current = s;
              console.debug('Trinity: Sending initial logic handshake.');
              // Second, send the instruction. This must happen before audio.
              s.sendRealtimeInput({ text: "SYSTEM_SIGNAL: Secure link established. Awaiting user input. Provide very brief status confirmation." });

              // Third, enable audio streaming after a short safety period
              setTimeout(() => {
                handshakeComplete.current = true;
                setIsConnecting(false);
                console.debug('Trinity: Audio pipeline active.');
              }, 800);
            });
          },
          onmessage: async (msg: LiveServerMessage) => {
            if (msg.toolCall && sessionRef.current) {
              for (const fc of msg.toolCall.functionCalls) {
                if (fc.name === 'navigateToPage') {
                  const path = (fc.args as any).path;
                  setStatusAction(`MIGRATING: ${path}`);
                  navigate(path);
                  setIsMinimized(true);
                  sessionRef.current.sendToolResponse({ functionResponses: { id: fc.id, name: fc.name, response: { result: "ok" } } });
                }
                if (fc.name === 'focusOnSection') {
                  const sectionId = (fc.args as any).sectionId;
                  setStatusAction(`FOCUS: ${sectionId}`);
                  triggerHighlight(sectionId);
                  sessionRef.current.sendToolResponse({ functionResponses: { id: fc.id, name: fc.name, response: { result: "ok" } } });
                }
                if (fc.name === 'populateDemoForm') {
                  setStatusAction(`SYNC: DATA_NODE`);
                  window.dispatchEvent(new CustomEvent('trinity-demo-populate', { detail: fc.args }));
                  sessionRef.current.sendToolResponse({ functionResponses: { id: fc.id, name: fc.name, response: { result: "ok" } } });
                }
              }
            }

            const base64 = msg.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64 && audioCtxOut.current && aiGain.current) {
              const currentCtx = audioCtxOut.current;
              if (currentCtx.state === 'suspended') await currentCtx.resume();

              nextStartTime.current = Math.max(nextStartTime.current, currentCtx.currentTime);
              const buffer = await decodePCM(decode(base64), currentCtx, 24000, 1);
              const source = currentCtx.createBufferSource();
              source.buffer = buffer;
              source.connect(aiGain.current);
              source.start(nextStartTime.current);
              nextStartTime.current += buffer.duration;
              setAiIsTalking(true);
              const trackVol = () => {
                if (!aiAnalyser.current || !isActive) return;
                const data = new Uint8Array(aiAnalyser.current.frequencyBinCount);
                aiAnalyser.current.getByteFrequencyData(data);
                let sum = 0;
                for (let i = 0; i < data.length; i++) sum += data[i];
                const v = sum / data.length / 150;
                setAiVol(v);
                if (v > 0.005) requestAnimationFrame(trackVol); else setAiIsTalking(false);
              };
              requestAnimationFrame(trackVol);
              sources.current.add(source);
              source.onended = () => sources.current.delete(source);
            }
            if (msg.serverContent?.interrupted) {
              sources.current.forEach(s => { try { s.stop(); } catch (e) { } });
              sources.current.clear();
              nextStartTime.current = 0;
              setAiIsTalking(false);
            }
          },
          onerror: (err) => {
            console.error('Trinity Error:', err);
            setErrorMsg("Neural link interrupted. Please verify API configuration.");
            stopSession();
          },
          onclose: (ev) => {
            console.warn('Trinity Connection Closed:', ev.code, ev.reason);
            if (ev.code !== 1000) {
              setErrorMsg(`DISCONNECT [CODE: ${ev.code}]. ${ev.reason || "Check API Key region."}`);
            }
            stopSession();
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Puck' } } },
          tools: [{
            functionDeclarations: [
              NAVIGATE_FUNCTION_DECLARATION, FOCUS_SECTION_FUNCTION_DECLARATION, POPULATE_DEMO_FUNCTION_DECLARATION
            ]
          }],
          systemInstruction: BASE_SYSTEM_INSTRUCTION
        }
      });
    } catch (e) {
      console.error('Handshake Failure:', e);
      setErrorMsg("Failed to initiate secure link.");
      stopSession();
    }
  };

  return (
    <>
      {/* HUD EXPANDED */}
      <div className={`fixed inset-0 z-[100000] transition-all duration-300 ${isActive && !isMinimized ? 'opacity-100' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="w-full max-md glass p-10 rounded-[3rem] border border-white/10 flex flex-col items-center text-center gap-10 relative animate-reveal">

            <div className="relative w-32 h-32">
              {isConnecting ? (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                  <Loader2 className="w-12 h-12 text-teal-500 animate-spin" />
                  <span className="text-[9px] font-bold text-teal-500 uppercase tracking-widest animate-pulse">Syncing...</span>
                </div>
              ) : (
                <div className={`w-full h-full rounded-full bg-black/50 border flex items-center justify-center relative transition-all duration-150 ${errorMsg ? 'border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.2)]' :
                  aiIsTalking ? 'border-teal-500 shadow-[0_0_50px_rgba(20,184,166,0.3)]' :
                    isUserSpeaking ? 'border-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.3)]' : 'border-white/5'
                  }`}>
                  {errorMsg ? <AlertCircle className="text-red-500 w-12 h-12" /> : <TrinitySymbol active={aiIsTalking || isUserSpeaking} userSpeaking={isUserSpeaking} vol={aiIsTalking ? aiVol : userVol} />}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <h2 className={`text-2xl font-black uppercase tracking-tighter ${errorMsg ? 'text-red-500' : 'text-white'}`}>
                {errorMsg ? "Link Refused" : aiIsTalking ? "Trinity" : isUserSpeaking ? "Input" : "Ready"}
              </h2>
              <p className="text-slate-500 text-[10px] font-mono leading-relaxed max-w-xs">{errorMsg || statusAction || "SECURE_TUNNEL_ACTIVE // HANDSHAKE_COMPLETE"}</p>
            </div>

            <div className="w-full grid grid-cols-2 gap-4">
              {!errorMsg && <button onClick={() => setIsMinimized(true)} className="glass border-white/10 text-slate-300 py-4 rounded-2xl font-bold uppercase tracking-widest text-[9px] hover:text-white transition-all">Minimize</button>}
              <button onClick={stopSession} className={`py-4 rounded-2xl font-bold uppercase tracking-widest text-[9px] transition-all ${errorMsg ? 'col-span-2 bg-white text-black hover:bg-red-500 hover:text-white' : 'bg-white text-black hover:bg-red-600 hover:text-white'}`}>
                {errorMsg ? "Acknowledge" : "Close Link"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* HUD MINIMIZED */}
      <div className={`fixed bottom-24 right-8 z-[100000] transition-all duration-500 ${isActive && isMinimized ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="glass p-3 rounded-[2rem] border border-white/20 flex items-center gap-4 shadow-2xl backdrop-blur-3xl min-w-[240px]">
          <div className={`w-10 h-10 rounded-xl bg-black border flex items-center justify-center transition-all duration-150 ${aiIsTalking ? 'border-teal-500' : isUserSpeaking ? 'border-blue-500' : 'border-white/10'
            }`}>
            {aiIsTalking ? <div className="w-6 h-6"><TrinitySymbol active vol={aiVol} /></div> : <Mic size={16} className={isUserSpeaking ? "text-blue-500" : "text-slate-500"} />}
          </div>
          <div className="flex-grow">
            <p className="text-white text-[10px] font-bold uppercase tracking-widest">{aiIsTalking ? "Trinity" : isUserSpeaking ? "Input" : "Link Active"}</p>
          </div>
          <button onClick={() => setIsMinimized(false)} className="p-2 text-slate-400 hover:text-white transition-colors"><Maximize2 size={14} /></button>
          <button onClick={stopSession} className="p-2 text-slate-400 hover:text-red-500 transition-colors"><X size={14} /></button>
        </div>
      </div>

      {/* TRIGGER */}
      {!isActive && (
        <div className="fixed bottom-10 right-10 z-[5000] flex items-center justify-center animate-reveal">
          <div className="relative group w-32 h-32 flex items-center justify-center">
            <div className="absolute inset-0 pointer-events-none animate-spin-orbit">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <path id="trinityCircle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                <text className="font-black uppercase tracking-[0.45em] fill-teal-500/70 text-[7px] group-hover:fill-teal-400 transition-colors">
                  <textPath href="#trinityCircle" startOffset="0%">TRINITY_GUIDE • TRINITY_GUIDE •</textPath>
                </text>
              </svg>
            </div>
            <button onClick={startSession} className="relative z-10 w-20 h-20 rounded-full bg-black border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:border-teal-500/50 shadow-2xl">
              <div className="w-[70%] h-[70%]"><TrinitySymbol /></div>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
