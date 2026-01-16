
import React from 'react';
import { Shield, Target, Activity } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-[#050506] py-32 lg:py-48">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start mb-40">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tight">Engineering-first. <br/>Infrastructure-led.</h1>
            <div className="space-y-8 text-slate-400 text-lg leading-relaxed font-light">
              <p>
                Trinity Labs AI was founded on a simple premise: Enterprise AI should be as reliable and predictable as the electrical grid.
              </p>
              <p>
                While the broader market focused on novelty chatbots and consumer wrappers, we recognized a critical gap in the orchestration layer required to run AI safely inside legacy enterprise environments.
              </p>
              <p>
                Today, we serve organizations that cannot afford to fail. Our mission is to provide the operational maturity required to transition AI from a lab experiment to a mission-critical utility.
              </p>
            </div>
          </div>

          <div className="space-y-12 bg-[#0d0d0f] border border-white/5 p-12">
             <div>
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                   <Target size={18} className="text-teal-600"/> The Systems Mindset
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We value technical precision over marketing hype. If we cannot prove the deterministic safety of a workflow, we do not deploy it.
                </p>
             </div>
             <div>
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                   <Shield size={18} className="text-teal-600"/> Long-term Trust
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Infrastructure is built on decades, not cycles. Our roadmap is driven by the security requirements of the world's most critical sectors.
                </p>
             </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-32">
          <h2 className="text-[11px] font-bold text-teal-600 uppercase tracking-[0.5em] mb-16 text-center">Leadership Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: 'Auditable by Design', desc: 'If a decision cannot be traced back to its data origin and policy gate, it should not have been made.' },
              { title: 'Privacy as a Default', desc: 'Data isolation is not a feature; it is the fundamental requirement of enterprise trust.' },
              { title: 'Operational Resilience', desc: 'We build systems that survive provider failures gracefully, maintaining service continuity at all costs.' }
            ].map((p, i) => (
              <div key={i} className="text-center">
                <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-tighter">{p.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
