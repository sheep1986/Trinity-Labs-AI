
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, PhoneIncoming, Calendar, Users, MessageSquare, ArrowUpRight, ShieldCheck, CheckCircle2, BarChart3, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-[#050506] overflow-x-hidden">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 lg:pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#141415_1px,transparent_1px),linear-gradient(to_bottom,#141415_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-teal-500/5 blur-[80px] rounded-full opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050506]/90 to-[#050506]"></div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10 w-full flex-grow flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center w-full">
            <div className="lg:col-span-7 flex flex-col items-start animate-reveal">
              <div className="inline-flex items-center space-x-3 text-teal-400 font-bold tracking-[0.25em] text-[10px] uppercase mb-8 border border-teal-500/20 px-5 py-2 rounded-full bg-teal-500/5 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse shadow-[0_0_8px_#14b8a6]"></div>
                <span>Sentinel Protocol v4.2 Active</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.1] mb-8">
                Autonomous AI <br/>
                <span className="text-teal-500 relative">
                  Voice Infrastructure.
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-teal-500/20 rounded-full"></span>
                </span>
              </h1>
              
              <p className="text-base sm:text-xl text-slate-400 mb-10 max-w-2xl font-light leading-relaxed">
                Deploy human-fidelity voice agents that manage complex call flows, sync deep with your CRM, and operate 24/7. Mission-critical reliability for the modern enterprise.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                <Link 
                  to="/demo" 
                  className="group w-full sm:w-auto bg-white text-black px-12 py-5 font-bold text-center transition-all hover:bg-teal-500 hover:text-white flex items-center justify-center space-x-3 text-[11px] tracking-[0.2em] uppercase"
                >
                  <span>Request Full Access</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex items-center gap-4 text-slate-500 hover:text-teal-500 transition-colors group cursor-pointer py-2">
                  <div className="p-2.5 glass border-white/5 rounded-full group-hover:border-teal-500/30">
                    <Sparkles size={14} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Voice AI Systems Active</span>
                </div>
              </div>

              <div className="mt-4 lg:mt-8 pt-6 border-t border-white/5 w-full">
                <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-slate-600 block mb-4">Powering Mission-Critical Nodes</span>
                <div className="flex flex-wrap items-center gap-x-12 gap-y-8 opacity-30 transition-opacity hover:opacity-60">
                  {['SOLAR_TECH', 'LUXE_REALTY', 'HEALTH_PLUS', 'NEXUS_CAPITAL'].map(brand => (
                    <span key={brand} className="text-[11px] font-black italic tracking-tighter text-white font-mono">{brand}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block animate-reveal [animation-delay:200ms]">
              <div className="relative glass p-10 border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)] overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                  <BarChart3 size={120} className="text-teal-500" />
                </div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/5 blur-[60px] rounded-full"></div>
                
                <div className="flex items-center justify-between mb-12 pb-5 border-b border-white/5">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                    <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Neural Pipeline</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-teal-500 font-mono text-[9px] bg-teal-500/5 px-2 py-0.5 border border-teal-500/10">SYNCING</span>
                    <span className="text-slate-500 font-mono text-[9px]">L: 24ms</span>
                  </div>
                </div>

                <div id="pipeline-status" className="space-y-4 rounded-xl transition-all duration-300">
                  {[
                    { name: 'Lead Qualification', status: 'Processing', icon: <Users size={12}/>, color: 'text-teal-500' },
                    { name: 'Appointment Booking', status: 'Confirmed', icon: <Calendar size={12}/>, color: 'text-teal-500' },
                    { name: 'Technical Support', status: 'Routing', icon: <PhoneIncoming size={12}/>, color: 'text-amber-500' }
                  ].map((call, i) => (
                    <div key={i} className="flex items-center justify-between p-5 bg-white/[0.02] border border-white/5 hover:border-teal-500/20 hover:bg-white/[0.04] transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded bg-black border border-white/5 flex items-center justify-center text-slate-500 group-hover:text-teal-500">
                          {call.icon}
                        </div>
                        <span className="text-[11px] font-bold text-slate-200">{call.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[8px] font-bold uppercase tracking-widest ${call.color}`}>
                          {call.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 relative z-10">
                  <div className="flex justify-between items-center mb-5">
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Aggregate Efficiency</span>
                      <span className="text-white text-xs font-mono">NODE_CLUSTER_TR-09</span>
                    </div>
                    <div className="text-right">
                      <span className="text-teal-500 font-bold text-xl tracking-tight">+$1,420.00</span>
                      <div className="text-[8px] text-teal-600 font-bold uppercase tracking-widest">Real-time ROI</div>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500/80 w-[84%] shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="features" className="py-24 lg:py-48 bg-[#080809] border-y border-white/5 relative">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-bold text-teal-500 uppercase tracking-[0.5em] mb-6">Autonomous Capabilities</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">The orchestration layer <br/> for high-volume voice.</h3>
            </div>
            <p className="text-slate-500 max-w-sm mb-2 font-light text-lg leading-relaxed">
              Proprietary synthesis engines designed for enterprise scale. Sounds like your best agent—on their best day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-3xl">
             {[
               { title: "Universal Inbound", Icon: PhoneIncoming, desc: "Never miss a lead. Instantly answer, qualify, and route every call with sub-second latency." },
               { title: "High-Volume Outbound", Icon: ArrowUpRight, desc: "Automate complex follow-up sequences and lead nurturing with perfectly natural human tone." },
               { title: "Precision Scheduling", Icon: Calendar, desc: "Full calendar orchestration. Handles conflicting slots, rescheduling, and cancellations automatically." },
               { title: "Dynamic Logic Layer", Icon: MessageSquare, desc: "Agents that think. Processes multi-step instructions and updates CRM fields in real-time." },
               { title: "Sentinel Guardrails", Icon: Users, desc: "Built-in safety filters ensure compliance. Instantly escalates high-risk calls to senior human staff." },
               { title: "Native System Bridge", Icon: CheckCircle2, desc: "Direct deep-links into SAP, Salesforce, and custom VPCs. No middleware required." }
             ].map((item, i) => (
               <div key={i} className="group p-12 bg-[#050506] hover:bg-[#08080a] transition-all duration-500 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-0 bg-teal-500 group-hover:h-full transition-all duration-500"></div>
                 <div className="text-teal-500/30 group-hover:text-teal-500 mb-10 transition-colors duration-500 transform group-hover:scale-110">
                    <item.Icon size={36} />
                 </div>
                 <h4 className="text-2xl font-bold text-white mb-5 tracking-tight group-hover:text-teal-500 transition-colors">{item.title}</h4>
                 <p className="text-slate-400 text-sm leading-relaxed font-light">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Trust & Impact Section */}
      <section id="infrastructure" className="py-24 lg:py-48 relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-teal-500/10 blur-[100px] group-hover:bg-teal-500/20 transition-all duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Architecture" 
                loading="lazy"
                className="relative w-full h-[500px] lg:h-[700px] object-cover grayscale brightness-75 opacity-70 border border-white/5 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 rounded-3xl"
              />
              <div className="absolute bottom-10 right-10 glass p-8 border border-white/10 hidden md:block rounded-2xl">
                <div className="text-teal-500 font-bold text-4xl mb-1 tracking-tighter">99.99%</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">System Uptime</div>
              </div>
            </div>
            
            <div className="flex flex-col items-start">
              <h2 className="text-[10px] font-bold text-teal-500 uppercase tracking-[0.5em] mb-10">Infrastructure-first</h2>
              <h3 className="text-4xl lg:text-6xl font-bold text-white mb-16 tracking-tight leading-[1.1]">Engineered for nodes <br/> that cannot fail.</h3>
              
              <div className="space-y-16">
                {[
                  { title: "Deep Enterprise Core", desc: "Built for complex multi-branch organizations requiring centralized control and decentralized execution." },
                  { title: "Dynamic Scaling", desc: "Auto-provisioning agents to handle bursts in inbound traffic without linear cost increases." },
                  { title: "Mission Critical Support", desc: "Tier-1 engineering response times for Platinum partners operating 24/7 infrastructure." }
                ].map((tier, i) => (
                  <div key={i} className="group flex gap-10">
                    <div className="flex flex-col items-center pt-2">
                      <div className="text-teal-900 font-bold text-5xl group-hover:text-teal-500 transition-colors leading-none">0{i+1}</div>
                      <div className="w-px h-full bg-white/5 group-hover:bg-teal-500/20 transition-colors mt-4"></div>
                    </div>
                    <div className="pb-4">
                      <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{tier.title}</h4>
                      <p className="text-slate-500 leading-relaxed font-light text-base">{tier.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Protocol */}
      <section id="cta" className="py-48 lg:py-72 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.08),transparent_70%)]"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="inline-block p-5 bg-teal-500/5 border border-teal-500/10 rounded-full mb-12">
            <ShieldCheck size={48} className="text-teal-500 mx-auto" />
          </div>
          <h2 className="text-5xl md:text-[7rem] font-bold text-white mb-16 tracking-tighter leading-[0.85]">Evolve your <br/> call stack.</h2>
          <p className="text-xl lg:text-2xl text-slate-400 mb-20 font-light max-w-2xl mx-auto leading-relaxed">
            The era of legacy IVR is over. Deploy the Sentient Core and transform every phone interaction into a competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link to="/demo" className="w-full sm:w-auto bg-white text-black px-16 py-8 font-bold hover:bg-teal-500 hover:text-white transition-all text-xs tracking-[0.3em] uppercase shadow-[0_20px_50px_rgba(0,0,0,0.5)] active:scale-95 rounded-xl">
              Initiate System Demo
            </Link>
            <Link to="/platform" className="w-full sm:w-auto border border-white/10 text-white px-16 py-8 font-bold hover:bg-white/5 transition-all text-xs tracking-[0.3em] uppercase active:scale-95 backdrop-blur-sm rounded-xl">
              View Platform Specs
            </Link>
          </div>
          
          <div className="mt-32 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 text-[9px] font-bold text-slate-600 uppercase tracking-[0.4em]">
             <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-500/50"></div> SOC2_TYPE_II</span>
             <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-500/50"></div> AES_256_ENCRYPTED</span>
             <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-500/50"></div> ISO_27001_READY</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
