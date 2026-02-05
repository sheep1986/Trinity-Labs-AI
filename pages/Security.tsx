import React from 'react';
import { Shield, Lock, FileCheck, Database, Globe, CheckCircle2 } from 'lucide-react';
import VideoPreview from '../components/VideoPreview';

const Security: React.FC = () => {
  return (
    <div className="bg-[#050506] pt-12 md:pt-16 pb-24 md:pb-32 lg:pb-40">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6 text-[10px] font-bold text-teal-500 uppercase tracking-widest">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
              Security Core
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[0.95] mb-6">
              Built to keep calls safe and controlled.
            </h1>
            <p className="text-lg text-slate-400 font-light leading-relaxed max-w-xl">
              Trinity Voice protects sensitive data and gives your team clear control over every call.
            </p>
          </div>
          <div className="bg-[#0d0d0f] border border-white/10 rounded-3xl p-8 md:p-10">
            <h3 className="text-white font-bold text-lg mb-4">Safety by design</h3>
            <ul className="space-y-3 text-slate-400 text-sm font-light">
              <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-teal-500 mt-1" /> Sensitive details are masked by default.</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-teal-500 mt-1" /> Calls are logged with clear records.</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-teal-500 mt-1" /> Data retention is explicit and controlled.</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Data Separation', icon: <Database />, desc: 'Each organization is kept separate and secure.' },
            { title: 'Secure Integrations', icon: <Lock />, desc: 'Verified requests and protected connections.' },
            { title: 'Clear Records', icon: <FileCheck />, desc: 'Every action is traceable and reviewable.' },
            { title: 'Inbound Protection', icon: <Shield />, desc: 'Routing avoids exposing system details.' },
            { title: 'Regional Options', icon: <Globe />, desc: 'Deployment options aligned to your requirements.' },
            { title: 'Cost Controls', icon: <CheckCircle2 />, desc: 'Hard stops before cost is incurred.' }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-[#0d0d0f] border border-white/5 rounded-2xl">
              <div className="text-teal-500 mb-4">{item.icon}</div>
              <h3 className="text-white font-bold mb-3 uppercase tracking-widest text-[11px]">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        <VideoPreview
          eyebrow="Security Preview"
          title="Safety in practice"
          description="Preview of how sensitive calls are protected."
        />

        <div className="mt-16 md:mt-20 p-8 md:p-12 bg-[#0b0b0d] border border-white/10 rounded-3xl">
          <h3 className="text-white font-bold text-2xl mb-4">Built for trust at scale.</h3>
          <p className="text-slate-400 font-light leading-relaxed max-w-3xl">
            The platform is intentionally conservative: calls are controlled, costs are checked before dispatch, and failures are contained by design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Security;
