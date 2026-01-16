import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, Phone, Shield, ShieldCheck, Zap, Globe, BarChart, Server, Lock, Bot, Play,
  PhoneIncoming, ArrowUpRight, Calendar, MessageSquare, Users, BarChart3, Sparkles, ChevronRight 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import MatrixBackground from '../components/MatrixBackground';
import CapabilityCard from '../components/CapabilityCard';
import RevealOnScroll from '../components/RevealOnScroll';
import EnterpriseDashboard from '../components/EnterpriseDashboard';
import UseCasesSection from '../components/UseCasesSection';
import IntegrationProcess from '../components/IntegrationProcess';
import ReliabilitySection from '../components/ReliabilitySection';
import CostCalculator from '../components/CostCalculator';
import { TrinitySymbol } from '../components/TrinitySymbol';
import { HeroScrollDemo } from '../components/HeroScrollDemo';
import GlobalReachSection from '../components/GlobalReachSection';
import { CtaCard } from '../components/ui/cta-card';

const Home = () => {
  // Removed artificial delay state
  
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-green-500 selection:text-black overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-64 pb-20 px-6 overflow-hidden">
        
        {/* BACKGROUND: Matrix Rain */}
        <div className="absolute inset-0 z-0">
            <MatrixBackground />
            {/* Gradient Overlay to ensure text readability at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
            <div className="absolute inset-0 bg-black/40"></div> {/* General dimming for text contrast */}
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in-up">
          {/* Headline */}


          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight text-white drop-shadow-2xl">
            AI that answers and makes <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              calls for your business
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Trinity handles inbound and outbound calls, books appointments, qualifies leads, and updates your CRM—24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-2">
            <Link 
              to="/login" 
              className="group bg-gradient-to-r from-green-400 to-emerald-500 text-black px-10 py-4 font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] flex items-center space-x-2 uppercase tracking-widest text-xs relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></div>
              <span className="relative z-10">Sign Up</span>
              <ChevronRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform stroke-[3]" />
            </Link>
            
            <a href="#how-it-works" className="group px-8 py-4 rounded-full border border-white/10 hover:border-green-500/50 bg-white/5 hover:bg-green-500/10 transition-all flex items-center gap-2 uppercase tracking-widest text-xs font-bold text-slate-400 hover:text-green-400">
              <span>Read More</span>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 group-hover:bg-green-400 group-hover:shadow-[0_0_10px_#4ade80] transition-all"></div>
            </a>
          </div>

          {/* INLINE VOICE AGENT TRIGGER */}
          <div className="relative flex items-center justify-center animate-reveal delay-300">
             <div className="relative group w-56 h-56 flex items-center justify-center">
                {/* Try Me Hint */}
                <div className="absolute top-8 z-20 pointer-events-none">
                   <div className="flex flex-col items-center">
                      <span className="font-mono text-white text-[10px] uppercase tracking-[0.3em] animate-pulse">Try Me</span>
                   </div>
                </div>

                <button 
                  onClick={() => window.dispatchEvent(new Event('TRINITY_START_SESSION'))}
                  className="relative z-10 w-28 h-28 rounded-full bg-black border border-green-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-green-400 shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_60px_rgba(34,197,94,0.6)] animate-pulse-soft"
                >
                  <div className="w-[60%] h-[60%]"><TrinitySymbol active /></div>
                </button>
             </div>
          </div>
        </div>
        {/* ANIMATED TRANSITION: Soft Horizon */}
        <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none overflow-hidden">
            {/* 1. Deep Fade Out */}
            <div className="h-48 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            
             {/* 2. Ambient Energy Rising */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-green-500/10 blur-[100px] rounded-full"></div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="features" className="py-32 bg-[#080809] border-y border-white/5 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full"></div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
            <div className="max-w-3xl">
              <h2 className="text-[11px] font-bold text-green-500 uppercase tracking-[0.5em] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Core Capabilities
              </h2>
              <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Let Trinity handle your calls so your team doesn’t have to.
              </h3>
            </div>
            <p className="text-slate-400 max-w-md mb-2 font-light text-lg leading-relaxed border-l border-green-500/30 pl-6">
              Trinity is a voice AI that answers calls, makes outbound calls, books appointments, qualifies leads, and updates your CRM automatically — without scripts, menus, or long hold times.
            </p>
          </div>

          <RevealOnScroll delay={200}>
            <div className="text-center mb-12 text-slate-400 font-light text-xl">
               Trinity handles the calls your team shouldn’t have to.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { 
                 title: "Natural, human conversations", 
                 Icon: Sparkles, 
                 desc: "Trinity understands interruptions, intent, and tone — holding real conversations that feel human, not scripted or robotic." 
               },
               { 
                 title: "Automatic CRM updates", 
                 Icon: BarChart3, 
                 desc: "Every call is logged, summarized, and synced to your CRM in real time — with lead status, notes, and outcomes updated automatically." 
               },
               { 
                 title: "24/7 Inbound Reception", 
                 Icon: PhoneIncoming, 
                 desc: "Trinity answers every call instantly, handles common requests, and escalates urgent conversations to your team — so no lead or customer is ever missed." 
               },
               { 
                 title: "High-Volume Outreach", 
                 Icon: ArrowUpRight, 
                 desc: "Automatically follow up with leads, confirm appointments, run surveys, and re-engage past customers — without hiring or managing call staff." 
               },
               { 
                 title: "Autonomous Scheduling", 
                 Icon: Calendar, 
                 desc: "Trinity books, reschedules, and confirms appointments directly in your calendar — eliminating back-and-forth and no-shows." 
               },
               { 
                 title: "Global Language Support", 
                 Icon: Globe, 
                 desc: "Serve customers worldwide. Trinity speaks multiple languages with natural accents, allowing you to support and sell globally without extra staff." 
               }
             ].map((item, i) => (
               <CapabilityCard key={i} {...item} />
             ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Global Reach - Language Detection */}
      <GlobalReachSection />

      {/* Trust & Impact Section */}
      <section id="infrastructure" className="py-24 lg:py-48 relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
            <RevealOnScroll className="relative group perspective-1000 w-full max-w-lg lg:max-w-none mx-auto">
              <div className="absolute -inset-4 bg-green-500/20 rounded-[2rem] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
              <EnterpriseDashboard />
            </RevealOnScroll>
            
            <RevealOnScroll delay={200} className="flex flex-col items-start text-left">
              <h2 className="text-[10px] font-bold text-green-500 uppercase tracking-[0.5em] mb-10">Enterprise Control</h2>
              <h3 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">Built for businesses <br/> that can’t afford missed calls — or losing control.</h3>
              <p className="text-slate-400 text-lg font-light mb-8 max-w-lg leading-relaxed">
                Trinity automates conversations at scale while giving your team real-time visibility, full audit trails, and instant control whenever it matters.
              </p>
              
              <p className="text-white font-medium mb-12 text-lg border-l-2 border-green-500 pl-4 max-w-lg">
                Everything Trinity does is visible, searchable, and controllable from one central dashboard.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Complete Call Visibility & Audit Trails", desc: "Every call is logged, recorded, transcribed, and summarised automatically. Review conversations, search outcomes, and maintain full oversight without jumping between systems." },
                  { title: "Scale Instantly, Without Staffing Limits", desc: "Handle one call or ten thousand simultaneously. Trinity scales in real time with no queues, no bottlenecks, and no performance drop — even during peak demand." },
                  { title: "Human Escalation, On Your Terms", desc: "Stay in control at all times. Trinity escalates conversations to your team instantly whenever confidence thresholds, rules, or situations require a human touch." }
                ].map((tier, i) => (
                  <div key={i} className="group relative pl-8 border-l-2 border-white/5 hover:border-green-500 transition-colors duration-500 py-2">
                    <div className="absolute left-[-9px] top-3 w-4 h-4 rounded-full bg-[#0c0c0e] border-2 border-white/10 group-hover:border-green-500 group-hover:scale-110 transition-all duration-500 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-widest group-hover:text-green-400 transition-colors flex items-center gap-3">
                        <span className="text-green-900 group-hover:text-green-500 transition-colors text-xs">0{i+1}</span>
                        {tier.title}
                    </h4>
                    <p className="text-slate-400 leading-relaxed font-light text-sm max-w-md group-hover:text-slate-300 transition-colors">{tier.desc}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Hero Scroll Animation Demo */}
      <HeroScrollDemo />

      <UseCasesSection />



      <IntegrationProcess />

      <ReliabilitySection />

      <section className="py-24 relative px-6">
        <div className="max-w-screen-2xl mx-auto">
          <CtaCard
            title="Enterprise Ready"
            subtitle={<span>Scale your operations <br/><span className="text-slate-500">without scaling costs.</span></span>}
            description="Join forward-thinking enterprises that are automating millions of calls while maintaining human-level quality and full compliance."
            buttonText="Deploy Trinity"
            imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
            imageAlt="Global network data visualization"
            onButtonClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </section>
      
      <CostCalculator />

      {/* CTA Final Protocol */}
      <section id="cta" className="py-48 lg:py-72 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08),transparent_70%)]"></div>

        <RevealOnScroll className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="inline-block p-5 bg-green-500/5 border border-green-500/10 rounded-full mb-12">
            <ShieldCheck size={48} className="text-green-500 mx-auto" />
          </div>
          <h2 className="text-5xl md:text-[7rem] font-bold text-white mb-16 tracking-tighter leading-[0.85]">Start automating <br/> your calls.</h2>
          <p className="text-xl lg:text-2xl text-slate-400 mb-20 font-light max-w-2xl mx-auto leading-relaxed">
            The era of legacy IVR is over. Deploy Trinity and transform every phone interaction into a competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link to="/demo" className="w-full sm:w-auto bg-white text-black px-16 py-8 font-bold hover:bg-green-500 hover:text-white transition-all text-xs tracking-[0.3em] uppercase shadow-[0_20px_50px_rgba(0,0,0,0.5)] active:scale-95 rounded-xl">
              Talk to Trinity
            </Link>
            <Link to="/demo" className="w-full sm:w-auto border border-white/10 text-white px-16 py-8 font-bold hover:bg-white/5 transition-all text-xs tracking-[0.3em] uppercase active:scale-95 backdrop-blur-sm rounded-xl">
              Request a Demo
            </Link>
          </div>
          
          <div className="mt-32 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 text-[9px] font-bold text-slate-600 uppercase tracking-[0.4em]">
             <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div> SOC2_TYPE_II</span>
             <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div> AES_256_ENCRYPTED</span>
             <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div> ISO_27001_READY</span>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
};

export default Home;
