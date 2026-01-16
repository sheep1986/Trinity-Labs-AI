import React from 'react';
import { BGPattern } from './ui/bg-pattern';
import { Features } from './ui/features';
import { Network, Workflow, BarChart3 } from 'lucide-react';

const IntegrationProcess = () => {

  return (
    <section className="py-24 lg:py-32 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Dots Background Pattern */}
      <BGPattern
        variant="dots"
        mask="fade-edges"
        size={32}
        fill="rgba(34, 197, 94, 0.15)"
      />

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
             Up and running in days not months.
           </h2>
           <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
             Trinity integrates into your existing systems and workflows with minimal setup, no disruption, and full control from day one.
           </p>
        </div>

        {/* Features Component Implementation */}
        <Features 
          features={[
            {
              id: 1,
              icon: Network,
              title: "Connect your systems",
              description: "Securely connect Trinity to your phone numbers, CRM, and calendar. No infrastructure changes. No new hardware.",
              image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop" // Abstract Tech / Circuit Board
            },
            {
              id: 2,
              icon: Workflow,
              title: "Define rules, not scripts",
              description: "Set escalation rules, confidence thresholds, scheduling logic, and handoff conditions. Trinity adapts in real time.",
              image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop" // Corporate Team Strategy Meeting
            },
            {
              id: 3,
              icon: BarChart3,
              title: "Go live with full visibility",
              description: "Every call is logged, transcribed, and summarised. Monitor performance, adjust behaviour, and scale instantly.",
              image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop" // Keeping original as liked
            }
          ]}
        />

        <div className="text-center mt-20 animate-fade-in-up">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-mono uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Most teams are live within 48–72 hours.
           </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default IntegrationProcess;
