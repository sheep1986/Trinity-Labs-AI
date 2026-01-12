
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is Trinity Labs AI hard to set up?",
      answer: "Not at all. Most businesses can have their first AI agent ready in under an hour. You just provide your script or business rules, and we handle the technical side. We also have a dedicated team to help you integrate it with your existing phone system."
    },
    {
      question: "Does it replace my human team?",
      answer: "It acts as a support system. By handling repetitive tasks like answering basic questions or qualifying leads, it frees up your team to focus on closing sales and handling complex customer needs that require a human touch."
    },
    {
      question: "Can it transfer calls to a real person?",
      answer: "Yes. If a caller asks for a human or if the AI detects the conversation requires a real person, it can instantly transfer the call to any number you specify, providing a full transcript of what's been discussed."
    },
    {
      question: "Is it secure and private?",
      answer: "Security is our top priority. We use high-level encryption for all call data and we never share your business information. You have full control over what data is saved and how it is used."
    },
    {
      question: "What industries does it work for?",
      answer: "We work with everything from local service businesses (plumbers, dentists) to large sales organizations and customer support centers. If your business uses the phone, Trinity Labs AI can help."
    },
    {
      question: "Can I control exactly what the AI says?",
      answer: "Absolutely. You set the scripts, the tone, and the rules. You can review every call to ensure the AI is representing your brand exactly the way you want it to."
    }
  ];

  return (
    <div className="bg-[#050506] py-32 lg:py-48 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="flex items-center space-x-2 text-teal-600 mb-8 justify-center">
            <MessageCircle size={20} />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Help Center</span>
        </div>
        <h1 className="text-5xl font-bold text-white mb-20 text-center tracking-tight">Your Questions Answered.</h1>
        
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
          <button className="bg-transparent border border-white/10 text-white px-12 py-4 font-bold hover:bg-white/5 transition-all text-xs tracking-widest uppercase">
            Speak to a Specialist
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
