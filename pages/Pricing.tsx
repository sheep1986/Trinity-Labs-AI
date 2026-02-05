
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import VideoPreview from '../components/VideoPreview';

const Pricing: React.FC = () => {
  const tiers = [
    {
      name: 'Starter',
      price: 'By invitation',
      period: '',
      desc: 'For focused teams automating a single call flow or queue.',
      features: [
        'Inbound call handling',
        'Structured call intelligence',
        'Baseline routing policies',
        'Execution safeguards'
      ],
      cta: 'Join Waitlist'
    },
    {
      name: 'Growth',
      price: 'By invitation',
      period: '',
      desc: 'For teams running multi-campaign outbound and inbound routing at scale.',
      features: [
        'Outbound campaign support',
        'Call volume controls',
        'Advanced routing logic',
        'Priority onboarding'
      ],
      cta: 'Join Waitlist',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Tailored',
      period: '',
      desc: 'For regulated, high-volume organizations with strict controls.',
      features: [
        'Privacy-first handling',
        'Custom governance policies',
        'Dedicated implementation',
        'Cost controls'
      ],
      cta: 'Join Waitlist'
    }
  ];

  return (
    <div className="bg-[#050506] py-24 md:py-32 lg:py-48 min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20 md:mb-32">
          <h1 className="text-6xl font-bold text-white mb-10 tracking-tight">Pricing by invitation.</h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            We onboard in waves and tailor pricing to your call volume and workflow needs.
          </p>
        </div>

        <div id="pricing-tiers" className="grid grid-cols-1 lg:grid-cols-3 gap-8 rounded-3xl transition-all duration-300">
           {tiers.map((tier, i) => (
             <div key={i} className={`relative p-8 md:p-12 flex flex-col transition-all border ${tier.popular ? 'border-teal-500/50 bg-teal-500/[0.02]' : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.02]'} rounded-2xl`}>
               {tier.popular && (
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-teal-500 text-black text-[10px] font-bold uppercase tracking-widest rounded-full">Most Popular</div>
               )}
               <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{tier.name}</h3>
               <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-white/5">
                 <span className="text-3xl font-bold text-white tracking-tighter">{tier.price}</span>
                 <span className="text-slate-600 text-sm uppercase mono font-bold">{tier.period}</span>
               </div>
               <p className="text-slate-500 text-sm mb-12 leading-relaxed min-h-[48px]">{tier.desc}</p>
               
               <div className="space-y-5 mb-16 flex-grow">
                 {tier.features.map(f => (
                   <div key={f} className="flex items-start space-x-3 text-slate-300 text-sm">
                     <Check size={16} className="text-teal-500 mt-0.5 flex-shrink-0" />
                     <span className="font-light">{f}</span>
                   </div>
                 ))}
               </div>

               <Link 
                 to="/waitlist" 
                 className={`flex items-center justify-center space-x-2 w-full py-5 font-bold uppercase tracking-widest text-[10px] transition-all rounded-xl ${
                   tier.popular ? 'bg-white text-black hover:bg-teal-500 hover:text-white' : 'border border-white/20 text-white hover:bg-white/5'
                 }`}
               >
                 <span>{tier.cta}</span>
                 <ArrowRight size={14} />
               </Link>
             </div>
           ))}
        </div>

        <VideoPreview
          eyebrow="Access Preview"
          title="How onboarding works"
          description="Preview of access waves, safety checks, and deployment alignment."
        />

        <div className="mt-20 md:mt-32 p-8 md:p-16 glass flex flex-col md:flex-row items-center justify-between gap-12 rounded-3xl transition-all duration-300">
           <div className="max-w-2xl">
              <h4 className="text-white font-bold text-xl mb-4">By invitation only.</h4>
              <p className="text-slate-500 leading-relaxed font-light">
                We tailor access based on your call volume and operational needs. Join the waitlist to begin evaluation.
              </p>
           </div>
           <Link to="/waitlist" className="text-sm font-bold uppercase tracking-widest text-white border-b border-teal-500 hover:text-teal-500 transition-colors pb-1">
              Join Waitlist
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
