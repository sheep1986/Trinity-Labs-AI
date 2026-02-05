
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import VideoPreview from '../components/VideoPreview';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is Trinity Voice available to the public?",
      answer: "Not yet. Trinity Voice is onboarding organizations in controlled waves. Join the waitlist to be considered for early access."
    },
    {
      question: "What makes Trinity different from a dialer or chatbot?",
      answer: "It is built to run real business calls reliably, with clear routing and outcomes."
    },
    {
      question: "Does it replace my human team?",
      answer: "No. It automates repetitive call workflows and escalates to humans when needed, so your team focuses on high-value conversations."
    },
    {
      question: "How do you keep data safe?",
      answer: "We protect sensitive details, keep organizations isolated, and provide clear call records."
    },
    {
      question: "What industries are a fit?",
      answer: "Utilities and energy brokers, real estate, legal firms, healthcare admin, hospitality groups, and agencies."
    },
    {
      question: "Can I control what the AI says?",
      answer: "Yes. Calls follow your policies, routing logic, and escalation rules with full traceability."
    }
  ];

  return (
    <div className="bg-[#050506] py-24 md:py-32 lg:py-48 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="flex items-center space-x-2 text-teal-600 mb-8 justify-center">
            <MessageCircle size={20} />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Help Center</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-16 md:mb-20 text-center tracking-tight">Your Questions Answered.</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#0d0d0f] border border-white/5 overflow-hidden transition-all">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-8 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-white font-bold pr-4 uppercase tracking-tighter text-sm md:text-base">{faq.question}</span>
                {openIndex === idx ? <ChevronUp className="text-teal-500" size={18} /> : <ChevronDown className="text-slate-600" size={18} />}
              </button>
              {openIndex === idx && (
                <div className="p-8 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5 font-light">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-slate-600 mb-8 text-xs uppercase tracking-widest font-bold">Still have questions?</p>
          <a href="#/contact" className="bg-transparent border border-white/10 text-white px-12 py-4 font-bold hover:bg-white/5 transition-all text-xs tracking-widest uppercase inline-block">
            Talk to Sales
          </a>
        </div>

        <div className="mt-24">
          <VideoPreview
            eyebrow="FAQ Preview"
            title="How Trinity handles calls"
            description="Preview of routing, safety checks, and call outcomes."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
