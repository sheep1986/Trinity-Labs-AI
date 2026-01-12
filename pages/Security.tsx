
import React from 'react';
import { Shield, Lock, FileCheck, Server, Eye, Database, Globe, CheckCircle2 } from 'lucide-react';

const Security: React.FC = () => {
  return (
    <div className="bg-[#050506] pt-8 lg:pt-16 pb-32 lg:pb-48 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        
        {/* Sentient Shield Hero Section */}
        <div id="security-hero" className="relative mb-24 min-h-[500px] lg:min-h-[600px] flex items-center rounded-3xl transition-all duration-300">
          {/* Background Visual */}
          <div className="absolute inset-0 rounded-[3rem] lg:rounded-[4rem] overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
              alt="Cyber Infrastructure" 
              className="w-full h-full object-cover grayscale brightness-[0.4] scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050506]/40 to-[#050506]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(20,184,166,0.15),transparent_50%)]"></div>
          </div>
          
          {/* Floating Glass Content Cluster */}
          <div className="relative z-10 max-w-4xl ml-4 lg:ml-16">
            <div className="glass p-10 lg:p-16 rounded-[2.5rem] lg:rounded-[3rem] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse shadow-[0_0_10px_#14b8a6]"></div>
                <span className="text-[10px] font-bold text-teal-500 uppercase tracking-[0.3em]">Sentinel Active</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                Enterprise <br/>
                <span className="text-teal-500">Security Core.</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 font-light leading-relaxed max-w-xl">
                Trinity Labs AI is engineered with a "Defense in Depth" philosophy. We provide a hardened orchestration layer designed for the world's most regulated sectors.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Capabilities Grid */}
        <div id="security-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-40 overflow-hidden rounded-3xl transition-all duration-300">
           {[
             { 
               title: 'Tenant Isolation', 
               icon: <Database />, 
               img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
               desc: 'Strict logical separation of organizational data. We never share infrastructure or weights between customers.' 
             },
             { 
               title: 'Data Sovereignty', 
               icon: <Globe />, 
               img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
               desc: 'Deploy on local clusters. Maintain absolute control over where your data resides and which jurisdictions apply.' 
             },
             { 
               title: 'Immutable Audit Logs', 
               icon: <FileCheck />, 
               img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
               desc: 'Every model interaction and system trigger is logged with sub-second timestamps and non-repudiation hashes.' 
             },
             { 
               title: 'Webhook Verification', 
               icon: <Lock />, 
               img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
               desc: 'Secure bi-directional communication with systems via signed HMAC signatures and whitelisted IP egress.' 
             },
             { 
               title: 'Zero-Leak Policy', 
               icon: <Shield />, 
               img: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800",
               desc: 'Model outputs are generated within private contexts. We do not use customer data to train global baseline models.' 
             },
             { 
               title: 'Compliance Standards', 
               icon: <CheckCircle2 />, 
               img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
               desc: 'Compliant architecture designed to meet the rigorous standards of Fortune 500 security protocols.' 
             }
           ].map((item, i) => (
             <div key={i} className="group relative bg-[#050506] h-[550px] overflow-hidden flex flex-col justify-end p-12 transition-all duration-700">
               <div className="absolute inset-0 opacity-45 group-hover:opacity-75 transition-opacity duration-700 grayscale group-hover:grayscale-0">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-[#050506]/80 to-transparent"></div>
               
               <div className="relative z-10">
                 <div className="text-teal-600 mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">{item.icon}</div>
                 <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">{item.title}</h3>
                 <p className="text-slate-400 text-sm leading-relaxed font-light">{item.desc}</p>
               </div>
             </div>
           ))}
        </div>

        {/* Wide Physical Security Section */}
        <div id="physical-security" className="relative h-[600px] mb-40 rounded-3xl overflow-hidden group shadow-[0_20px_100px_rgba(0,0,0,1)] transition-all duration-300">
          <img 
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2000" 
            alt="Physical Security Aisle" 
            className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[1px]">
            <div className="text-center max-w-3xl px-6">
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Physical Hardening.</h2>
              <p className="text-slate-200 font-light text-xl leading-relaxed">
                Shielded by biometric-access data centers and 24/7 on-site security. Every node is monitored for volumetric anomalies and unauthorized egress.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Technical Details */}
        <div id="encryption-specs" className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center rounded-3xl transition-all duration-300">
           <div className="space-y-12">
              <h2 className="text-3xl font-bold text-white tracking-tight uppercase tracking-[0.2em]">Encryption & Egress.</h2>
              <div className="space-y-8">
                 <div className="border-l-2 border-teal-900 pl-8 group hover:border-teal-500 transition-all">
                    <h4 className="text-white font-bold mb-2 group-hover:text-teal-400 transition-colors uppercase text-sm tracking-widest">Transport Layer</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">TLS 1.3 encryption for all data in motion. Perfect Forward Secrecy (PFS) enabled as default for all organizational nodes.</p>
                 </div>
                 <div className="border-l-2 border-teal-900 pl-8 group hover:border-teal-500 transition-all">
                    <h4 className="text-white font-bold mb-2 group-hover:text-teal-400 transition-colors uppercase text-sm tracking-widest">At-Rest Security</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">AES-256-GCM encryption for all stored metadata and configuration states with customer-managed keys (CMK) options.</p>
                 </div>
                 <div className="border-l-2 border-teal-900 pl-8 group hover:border-teal-500 transition-all">
                    <h4 className="text-white font-bold mb-2 group-hover:text-teal-400 transition-colors uppercase text-sm tracking-widest">Private Link Peering</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Avoid the public internet entirely. Connect Trinity Labs AI directly to your VPC via AWS PrivateLink or Azure Private Link.</p>
                 </div>
              </div>
           </div>
           
           <div className="relative rounded-3xl overflow-hidden h-[600px] border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1200" 
                alt="System Logic Visualization" 
                className="w-full h-full object-cover opacity-65 grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 p-8 glass border-white/20 rounded-2xl">
                 <p className="text-white font-bold mb-4 uppercase text-xs tracking-[0.3em]">Certification Status</p>
                 <div className="flex gap-4">
                    <div className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-bold text-slate-400 uppercase tracking-widest">SOC2 TYPE II</div>
                    <div className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-bold text-slate-400 uppercase tracking-widest">HIPAA READY</div>
                    <div className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-bold text-slate-400 uppercase tracking-widest">ISO 27001</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
