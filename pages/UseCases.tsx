
import React from 'react';
import { Phone, Calendar, Users, Briefcase, Zap, ArrowRight } from 'lucide-react';

const UseCases: React.FC = () => {
  const cases = [
    {
      title: 'Sales Teams',
      icon: <Zap />,
      description: 'Automatically follow up with new leads, qualify them based on your criteria, and book them directly into your sales team\'s calendar.',
      outcome: 'Increase conversion rates by responding to every lead within seconds.'
    },
    {
      title: 'Customer Support',
      icon: <Users />,
      description: 'Answer common questions, troubleshoot issues, and provide 24/7 support without the overhead of a night shift.',
      outcome: 'Reduce wait times to zero and keep your customers happy around the clock.'
    },
    {
      title: 'Appointment Booking',
      icon: <Calendar />,
      description: 'For clinics, salons, and service providers. AI handles the entire scheduling process, from first call to confirmation SMS.',
      outcome: 'Stop losing business to missed calls during busy hours.'
    },
    {
      title: 'Lead Qualification',
      icon: <Briefcase />,
      description: 'Filter out low-quality inquiries so your team only talks to people who are a perfect fit for your service.',
      outcome: 'Save your team hours of manual phone work every single day.'
    }
  ];

  return (
    <div className="bg-[#050506] py-32 lg:py-48 min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-32">
          <h1 className="text-5xl font-bold text-white mb-10 tracking-tight">Practical ROI.</h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Trinity Labs AI is designed to solve real business problems. Whether you're a local founder or a global operations lead, we have a solution that saves you time and money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
          {cases.map((item, i) => (
            <div key={i} className="p-12 bg-[#0d0d0f] border border-white/5 hover:border-white/10 transition-all flex flex-col h-full">
              <div className="text-teal-600 mb-8 w-fit p-3 bg-white/5">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tighter">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-10 flex-grow">{item.description}</p>
              <div className="pt-8 border-t border-white/5">
                <p className="text-[10px] font-bold text-teal-900 uppercase tracking-[0.2em] mb-4">Key Outcome</p>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white text-xs font-medium">{item.outcome}</span>
                  <ArrowRight size={14} className="text-slate-700 flex-shrink-0"/>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-16 bg-[#080809] border border-white/5 text-center">
           <h4 className="text-2xl font-bold text-white mb-8">Ready to see it in action?</h4>
           <button className="bg-white text-black px-12 py-5 font-bold hover:bg-teal-500 hover:text-white transition-all text-xs tracking-widest uppercase">
              Schedule Your Demo
           </button>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
