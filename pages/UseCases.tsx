
import React from 'react';
import { Phone, Calendar, Users, Briefcase, Zap, ArrowRight } from 'lucide-react';
import VideoPreview from '../components/VideoPreview';

const UseCases: React.FC = () => {
  const cases = [
    {
      title: 'Local Businesses',
      icon: <Phone />,
      image: 'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=1200&q=80',
      description: 'Answer missed calls, route customers, and capture new bookings automatically.',
      outcome: 'More leads captured with less staff overhead.'
    },
    {
      title: 'Call Centers',
      icon: <Users />,
      image: 'https://images.unsplash.com/photo-1560264418-c4445382edbc?auto=format&fit=crop&w=1200&q=80',
      description: 'Handle routine calls and send complex cases to agents with context.',
      outcome: 'Shorter queues and better handoffs.'
    },
    {
      title: 'Utilities & Energy Brokers',
      icon: <Zap />,
      image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
      description: 'Qualify inbound demand, confirm details, and route to the right advisor.',
      outcome: 'Handle call spikes without missed calls.'
    },
    {
      title: 'Real Estate Teams',
      icon: <Users />,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
      description: 'Pre-qualify buyers and renters, schedule viewings, and update CRM timelines automatically.',
      outcome: 'Respond to every lead in seconds, not hours.'
    },
    {
      title: 'Legal Firms',
      icon: <Briefcase />,
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
      description: 'Handle intake and qualification with clear escalation to staff.',
      outcome: 'Reduce admin load while keeping sensitive calls safe.'
    },
    {
      title: 'Clinics & Healthcare Admin',
      icon: <Calendar />,
      image: 'https://images.unsplash.com/photo-1504814532849-927c5c9f1a7f?auto=format&fit=crop&w=1200&q=80',
      description: 'Scheduling, confirmations, and intake routing for clinics and doctors’ surgeries.',
      outcome: 'Lower no-shows and improve patient communication.'
    },
    {
      title: 'Hospitality Groups',
      icon: <Phone />,
      image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80',
      description: 'Handle reservations, group inquiries, and after-hours service requests at scale.',
      outcome: 'Keep revenue capture running when staff is offline.'
    },
    {
      title: 'Agencies',
      icon: <ArrowRight />,
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
      description: 'Lead-gen, appointment setting, and follow-up campaigns with safety guardrails.',
      outcome: 'Scale outreach without runaway billing or call storms.'
    }
  ];

  return (
    <div className="bg-[#050506] py-24 md:py-32 lg:py-48 min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-32">
          <h1 className="text-5xl font-bold text-white mb-10 tracking-tight">Made for real businesses.</h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Trinity Voice is built for teams that depend on phones—local businesses, clinics, hospitals, and service teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 md:mb-24">
          {cases.map((item, i) => (
            <div key={i} className="p-8 md:p-12 bg-[#0d0d0f] border border-white/5 hover:border-white/10 transition-all flex flex-col h-full">
              <div className="mb-8 overflow-hidden rounded-2xl border border-white/10">
                <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              </div>
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

        <VideoPreview
          eyebrow="Use Case Preview"
          title="Outcome-driven workflows"
          description="Preview of inbound routing and outbound campaign automation."
        />

        <div className="p-16 bg-[#080809] border border-white/5 text-center">
           <h4 className="text-2xl font-bold text-white mb-8">Ready to see it in action?</h4>
           <a href="#/waitlist" className="inline-block bg-white text-black px-12 py-5 font-bold hover:bg-teal-500 hover:text-white transition-all text-xs tracking-widest uppercase">
              Join the Waitlist
           </a>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
