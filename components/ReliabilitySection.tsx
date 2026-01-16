import React from 'react';
import { Server, ShieldCheck, Eye } from 'lucide-react';

const guarantees = [
  {
    title: 'Availability & Resilience',
    desc: 'High-availability infrastructure with redundancy and failover handling. Trinity is designed to operate continuously without service interruption.',
    icon: Server
  },
  {
    title: 'Security & Data Control',
    desc: 'Encrypted call data, role-based access, and full audit trails. Built to support GDPR and enterprise compliance requirements.',
    icon: ShieldCheck
  },
  {
    title: 'Observability by Default',
    desc: 'Every interaction is visible — including call logs, transcripts, outcomes, and escalation history. No black boxes.',
    icon: Eye
  }
];

const ReliabilitySection = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#050506] relative border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
             Designed for enterprise-grade reliability from day one.
           </h2>
           <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
             Trinity is built with the same architectural principles used by high-volume, mission-critical systems — because calls are not optional.
           </p>
        </div>

        {/* 3 Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
           {guarantees.map((item, i) => (
             <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-green-500/30 hover:bg-white/[0.07] transition-all duration-500 flex flex-col items-start text-left relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:border-green-500/50 transition-colors">
                   <item.icon size={24} className="text-slate-400 group-hover:text-green-500 transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed font-light text-sm">
                  {item.desc}
                </p>
             </div>
           ))}
        </div>

        <div className="text-center mt-20 opacity-60 hover:opacity-100 transition-opacity duration-500">
           <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.2em]">
              Trinity is built to earn trust before it asks for it.
           </p>
        </div>
      </div>
    </section>
  );
};

export default ReliabilitySection;
