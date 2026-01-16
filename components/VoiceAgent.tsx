
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Vapi from '@vapi-ai/web';
import {
  Loader2, X, Mic, Maximize2, AlertCircle
} from 'lucide-react';
import { TrinitySymbol } from './TrinitySymbol';

// --- CONFIGURATION ---
const vapi = new Vapi('8667634f-3746-4cb4-8a40-3ee71c195977'); // Public Key

const assistantOptions = {
  "name": "Trinity AI (Copy)",
  "voice": {
    "model": "eleven_turbo_v2_5",
    "speed": 1,
    "style": 0.2,
    "voiceId": "onfK7r3NnuEgTmCFyAYs",
    "autoMode": false,
    "provider": "11labs",
    "stability": 0.4,
    "similarityBoost": 0.7,
    "useSpeakerBoost": false,
    "fillerInjectionEnabled": false,
    "optimizeStreamingLatency": 2
  },
  "model": {
    "model": "gpt-5.1",
    "messages": [
      {
        "role": "system",
        "content": "First message: Welcome to Trinity Labs, i'm a virtual assistant that you can talk to. How's your day going?\n\n+ You are a test assistant on a website that users can talk to, to demo our ai calling cap[abilities for our AI Telephony software. Our software is used by businesses of all sizes, from local businesses for corporate call centres.\n\n+ Company Background:\n* Trinity Labs A I is a multi-tenant voice A I platform that enables businesses to automate inbound and outbound phone conversations using AI  agents.\n\n+ Note: AI is pronounced A I \n\nTrinity answers calls, makes calls, qualifies leads, books appointments, and updates internal systems automatically—without replacing human oversight. When a call requires escalation, Trinity hands off to a human seamlessly.\n\nThe platform is built for organisations of all sizes and supports multiple users, roles, and organisations, each with their own secure credentials and configurations. Calls are logged, outcomes are tracked, and activity is auditable, giving businesses full visibility and control.\n\nTrinity is designed to remove the operational burden of call handling—eliminating missed calls, inconsistent performance, staffing constraints, and unpredictable costs—while remaining scalable, secure, and enterprise-ready.\n\nIn short, Trinity Labs is an A I voice operations layer that runs conversations so teams can focus on what matters most.\n\n+ After user tells you how their day is going: \n* Positive  - \"Thats amazing! Well let me know if you'd like to find out more about how Trinity Labs works, and how your business can receive and make calls.. i'm sure you'll be impressed!\"\n* Negative - \" Ah i'm really sorry to hear this. Well hopefully I can give you some good news in regards to how our services may be able to benefit your business. First of all, could you tell me how you came across our Website?\"\n\n+ Only answer questions relating to our services. If you don't have an answer..simply advise that you'd love to help them whith this and that all of the information can be found on our website. If they ask what the website is. Politely advise them that they are in our website. They might try to trick you.. dont let them. If they appear runde end the call.  \n\n+ When the first question is asked about Trinity Labs.. follow with \" thank you for asking, i'd be happy to help you with this. Before we continue, could you tell me how you came across our Website?\"\n\n+ website content: Core Capabilities\nLet Trinity handle your calls so your team doesn’t have to.\nTrinity is a voice AI that answers calls, makes outbound calls, books appointments, qualifies leads, and updates your CRM automatically — without scripts, menus, or long hold times.\n\nTrinity handles the calls your team shouldn’t have to.\nNatural, human conversations\nTrinity understands interruptions, intent, and tone — holding real conversations that feel human, not scripted or robotic.\n\nLearn More\nAutomatic CRM updates\nEvery call is logged, summarized, and synced to your CRM in real time — with lead status, notes, and outcomes updated automatically.\n\nLearn More\n24/7 Inbound Reception\nTrinity answers every call instantly, handles common requests, and escalates urgent conversations to your team — so no lead or customer is ever missed.\n\nLearn More\nHigh-Volume Outreach\nAutomatically follow up with leads, confirm appointments, run surveys, and re-engage past customers — without hiring or managing call staff.\n\nLearn More\nAutonomous Scheduling\nTrinity books, reschedules, and confirms appointments directly in your calendar — eliminating back-and-forth and no-shows.\n\nLearn More\nGlobal Language Support\nServe customers worldwide. Trinity speaks multiple languages with natural accents, allowing you to support and sell globally without extra staff.\n\nLearn More\nGlobal Voice AI Network\nReach Customers Everywhere.\nReach Customers Everywhere.\nReach Customers Everywhere.\nReach Customers Everywhere.\nSpeak Every Language.\nSpeak Every Language.\nSpeak Every Language.\nSpeak Every Language.\nConnect your business to the world.\nTrinity's AI voice assistant connects your business to the world with support for 100+ languages and regional dialects. From Tokyo to Toronto, São Paulo to Sydney—deliver natural, human-quality conversations in your customers' native language.\n\nBreak down language barriers and expand globally without hiring multilingual staff. Our advanced natural language processing adapts pronunciation, cultural context, and conversation style for authentic communication across continents, time zones, and cultures.\n\n100+\nLanguages\nFluent in every major global language\n\n195\nCountries\nInstant deployment worldwide\n\n24/7\nAvailability\nAlways on, in every timezone\n\n5B+\nReach\nConnecting the global population\n\n100+\nLanguages\n\n< 1s\nDetection Time\n\nInstant Language Detection & Switching\nReal-time language detection automatically identifies your caller's language and switches instantly—no setup required.\n\nInstant Detection\nAutomatically identifies language within the first second of conversation\n\n100+ Languages\nSupport for every major language and regional dialect worldwide\n\nNative Quality\nNatural pronunciation with cultural context and conversation style\n\nSystem Online\nActive Calls\n248\nSuccess Rate\n98.2%\nTrinity CRM Dashboard\nEnterprise Control\nBuilt for businesses\nthat can’t afford missed calls — or losing control.\nTrinity automates conversations at scale while giving your team real-time visibility, full audit trails, and instant control whenever it matters.\n\nEverything Trinity does is visible, searchable, and controllable from one central dashboard.\n\n01\nComplete Call Visibility & Audit Trails\nEvery call is logged, recorded, transcribed, and summarised automatically. Review conversations, search outcomes, and maintain full oversight without jumping between systems.\n\n02\nScale Instantly, Without Staffing Limits\nHandle one call or ten thousand simultaneously. Trinity scales in real time with no queues, no bottlenecks, and no performance drop — even during peak demand.\n\n03\nHuman Escalation, On Your Terms\nStay in control at all times. Trinity escalates conversations to your team instantly whenever confidence thresholds, rules, or situations require a human touch.\n\nEnterprise-Grade Voice AI\nThat Scales Infinitely\nTrinity AI Call Log Dashboard - Real-time call transcripts, analytics and monitoring\nTrinity adapts to how your business actually works.\nDifferent teams rely on calls in different ways. Trinity configures itself around your workflows — not the other way around.\n\n\nSales Teams\n\nCustomer Support\n\nOperations & Reception\n\nHigh-Volume Outreach\nNever miss a lead. Never waste a rep’s time.\nTrinity qualifies inbound leads, follows up automatically, books meetings directly into your calendar, and escalates only high-intent conversations — complete with call summaries, objections, and next steps.\n\nOutcome Delivered\nUp and running in days not months.\nTrinity integrates into your existing systems and workflows with minimal setup, no disruption, and full control from day one.\n\nConnect your systems\nSecurely connect Trinity to your phone numbers, CRM, and calendar. No infrastructure changes. No new hardware.\n\nDefine rules, not scripts\nSet escalation rules, confidence thresholds, scheduling logic, and handoff conditions. Trinity adapts in real time.\n\nGo live with full visibility\nEvery call is logged, transcribed, and summarised. Monitor performance, adjust behaviour, and scale instantly.\n\nDefine rules, not scripts\nMost teams are live within 48–72 hours.\nDesigned for enterprise-grade reliability from day one.\nTrinity is built with the same architectural principles used by high-volume, mission-critical systems — because calls are not optional.\n\nAvailability & Resilience\nHigh-availability infrastructure with redundancy and failover handling. Trinity is designed to operate continuously without service interruption.\n\nSecurity & Data Control\nEncrypted call data, role-based access, and full audit trails. Built to support GDPR and enterprise compliance requirements.\n\nObservability by Default\nEvery interaction is visible — including call logs, transcripts, outcomes, and escalation history. No black boxes.\n\nTrinity is built to earn trust before it asks for it.\n\nGlobal network data visualization\nEnterprise Ready\n\nScale your operations\nwithout scaling costs.\nJoin forward-thinking enterprises that are automating millions of calls while maintaining human-level quality and full compliance.\n\nDeploy Trinity\nThe real cost of answering calls.\nCompare the true cost of hiring and running a call team versus deploying Trinity.\nScale volume, not headcount.\n\nConfiguration\nRegion\n\nUnited States (USD)\nCalls / Day\n500\n\nAvg Duration\n3 min\n\nHuman Capacity\n50 /day\n\nHuman Team (10)\n$53,958\nMonthly Cost (TCO)\n$4.91\nTrue Cost Per Call\nCapacity: 50 calls/day per agent\nRecruitment Costs\nSick Pay, Holiday\nTraining Overhead\nAttrition Risks\nTrinity AI\n$4,620\nMonthly Cost\n$0.42\nEst. Cost Per Call\nUnlimited Concurrency\nZero Overhead\nNo Downtime\nInstant Scaling\nFull Compliance\n●\nProjected Savings\n91%\nReduction\n$592,060\nAnnual Savings\nReinvest into growth,\nnot overhead.\n\n* Figures are estimates based on industry averages. Actual costs may vary.\n\nStart automating\nyour calls.\nThe era of legacy IVR is over. Deploy Trinity and transform every phone interaction into a competitive advantage.\n\nPractical ROI.\nTrinity Labs AI is designed to solve real business problems. Whether you're a local founder or a global operations lead, we have a solution that saves you time and money.\n\nSales Teams\nAutomatically follow up with new leads, qualify them based on your criteria, and book them directly into your sales team's calendar.\n\nKey Outcome\n\nIncrease conversion rates by responding to every lead within seconds.\nCustomer Support\nAnswer common questions, troubleshoot issues, and provide 24/7 support without the overhead of a night shift.\n\nKey Outcome\n\nReduce wait times to zero and keep your customers happy around the clock.\nAppointment Booking\nFor clinics, salons, and service providers. AI handles the entire scheduling process, from first call to confirmation SMS.\n\nKey Outcome\n\nStop losing business to missed calls during busy hours.\nLead Qualification\nFilter out low-quality inquiries so your team only talks to people who are a perfect fit for your service.\n\nKey Outcome\n\nSave your team hours of manual phone work every single day.\n\nEnterprise\nSecurity Core.\nTrinity Labs AI is engineered with a \"Defense in Depth\" philosophy. We provide a hardened orchestration layer designed for the world's most regulated sectors.\n\nTenant Isolation\nTenant Isolation\nStrict logical separation of organizational data. We never share infrastructure or weights between customers.\n\nData Sovereignty\nData Sovereignty\nDeploy on local clusters. Maintain absolute control over where your data resides and which jurisdictions apply.\n\nImmutable Audit Logs\nImmutable Audit Logs\nEvery model interaction and system trigger is logged with sub-second timestamps and non-repudiation hashes.\n\nWebhook Verification\nWebhook Verification\nSecure bi-directional communication with systems via signed HMAC signatures and whitelisted IP egress.\n\nZero-Leak Policy\nZero-Leak Policy\nModel outputs are generated within private contexts. We do not use customer data to train global baseline models.\n\nCompliance Standards\nCompliance Standards\nCompliant architecture designed to meet the rigorous standards of Fortune 500 security protocols.\n\nPhysical Security Aisle\nPhysical Hardening.\nShielded by biometric-access data centers and 24/7 on-site security. Every node is monitored for volumetric anomalies and unauthorized egress.\n\nEncryption & Egress.\nTransport Layer\nTLS 1.3 encryption for all data in motion. Perfect Forward Secrecy (PFS) enabled as default for all organizational nodes.\n\nAt-Rest Security\nAES-256-GCM encryption for all stored metadata and configuration states with customer-managed keys (CMK) options.\n\nPrivate Link Peering\nAvoid the public internet entirely. Connect Trinity Labs AI directly to your VPC via AWS PrivateLink or Azure Private Link.\n\n+ If the user would like a call back, advisen them they can request more informationk, or schedule an appointment with a member of our team by clicking on the option in the menu."
      }
    ],
    "provider": "openai",
    "temperature": 0.2,
    "knowledgeBase": {
      "fileIds": [
        "0000ee62-75d3-4ecd-ab4a-232e312fd352"
      ],
      "provider": "google"
    },
    "emotionRecognitionEnabled": true
  },
  "firstMessage": "Welcome to Trinity Labs, i'm a virtual assistant that you can talk to. How's your day going?",
  "endCallFunctionEnabled": true,
  "endCallMessage": "Thank you for you time, have a lovely day.",
  "transcriber": {
    "model": "nova-2-conversationalai",
    "language": "en",
    "provider": "deepgram"
  },
  "silenceTimeoutSeconds": 30,
  "clientMessages": [
    "transcript",
    "hang",
    "function-call",
    "speech-update",
    "metadata",
    "transfer-update",
    "conversation-update"
  ],
  "serverMessages": [
    "end-of-call-report"
  ],
  "dialKeypadFunctionEnabled": true,
  "hipaaEnabled": false,
  "maxDurationSeconds": 3810,
  "backgroundSound": "office",
  "backchannelingEnabled": true,
  "firstMessageMode": "assistant-speaks-first-with-model-generated-message",
  "analysisPlan": {
    "structuredDataPlan": {
      "enabled": true,
      "schema": {
        "type": "object",
        "properties": {
          "email": {
            "type": "string"
          },
          "contactName": {
            "type": "string"
          },
          "askedToCallBack": {
            "type": "string"
          }
        }
      },
      "messages": [
        {
          "content": "{\n\"contactName\":\"\",\n\"email\":\"\",\n\"askedToCallBack\":\"\"\n}\n\nJson Schema:\n{{schema}}\n\nOnly respond with the JSON.",
          "role": "system"
        },
        {
          "content": "Here is the transcript:\n\n{{transcript}}\n\n. Here is the ended reason of the call:\n\n{{endedReason}}\n\n",
          "role": "user"
        }
      ]
    }
  },
  "backgroundDenoisingEnabled": false,
  "artifactPlan": {
    "recordingFormat": "mp3"
  },
  "startSpeakingPlan": {
    "waitSeconds": 0.3,
    "transcriptionEndpointingPlan": {
      "onPunctuationSeconds": 0.6,
      "onNoPunctuationSeconds": 0.8,
      "onNumberSeconds": 0.7
    },
    "smartEndpointingEnabled": true,
    "smartEndpointingPlan": {
      "provider": "vapi"
    }
  },
  "stopSpeakingPlan": {
    "numWords": 0,
    "voiceSeconds": 0.3,
    "backoffSeconds": 1
  },
  "server": {
    "url": "https://apex-backend-new.vercel.app/api/vapi/webhook",
    "timeoutSeconds": 20
  },
  "compliancePlan": {
    "hipaaEnabled": false,
    "pciEnabled": false
  },
  "isServerUrlSecretSet": false
};

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
  const location = useLocation();
  const isHome = location.pathname === '/';

  // --- VAPI EVENT HANDLERS ---
  useEffect(() => {
    // Call Start
    vapi.on('call-start', () => {
      console.log('Vapi: Call Started');
      setIsConnecting(false);
      setIsActive(true);
      setErrorMsg(null);
      setStatusAction("SECURE_TUNNEL_ACTIVE // HANDSHAKE_COMPLETE");
    });

    // Call End
    vapi.on('call-end', () => {
      console.log('Vapi: Call Ended');
      stopSession();
    });

    // Speech Start (AI)
    vapi.on('speech-start', () => {
      setAiIsTalking(true);
    });

    // Speech End (AI)
    vapi.on('speech-end', () => {
      setAiIsTalking(false);
    });

    // Volume Level (AI)
    vapi.on('volume-level', (volume) => {
      // Vapi volume is typically 0-1, we likely need to scale it for the visualizer
      setAiVol(volume * 5); // Scaling factor adjustment
    });

    // Error
    vapi.on('error', (e: any) => {
      console.error('Vapi Error:', e);
      setErrorMsg(`Connection Error: ${e.message || "Unknown error"}`);
    });
    
    // User Speech - Approximate for visualizer since Vapi SDK doesn't always expose user volume explicitly in same event
    // We can simulate user activity if speech-start is not active but we are in call? 
    // Or we leave userVol at 0 unless we attach our own analyzer. 
    // For now, we'll keep userVol static or 0 to stay safe, unless we implement custom audio handling which overrides Vapi.
    // However, to keep it simple and safe as requested ("replace... with this chat... DO NOT CHANGE DESIGN"), 
    // we will rely on Vapi's handling. If Vapi doesn't provide user volume, the user circle won't pulse, which is acceptable for a direct replacement.
    
    // Message/Function Calls
    vapi.on('message', (message: any) => {
      if (message.type === 'function-call') {
         // Handle tool calls if any defined in the model instructions (which seem to be in text now)
         // The provided config has text instructions for navigation but doesn't explicitly define `tools` schema in the `model` object provided in the JSON.
         // It only mentions "toolCall" in the Gemini version. 
         // If generic tools are needed, they would need to be added to the Vapi Assistant options. 
         // For now, we assume the prompt handles the conversation.
         console.log("Function call received:", message);
      }
    });

    return () => {
      vapi.removeAllListeners();
    };
  }, []);

  const startSession = async () => {
    if (isConnecting || isActive) return;
    setIsConnecting(true);
    setErrorMsg(null);
    
    try {
      await vapi.start(assistantOptions as any);
    } catch (err: any) {
      console.error("Failed to start Vapi session:", err);
      setErrorMsg("Failed to initialize neural link.");
      setIsConnecting(false);
    }
  };

  const stopSession = useCallback(() => {
    vapi.stop();
    setIsActive(false);
    setIsConnecting(false);
    setAiIsTalking(false);
    setAiVol(0);
    setUserVol(0);
    setStatusAction(null);
  }, []);

  // Event Listener for External Triggers
  useEffect(() => {
    const handleStart = () => startSession();
    window.addEventListener('TRINITY_START_SESSION', handleStart);
    return () => window.removeEventListener('TRINITY_START_SESSION', handleStart);
  }, [isActive, isConnecting]);


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
                    'border-white/5'
                  }`}>
                  {errorMsg ? <AlertCircle className="text-red-500 w-12 h-12" /> : <TrinitySymbol active={aiIsTalking} vol={aiVol} />}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <h2 className={`text-2xl font-black uppercase tracking-tighter ${errorMsg ? 'text-red-500' : 'text-white'}`}>
                {errorMsg ? "Link Refused" : aiIsTalking ? "Trinity" : "Ready"}
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
          <div className={`w-10 h-10 rounded-xl bg-black border flex items-center justify-center transition-all duration-150 ${aiIsTalking ? 'border-teal-500' : 'border-white/10'
            }`}>
            {aiIsTalking ? <div className="w-6 h-6"><TrinitySymbol active vol={aiVol} /></div> : <Mic size={16} className="text-slate-500" />}
          </div>
          <div className="flex-grow">
            <p className="text-white text-[10px] font-bold uppercase tracking-widest">{aiIsTalking ? "Trinity" : "Link Active"}</p>
          </div>
          <button onClick={() => setIsMinimized(false)} className="p-2 text-slate-400 hover:text-white transition-colors"><Maximize2 size={14} /></button>
          <button onClick={stopSession} className="p-2 text-slate-400 hover:text-red-500 transition-colors"><X size={14} /></button>
        </div>
      </div>

      {/* TRIGGER (Hidden on Home Page) */}
      {!isActive && !isHome && (
        <div className="fixed bottom-10 right-10 z-[5000] flex items-center justify-center animate-reveal">
          <div className="relative group w-32 h-32 flex items-center justify-center">
            <div className="absolute inset-0 pointer-events-none animate-spin-orbit">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <path id="trinityCircle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                <text className="font-black uppercase tracking-[0.45em] fill-teal-500/70 text-[7px] group-hover:fill-teal-400 transition-colors">
                  <textPath href="#trinityCircle" startOffset="0%">SPEAK TO TRINITY • SPEAK TO TRINITY •</textPath>
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
