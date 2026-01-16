
import React, { useState, useEffect, useRef } from 'react';
import { Shield, Settings, PlayCircle, Terminal } from 'lucide-react';

const Demo: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    businessType: '',
    callsPerDay: '',
    callbackTime: '',
    projectDescription: ''
  });

  const [activeField, setActiveField] = useState<string | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playTypeSound = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400 + Math.random() * 300, ctx.currentTime);
      gain.gain.setValueAtTime(0.005, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.015);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.015);
    } catch (e) {}
  };

  useEffect(() => {
    const handlePopulate = async (e: any) => {
      const data = e.detail;
      const fieldsToUpdate = Object.entries(data).filter(([_, val]) => val !== undefined && val !== null);
      
      for (const [field, targetValue] of fieldsToUpdate) {
        const valStr = String(targetValue);
        if (!valStr) continue;

        setActiveField(field);
        let currentVal = "";
        
        // Type out character by character
        for (let i = 0; i < valStr.length; i++) {
          currentVal += valStr[i];
          setFormData(prev => ({ ...prev, [field]: currentVal }));
          playTypeSound();
          await new Promise(r => setTimeout(r, 15 + Math.random() * 25));
        }
        
        await new Promise(r => setTimeout(r, 150));
      }
      setActiveField(null);
    };

    window.addEventListener('trinity-demo-populate', handlePopulate);
    return () => window.removeEventListener('trinity-demo-populate', handlePopulate);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#0a0a0b] py-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/5 border border-teal-500/10 rounded-full mb-6 text-[10px] font-bold text-teal-500 uppercase tracking-widest">
            <Terminal size={12} />
            <span>Operational Sandbox</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-6 tracking-tight">Request System Access</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Fill out the technical profile below. Our AI systems guide Trinity can assist you with this process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 bg-[#141415] border border-white/5 p-10 rounded-3xl shadow-2xl relative overflow-hidden animate-reveal">
            {activeField && (
              <div className="absolute top-0 left-0 w-full h-1 bg-teal-500 shadow-[0_0_15px_#14b8a6]"></div>
            )}
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="border-b border-white/5 pb-8">
                <h3 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-8 text-slate-500">Contact Layer</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-3">
                     <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">First Name</label>
                     <input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      className={`w-full bg-black/40 border rounded-xl p-4 text-white focus:border-teal-600 focus:outline-none transition-all ${activeField === 'firstName' ? 'border-teal-500 ring-2 ring-teal-500/20' : 'border-white/10'}`} 
                     />
                   </div>
                   <div className="space-y-3">
                     <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Last Name</label>
                     <input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className={`w-full bg-black/40 border rounded-xl p-4 text-white focus:border-teal-600 focus:outline-none transition-all ${activeField === 'lastName' ? 'border-teal-500 ring-2 ring-teal-500/20' : 'border-white/10'}`} 
                     />
                   </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Corporate Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@enterprise.com"
                      className={`w-full bg-black/40 border rounded-xl p-4 text-white focus:border-teal-600 focus:outline-none transition-all ${activeField === 'email' ? 'border-teal-500 ring-2 ring-teal-500/20' : 'border-white/10'}`} 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Professional Title</label>
                    <input 
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="e.g. CTO, Operations Lead"
                      className={`w-full bg-black/40 border rounded-xl p-4 text-white focus:border-teal-600 focus:outline-none transition-all ${activeField === 'role' ? 'border-teal-500 ring-2 ring-teal-500/20' : 'border-white/10'}`} 
                    />
                  </div>
                </div>
              </div>

              <div className="border-b border-white/5 pb-8">
                <h3 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-8 text-slate-500">Node Configuration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Vertical / Sector</label>
                    <input 
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      placeholder="Real Estate, Health, Finance"
                      className={`w-full bg-black/40 border rounded-xl p-4 text-white focus:border-teal-600 focus:outline-none transition-all ${activeField === 'businessType' ? 'border-teal-500 ring-2 ring-teal-500/20' : 'border-white/10'}`} 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Daily Concurrent Vol</label>
                    <input 
                      name="callsPerDay"
                      value={formData.callsPerDay}
                      onChange={handleChange}
                      placeholder="Expected daily events"
                      className={`w-full bg-black/40 border rounded-xl p-4 text-white focus:border-teal-600 focus:outline-none transition-all ${activeField === 'callsPerDay' ? 'border-teal-500 ring-2 ring-teal-500/20' : 'border-white/10'}`} 
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Functional Requirements</label>
                <textarea 
                  name="projectDescription"
                  rows={4}
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Describe your intended use case..."
                  className={`w-full bg-black/40 border rounded-xl p-4 text-white focus:border-teal-600 focus:outline-none transition-all resize-none ${activeField === 'projectDescription' ? 'border-teal-500 ring-2 ring-teal-500/20' : 'border-white/10'}`}
                ></textarea>
              </div>
              
              <button className="w-full bg-white text-black py-5 rounded-2xl font-bold hover:bg-teal-500 hover:text-white transition-all uppercase tracking-widest text-[10px] shadow-xl active:scale-95">
                Dispatch Request
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl">
              <Shield className="text-teal-500 mb-4" size={24} />
              <h4 className="text-white font-bold mb-2 uppercase text-[11px] tracking-widest">Tenant Isolation</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed font-light uppercase tracking-wider">
                All demo data is isolated within a dedicated organizational node and purged after evaluation.
              </p>
            </div>
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl">
              <Settings className="text-teal-500 mb-4" size={24} />
              <h4 className="text-white font-bold mb-2 uppercase text-[11px] tracking-widest">Protocol Setup</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed font-light uppercase tracking-wider">
                We'll contact you to establish your VPC bridge and initial call logic workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
