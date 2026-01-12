
import React from 'react';
import { Shield, Radio, Server, CheckCircle2, PhoneCall } from 'lucide-react';

const Platform: React.FC = () => {
  return (
    <div className="bg-[#050506] py-32 lg:py-48">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mb-32">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-10 tracking-tight">A Smarter Way to <br/> Run Business Calls.</h1>
          <p className="text-xl text-slate-400 leading-relaxed font-light">
            Trinity Labs AI is built on a secure, enterprise-grade platform designed for reliability and control. We don't just provide a tool; we provide a complete system for call automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40 items-center">
           <div className="space-y-16">
              {[
                { 
                  title: 'Reliability You Can Trust', 
                  icon: <Server size={24} className="text-teal-600"/>,
                  desc: 'Used by teams that need consistency and accountability. Our system is built for 99.9% uptime and zero missed events.' 
                },
                { 
                  title: 'Secure by Design', 
                  icon: <Shield size={24} className="text-teal-600"/>,
                  desc: 'Your customer data is encrypted and protected. We build for highly regulated industries where privacy is non-negotiable.' 
                },
                { 
                  title: 'Fast & Natural Responses', 
                  icon: <Radio size={24} className="text-teal-600"/>,
                  desc: 'Our AI responds in milliseconds, making conversations feel fluid and natural to your customers.' 
                }
              ].map(item => (
                <div key={item.title} className="flex gap-8">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
           </div>
           
           <div className="bg-[#0a0a0c] border border-white/5 p-12 text-center">
              <PhoneCall size={64} className="text-teal-900 mx-auto mb-8 opacity-40" />
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise-Grade Architecture.</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light mb-10">
                While the experience is simple for you, the technology beneath is some of the most advanced in the world.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 border border-white/5 text-[10px] text-slate-500 font-bold uppercase tracking-widest">Low Latency</div>
                 <div className="p-4 border border-white/5 text-[10px] text-slate-500 font-bold uppercase tracking-widest">Auto-Scale</div>
                 <div className="p-4 border border-white/5 text-[10px] text-slate-500 font-bold uppercase tracking-widest">Encrypted</div>
                 <div className="p-4 border border-white/5 text-[10px] text-slate-500 font-bold uppercase tracking-widest">API Ready</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
