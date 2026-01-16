import React from 'react';
import { Activity, Shield } from 'lucide-react';

const EnterpriseDashboard = () => {
  return (
    <div className="relative w-full h-[500px] lg:h-[600px] bg-[#0c0c0e] border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl group">
      {/* Top Bar */}
      <div className="h-12 border-b border-white/5 bg-white/5 flex items-center px-4 justify-between shrink-0">
         <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
         </div>
         <div className="text-[10px] uppercase font-mono text-slate-500 tracking-widest flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            System Online
         </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="p-6 flex-1 flex flex-col gap-6 relative overflow-hidden">
         <div className="absolute inset-0 bg-green-500/5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
         
         {/* Metrics Row */}
         <div className="grid grid-cols-2 gap-4 relative z-10 shrink-0">
            <div className="p-4 rounded-xl cancel bg-black/40 border border-white/10 flex flex-col backdrop-blur-md">
                <span className="text-xs text-slate-400 uppercase tracking-wider mb-1">Active Calls</span>
                <div className="flex items-end justify-between">
                    <span className="text-3xl font-bold text-white font-mono">248</span>
                    <Activity size={16} className="text-green-500 mb-1" />
                </div>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col backdrop-blur-md">
                <span className="text-xs text-slate-400 uppercase tracking-wider mb-1">Success Rate</span>
                <div className="flex items-end justify-between">
                    <span className="text-3xl font-bold text-white font-mono">98.2%</span>
                    <Shield size={16} className="text-green-500 mb-1" />
                </div>
            </div>
         </div>

         {/* CRM Visual */}
         <div className="relative z-0 flex-1 rounded-xl border border-white/10 overflow-hidden shadow-2xl mt-[-20px]">
             <img 
               src="/crm_dashboard.png" 
               alt="Trinity CRM Dashboard" 
               className="w-full h-full object-cover object-top opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent opacity-60"></div>
         </div>
      </div>
      
      {/* Decorative Bottom Bar */}
      <div className="h-2 bg-gradient-to-r from-green-500/20 via-green-500/60 to-green-500/20 shrink-0"></div>
    </div>
  );
};

export default EnterpriseDashboard;
