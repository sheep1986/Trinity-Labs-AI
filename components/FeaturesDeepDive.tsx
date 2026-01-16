import React from 'react';
import { Zap, Lock, Cpu, Globe, Mic, BarChart3 } from 'lucide-react';

const FeaturesDeepDive = () => {
  return (
    <section className="py-32 bg-[#050506] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-green-500/10 to-transparent blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Narrative Header (SEO Rich) */}
        <div className="max-w-4xl mb-24">
           <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
             Beyond simple <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">voice automation.</span>
           </h2>
           <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl">
             Legacy IVR systems frustrate customers. Simple chatbots fail at nuance. Trinity bridges the gap with <strong className="text-white font-medium">Semantic Intelligence</strong>—a proprietary engine that understands intent, tone, and context in real-time.
           </p>
        </div>

        {/* Artistic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">
           
           {/* Card 1: Latency (Large) */}
           <div className="md:col-span-8 bg-gradient-to-br from-green-950/30 to-black/60 rounded-[2.5rem] p-10 md:p-14 border border-green-500/20 relative overflow-hidden group hover:border-green-500/40 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                 <div className="mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6">
                        <Zap size={32} className="text-green-400" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Sub-500ms Latency</h3>
                    <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                       Conversations only feel natural when they happen instantly. Trinity's edge-deployed inference engine processes voice data faster than the human ear can perceive a pause, eliminating the dreaded "AI lag."
                    </p>
                 </div>

                 {/* Visual Abstract */}
                 <div className="w-full h-24 bg-black/40 rounded-2xl overflow-hidden relative border border-green-500/20">
                    <div className="absolute top-0 left-0 h-full w-1/3 bg-green-500/20 blur-xl animate-slide-right"></div>
                    <div className="flex items-center justify-between h-full px-8">
                       <div className="h-2 w-full bg-green-950/50 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-[85%] rounded-full shadow-[0_0_15px_#22c55e]"></div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Card 2: Security (Tall) */}
           <div className="md:col-span-4 row-span-2 bg-gradient-to-br from-teal-950/30 to-black/60 rounded-[2.5rem] p-10 border border-teal-500/20 relative overflow-hidden group hover:border-teal-500/40 transition-all duration-700">
               <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-[80px] rounded-full"></div>
               <div className="relative z-10 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-6">
                      <Lock size={28} className="text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise-Grade Security</h3>
                  <p className="text-slate-300 leading-relaxed mb-8 flex-grow">
                     Your data never leaves the secure enclave. Trinity is SOC2 Type II compliant ready, ensuring that sensitive customer information, PII, and call transcripts are encrypted at rest and in transit.
                  </p>

                  <div className="space-y-4">
                     {['End-to-End Encryption', 'Role-Based Access', 'GDPR Compliance', 'Auto-Redaction'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-black/30 border border-teal-500/20 text-sm text-slate-300">
                           <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
                           {item}
                        </div>
                     ))}
                  </div>
               </div>
           </div>

           {/* Card 3: NLU (Medium) */}
           <div className="md:col-span-4 bg-gradient-to-br from-purple-950/30 to-black/60 rounded-[2.5rem] p-10 border border-purple-500/20 relative overflow-hidden group hover:border-purple-500/40 transition-all duration-700">
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-500/10 to-transparent opacity-50"></div>
              <div className="relative z-10">
                 <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-6">
                    <Cpu size={28} className="text-purple-400" />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-3">Context Aware NLU</h3>
                 <p className="text-slate-300 text-sm leading-relaxed">
                    It remembers what you said three turns ago. Interruptions, accent nuances, and slang are handled natively.
                 </p>
              </div>
           </div>

           {/* Card 4: Global (Medium) */}
           <div className="md:col-span-4 bg-gradient-to-br from-blue-950/30 to-black/60 rounded-[2.5rem] p-10 border border-blue-500/20 relative overflow-hidden group hover:border-blue-500/40 transition-all duration-700">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px] rounded-full"></div>
               <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-6">
                     <Globe size={28} className="text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Global Infrastructure</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                     Deployed across 12 regions. Low-latency telephony connections in 30+ countries.
                  </p>
               </div>
           </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturesDeepDive;
