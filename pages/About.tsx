
import React from 'react';
import { Shield, Target, Activity } from 'lucide-react';
import VideoPreview from '../components/VideoPreview';

const About: React.FC = () => {
  return (
    <div className="bg-[#050506] py-24 md:py-32 lg:py-48">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start mb-24 md:mb-40">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tight">Built for dependable calling.</h1>
            <div className="space-y-8 text-slate-400 text-lg leading-relaxed font-light">
              <p>
                Trinity Labs AI was founded on a simple premise: business calls should be reliable and easy to manage.
              </p>
              <p>
                While the market focused on generic chatbots, we built a system designed to handle real call volume and real customer needs.
              </p>
              <p>
                Today, we serve organizations that need dependable calling at scale. Our mission is to make AI calling safe, predictable, and useful in everyday operations.
              </p>
            </div>
          </div>

          <div className="space-y-12 bg-[#0d0d0f] border border-white/5 p-8 md:p-12">
             <div>
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                   <Target size={18} className="text-teal-600"/> Practical by Design
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We focus on reliability and clear outcomes, not hype.
                </p>
             </div>
             <div>
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                   <Shield size={18} className="text-teal-600"/> Long‑Term Trust
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We build for safety and consistency, especially in regulated environments.
                </p>
             </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-32">
          <h2 className="text-[11px] font-bold text-teal-600 uppercase tracking-[0.5em] mb-16 text-center">How We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: 'Clear by Design', desc: 'Decisions are traceable and easy to review.' },
              { title: 'Privacy by Default', desc: 'Data protection is built into every workflow.' },
              { title: 'Operational Resilience', desc: 'The system is built to handle real-world failures.' }
            ].map((p, i) => (
              <div key={i} className="text-center">
                <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-tighter">{p.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <VideoPreview
            eyebrow="Team Preview"
            title="Why Trinity is built this way"
            description="Short walkthrough of the systems mindset behind the platform."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
