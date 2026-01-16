import React, { useState } from 'react';
import { BarChart3, MessageSquare, Calendar, PhoneIncoming, ArrowRight, Check } from 'lucide-react';
import CardMatrixRain from './CardMatrixRain';

const cases = [
  {
    id: 'sales',
    label: 'Sales Teams',
    headline: 'Never miss a lead. Never waste a rep’s time.',
    desc: 'Trinity qualifies inbound leads, follows up automatically, books meetings directly into your calendar, and escalates only high-intent conversations — complete with call summaries, objections, and next steps.',
    icon: BarChart3
  },
  {
    id: 'support',
    label: 'Customer Support',
    headline: 'Instant answers, without queues or scripts.',
    desc: 'Trinity resolves common issues immediately, routes complex cases to the right human, and logs every interaction automatically — reducing wait times while maintaining full accountability.',
    icon: MessageSquare
  },
  {
    id: 'ops',
    label: 'Operations & Reception',
    headline: 'A receptionist that never misses a call.',
    desc: 'Trinity answers every call, handles routine requests, schedules appointments, and escalates urgent issues in real time — even outside business hours.',
    icon: PhoneIncoming
  },
  {
    id: 'outreach',
    label: 'High-Volume Outreach',
    headline: 'Scale conversations, not headcount.',
    desc: 'Trinity runs thousands of outbound calls simultaneously for surveys, follow-ups, confirmations, and reactivation campaigns — without hiring or managing a call centre.',
    icon: Calendar // Calendar is good for scheduling, but "High Volume" could be Phone/Megaphone. User didn't specify icon. I'll use Calendar for now or stick to the previous 'ArrowUpRight'. Let's use Calendar as it was used for scheduling before, but wait... Outreach is different. Let's use Users? or BarChart? The prompt mapped Outreach to "High-Volume". Let's import Users.
  }
];

const UseCasesSection = () => {
  const [activeId, setActiveId] = useState(cases[0].id);

  return (
    <section id="use-cases" className="py-24 lg:py-32 bg-black relative border-t border-white/5">
       <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          
          {/* Header */}
          <div className="mb-20 max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Trinity adapts to how your business actually works.</h2>
              <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                  Different teams rely on calls in different ways. Trinity configures itself around your workflows — not the other way around.
              </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
             {/* Navigation (Left) */}
             <div className="lg:col-span-4 flex flex-col gap-2">
                {cases.map((c) => (
                    <button
                        key={c.id}
                        onClick={() => setActiveId(c.id)}
                        className={`text-left p-6 transition-all duration-300 rounded-xl border flex items-center justify-between group ${
                            activeId === c.id 
                            ? 'bg-white/5 border-green-500/50 shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)]' 
                            : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/10'
                        }`}
                    >
                        <span className={`text-lg font-bold tracking-tight ${activeId === c.id ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>
                            {c.label}
                        </span>
                        {activeId === c.id && <ArrowRight size={18} className="text-green-500 animate-slide-right" />}
                    </button>
                ))}
             </div>

             {/* Content (Right) */}
             <div className="lg:col-span-8">
                {cases.map((c) => (
                    <div 
                        key={c.id} 
                        className={`transition-all duration-500 ${activeId === c.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 hidden'}`}
                    >
                        <div className="p-8 md:p-12 rounded-3xl bg-[#0c0c0e] border border-white/10 relative overflow-hidden h-full min-h-[400px] flex flex-col justify-center group">
                            {/* Matrix Rain Effect - Always Active */}
                            <CardMatrixRain />

                            {/* Background Decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-[80px] rounded-full pointer-events-none"></div>
                            
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-green-500/20 transition-colors duration-500 flex items-center justify-center mb-8 border border-white/10 group-hover:border-green-500/50">
                                    <c.icon size={24} className="text-green-500 group-hover:text-green-400 transition-colors" />
                                </div>
                                
                                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight leading-tight group-hover:translate-x-1 transition-transform duration-300">
                                    {c.headline}
                                </h3>
                                
                                <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl group-hover:text-slate-300 transition-colors">
                                    {c.desc}
                                </p>

                                <div className="border-t border-white/5 pt-8 flex items-center gap-4 text-sm font-bold text-green-500 uppercase tracking-wider group-hover:border-green-500/20 transition-colors">
                                    <Check size={16} />
                                    <span>Outcome Delivered</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
             </div>
          </div>

       </div>
    </section>
  );
};

export default UseCasesSection;
