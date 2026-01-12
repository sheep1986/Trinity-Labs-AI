
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

const Pricing: React.FC = () => {
  const tiers = [
    {
      name: 'Starter',
      price: '$299',
      period: '/mo',
      desc: 'Essential automation for local businesses and small service teams.',
      features: [
        '24/7 Inbound Answering',
        'Automatic Booking',
        'Email & SMS Follow-ups',
        'Standard Voice Library',
        'Email Support'
      ],
      cta: 'Start with Starter'
    },
    {
      name: 'Growth',
      price: '$899',
      period: '/mo',
      desc: 'Built for high-volume sales teams and busy customer support centers.',
      features: [
        'Everything in Starter',
        'Outbound Sales Calling',
        'Direct CRM Integration',
        'Custom Voice Fine-tuning',
        'Priority Phone Support'
      ],
      cta: 'Scale with Growth',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'The complete orchestration layer for global operations and regulated industries.',
      features: [
        'Custom Security Audits',
        'Dedicated Support Manager',
        'Advanced Analytics Suite',
        'Unlimited API Requests',
        'SLA Guaranteed Uptime'
      ],
      cta: 'Contact Sales'
    }
  ];

  return (
    <div className="bg-[#050506] py-32 lg:py-48 min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-32">
          <h1 className="text-6xl font-bold text-white mb-10 tracking-tight">Predictable Pricing.</h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            No per-seat licenses. We believe you should pay for outcomes, not headcount. Simple, usage-based plans designed for businesses that need to scale.
          </p>
        </div>

        <div id="pricing-tiers" className="grid grid-cols-1 lg:grid-cols-3 gap-8 rounded-3xl transition-all duration-300">
           {tiers.map((tier, i) => (
             <div key={i} className={`relative p-12 flex flex-col transition-all border ${tier.popular ? 'border-teal-500/50 bg-teal-500/[0.02]' : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.02]'} rounded-2xl`}>
               {tier.popular && (
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-teal-500 text-black text-[10px] font-bold uppercase tracking-widest rounded-full">Most Popular</div>
               )}
               <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{tier.name}</h3>
               <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-white/5">
                 <span className="text-5xl font-bold text-white tracking-tighter">{tier.price}</span>
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
                 to="/demo" 
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

        <div id="compliance-summary" className="mt-32 p-16 glass flex flex-col md:flex-row items-center justify-between gap-12 rounded-3xl transition-all duration-300">
           <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-teal-500 mb-6">
                 <ShieldCheck size={24} />
                 <h4 className="text-white font-bold text-xl">Secure and compliant by default.</h4>
              </div>
              <p className="text-slate-500 leading-relaxed font-light">
                All plans include bank-grade encryption, SOC2 readiness, and strict data residency options. We ensure your business—and your customers—are always protected.
              </p>
           </div>
           <Link to="/demo" className="text-sm font-bold uppercase tracking-widest text-white border-b border-teal-500 hover:text-teal-500 transition-colors pb-1">
              Talk to a Security Expert
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
