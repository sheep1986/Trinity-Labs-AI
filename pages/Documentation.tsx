
import React from 'react';
import { Lock, FileText, Code, ShieldCheck } from 'lucide-react';

const Documentation: React.FC = () => {
  return (
    <div className="bg-[#0a0a0b] py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center py-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6 text-[10px] font-bold text-teal-500 uppercase tracking-widest">
            <Lock size={12} />
            Access Controlled
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Documentation is private.</h1>
          <p className="text-slate-400 mb-10">
            Developer documentation and API references are available after access approval. Join the waitlist to receive onboarding materials.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-12">
            {[
              { title: 'Platform Overview', icon: <FileText size={18} />, desc: 'How calls are routed, handled, and logged.' },
              { title: 'Security & Access', icon: <ShieldCheck size={18} />, desc: 'How data is protected and access is controlled.' },
              { title: 'Developer Guides', icon: <Code size={18} />, desc: 'Integration patterns and setup guides.' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-[#1a1a1c] border border-[#2d2d30] rounded-xl">
                <div className="text-teal-500 mb-4">{item.icon}</div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
