import React from 'react';
import { Shield, Radio, Server, CheckCircle2, PhoneCall, Layers, Cpu } from 'lucide-react';
import VideoPreview from '../components/VideoPreview';

const Platform: React.FC = () => {
  return (
    <div className="bg-[#050506] py-24 md:py-32 lg:py-48">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-10 tracking-tight">A reliable platform for business calls.</h1>
          <p className="text-xl text-slate-400 leading-relaxed font-light">
            Trinity Voice answers calls, routes customers, and logs results so your team can focus on the work that matters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24 md:mb-32 items-start">
          <div className="space-y-12">
            {[
              {
                title: 'Call Control',
                icon: <Cpu size={24} className="text-teal-500" />,
                desc: 'Keeps calls safe and controlled, even at high volume.'
              },
              {
                title: 'Voice CRM',
                icon: <Layers size={24} className="text-teal-500" />,
                desc: 'Every call is logged with outcomes your team can act on.'
              },
              {
                title: 'Provider-Agnostic Telephony',
                icon: <PhoneCall size={24} className="text-teal-500" />,
                desc: 'Designed to be secure and independent of any single provider.'
              }
            ].map((item) => (
              <div key={item.title} className="flex gap-6">
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#0a0a0c] border border-white/5 p-8 md:p-12 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-6">Built for safe scale.</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-light mb-10">
              Calls run with clear guardrails so volume never becomes chaos.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Call volume controls',
                'Cost guardrails',
                'Reliable dispatch',
                'Clear call records'
              ].map((label) => (
                <div key={label} className="p-4 border border-white/5 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <VideoPreview
          eyebrow="Platform Preview"
          title="How Trinity handles calls"
          description="Preview of routing, safety checks, and call outcomes."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Reliable by Design', icon: <Server size={22} />, desc: 'Built to handle real call volume without breaking.' },
            { title: 'Secure by Default', icon: <Shield size={22} />, desc: 'Protected data and clear access controls.' },
            { title: 'Fast & Natural', icon: <Radio size={22} />, desc: 'Smooth conversations that feel human.' }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-[#0d0d0f] border border-white/5 rounded-2xl">
              <div className="text-teal-500 mb-4">{item.icon}</div>
              <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-[11px]">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 p-8 md:p-12 bg-[#0b0b0d] border border-white/10 rounded-3xl">
          <div className="flex items-start gap-4">
            <CheckCircle2 size={22} className="text-teal-500 mt-1" />
            <p className="text-slate-400 font-light">
              Built for teams that need consistent, dependable calling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
