import React, { useState, useEffect } from 'react';
import { Calculator, Check, X, Info, ChevronRight } from 'lucide-react';
import { BGPattern } from './ui/bg-pattern';

// Data Models
type CountryData = {
  id: string;
  name: string;
  currency: string;
  symbol: string;
  baseSalary: number; // Annual
  employerCost: number; // Taxes, Pension, NI (percentage decimal, e.g. 0.2 for 20%)
  overhead: number; // Office, Hardware, Management per head (annual fixed)
  attrition: number; // Recruitment & Training annual avg per seat
  callsPerAgentDaily: number; // Avg capacity
};

const COUNTRY_DATA: Record<string, CountryData> = {
  UK: { id: 'UK', name: 'United Kingdom', currency: 'GBP', symbol: '£', baseSalary: 28000, employerCost: 0.18, overhead: 6000, attrition: 4000, callsPerAgentDaily: 50 },
  US: { id: 'US', name: 'United States', currency: 'USD', symbol: '$', baseSalary: 45000, employerCost: 0.15, overhead: 8000, attrition: 5000, callsPerAgentDaily: 55 },
  AU: { id: 'AU', name: 'Australia', currency: 'AUD', symbol: 'A$', baseSalary: 65000, employerCost: 0.11, overhead: 10000, attrition: 6000, callsPerAgentDaily: 50 },
  CA: { id: 'CA', name: 'Canada', currency: 'CAD', symbol: 'C$', baseSalary: 50000, employerCost: 0.12, overhead: 7000, attrition: 4500, callsPerAgentDaily: 50 },
  IE: { id: 'IE', name: 'Ireland', currency: 'EUR', symbol: '€', baseSalary: 32000, employerCost: 0.11, overhead: 6500, attrition: 4200, callsPerAgentDaily: 50 },
  PH: { id: 'PH', name: 'Philippines', currency: 'USD', symbol: '$', baseSalary: 8000, employerCost: 0.10, overhead: 3000, attrition: 2000, callsPerAgentDaily: 45 },
  
  // New Countries
  MT: { id: 'MT', name: 'Malta', currency: 'EUR', symbol: '€', baseSalary: 25000, employerCost: 0.10, overhead: 5000, attrition: 3500, callsPerAgentDaily: 50 },
  ES: { id: 'ES', name: 'Spain', currency: 'EUR', symbol: '€', baseSalary: 24000, employerCost: 0.30, overhead: 5500, attrition: 3500, callsPerAgentDaily: 50 },
  FR: { id: 'FR', name: 'France', currency: 'EUR', symbol: '€', baseSalary: 35000, employerCost: 0.45, overhead: 8000, attrition: 5000, callsPerAgentDaily: 45 }, // High labor cost
  PL: { id: 'PL', name: 'Poland', currency: 'PLN', symbol: 'zł', baseSalary: 85000, employerCost: 0.20, overhead: 20000, attrition: 15000, callsPerAgentDaily: 55 }, // High volume base
  ZA: { id: 'ZA', name: 'South Africa', currency: 'ZAR', symbol: 'R', baseSalary: 180000, employerCost: 0.05, overhead: 50000, attrition: 30000, callsPerAgentDaily: 50 }, 
  RU: { id: 'RU', name: 'Russia', currency: 'RUB', symbol: '₽', baseSalary: 1200000, employerCost: 0.30, overhead: 300000, attrition: 150000, callsPerAgentDaily: 50 },
  DE: { id: 'DE', name: 'Germany', currency: 'EUR', symbol: '€', baseSalary: 42000, employerCost: 0.21, overhead: 9000, attrition: 6000, callsPerAgentDaily: 45 },
  NL: { id: 'NL', name: 'Netherlands', currency: 'EUR', symbol: '€', baseSalary: 38000, employerCost: 0.18, overhead: 8000, attrition: 5000, callsPerAgentDaily: 50 },
};

const TRINITY_COST_PER_CALL = 0.85; 

// Helper for number animation
const CountUp = ({ value, prefix = '' }: { value: number, prefix?: string }) => {
  const [display, setDisplay] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalMilSecDur = 800;
    let incrementTime = (totalMilSecDur / end) * 1000;
    
    let current = display;
    const step = () => {
      const diff = end - current;
      if (Math.abs(diff) < 1) {
        setDisplay(end);
        return;
      }
      current += diff * 0.1;
      setDisplay(current);
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [value]);

  return <span>{prefix}{Math.round(display).toLocaleString()}</span>;
};

const CostCalculator = () => {
   const [country, setCountry] = useState<string>('US');
   const [dailyVolume, setDailyVolume] = useState<number>(500); 
   const [avgDuration, setAvgDuration] = useState<number>(3); 
   const [humanDailyCapacity, setHumanDailyCapacity] = useState<number>(50); 
   
   // Commission Logic (Human Only)
   const [enableCommission, setEnableCommission] = useState<boolean>(false);
   const [avgDealsPerDay, setAvgDealsPerDay] = useState<number>(2); // Per agent
   const [avgCommissionPerDeal, setAvgCommissionPerDeal] = useState<number>(50); // Flat amount

   const OPERATING_HOURS = 8;
   const UTILIZATION_RATE = 0.75; 

   const data = COUNTRY_DATA[country];
   
   const agentsNeeded = Math.ceil(dailyVolume / humanDailyCapacity);

   // Human Cost Calculation
   const totalHumanCostPerAgent = 
     data.baseSalary + 
     (data.baseSalary * data.employerCost) + 
     data.overhead + 
     data.attrition;
   
   // Calculate Commission (Annualized)
   // Deals/day * Commission/deal * 22 days * 12 months
   const annualCommissionPerAgent = enableCommission 
      ? (avgDealsPerDay * avgCommissionPerDeal * 22 * 12) 
      : 0;

   const totalHumanAnnual = (totalHumanCostPerAgent + annualCommissionPerAgent) * agentsNeeded;
   const totalHumanMonthly = totalHumanAnnual / 12;

   // AI Concurrency Calculation
   const callsPerSlotDaily = (OPERATING_HOURS * 60 / avgDuration) * UTILIZATION_RATE;
   const aiSlotsNeeded = Math.max(1, Math.ceil(dailyVolume / callsPerSlotDaily));

   // AI Cost Calculation (Usage based)
   const dailyMinutes = dailyVolume * avgDuration;
   const monthlyMinutes = dailyMinutes * 22; 
   const annualMinutes = monthlyMinutes * 12;

   const currencyMultiplier = 
      country === 'UK' ? 0.8 : 
      country === 'AU' ? 1.5 : 
      country === 'PL' ? 4 : // Simplified PLN conversion
      country === 'ZA' ? 18 : // ZAR
      country === 'RU' ? 90 : // RUB
      1; 
   
   const trinityRatePerMin = TRINITY_COST_PER_CALL * currencyMultiplier; 
   const totalTrinityAnnualSimple = annualMinutes * (trinityRatePerMin / 5); 
   
   // Normalize cost per min for accurate calculation considering currency
   let COST_PER_MINUTE = 0.14; 
   if(data.currency !== 'USD') {
        // Simple manual conversion or relative parity for demo
        if(data.currency === 'GBP') COST_PER_MINUTE = 0.11;
        if(data.currency === 'EUR') COST_PER_MINUTE = 0.13;
        if(data.currency === 'AUD') COST_PER_MINUTE = 0.22;
        if(data.currency === 'CAD') COST_PER_MINUTE = 0.20;
        if(data.currency === 'PLN') COST_PER_MINUTE = 0.60;
        if(data.currency === 'ZAR') COST_PER_MINUTE = 2.50;
        if(data.currency === 'RUB') COST_PER_MINUTE = 15.0;
   }
   
   const totalTrinityAnnualUsage = annualMinutes * COST_PER_MINUTE;
   const totalTrinityMonthly = totalTrinityAnnualUsage / 12;

   const savingsAnnual = totalHumanAnnual - totalTrinityAnnualUsage;
   const percentSaved = Math.round((savingsAnnual / totalHumanAnnual) * 100);

   const humanCostPerCall = totalHumanAnnual / (dailyVolume * 22 * 12);
   const aiCostPerCall = totalTrinityAnnualUsage / (dailyVolume * 22 * 12);

  return (
    <section className="py-24 lg:py-32 bg-[#050506] border-t border-white/5 relative overflow-hidden">
      <BGPattern variant="grid" mask="fade-edges" size={40} fill="rgba(34, 197, 94, 0.1)" />
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">The real cost of <br className="md:hidden" /> answering calls.</h2>
           <p className="text-slate-400 text-lg font-light">
             Compare the true cost of hiring and running a call team versus deploying Trinity.
             <span className="block text-slate-500 mt-2 text-sm uppercase tracking-widest">Scale volume, not headcount.</span>
           </p>
        </div>

        <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-6 md:p-12 backdrop-blur-sm relative overflow-hidden">
           
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
               
               {/* Controls (Left) */}
               <div className="lg:col-span-4 h-full">
                  
                  {/* Main Configuration Card - Compact Design */}
                  <div className="bg-white/5 rounded-3xl p-5 md:p-6 border border-white/5 hover:border-white/10 transition-all flex flex-col gap-6 h-full">
                      
                      <div className="flex items-center justify-between">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                           <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Configuration
                        </label>
                      </div>

                      {/* Region Selector - Compact */}
                      <div className="relative group">
                          <label className="text-[9px] text-slate-500 uppercase tracking-widest mb-1.5 block ml-1">Region</label>
                          <div className="relative">
                            <select 
                              value={country}
                              onChange={(e) => setCountry(e.target.value)}
                              className="w-full bg-[#0c0c0e] border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm appearance-none focus:outline-none focus:border-green-500/50 transition-colors cursor-pointer hover:bg-white/5"
                            >
                              {Object.values(COUNTRY_DATA).map(c => (
                                  <option key={c.id} value={c.id}>
                                      {c.name} ({c.currency})
                                  </option>
                              ))}
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 group-hover:text-white transition-colors">
                               <ChevronRight size={14} className="rotate-90" />
                            </div>
                          </div>
                      </div>

                      <div className="space-y-5">
                          {/* Daily Volume Slider - Compact */}
                          <div>
                              <div className="flex items-end justify-between mb-2">
                                 <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">Calls / Day</span>
                                 <span className="text-xl font-bold text-white tracking-tight font-mono">{dailyVolume.toLocaleString()}</span>
                              </div>
                              <input 
                                type="range" 
                                min="50" max="5000" step="50"
                                value={dailyVolume} 
                                onChange={(e) => setDailyVolume(parseInt(e.target.value))}
                                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-green-500 hover:accent-green-400 transition-all"
                              />
                          </div>

                          {/* Avg Call Duration Slider - Compact */}
                          <div>
                              <div className="flex items-end justify-between mb-2">
                                 <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">Avg Duration</span>
                                 <span className="text-xl font-bold text-white tracking-tight font-mono">{avgDuration} <span className="text-sm text-slate-500 font-normal">min</span></span>
                              </div>
                              <input 
                                type="range" 
                                min="1" max="15" step="0.5"
                                value={avgDuration} 
                                onChange={(e) => setAvgDuration(parseFloat(e.target.value))}
                                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all"
                              />
                          </div>

                          {/* Human Capacity Slider - Compact */}
                          <div className="pt-5 border-t border-white/5">
                              <div className="flex items-end justify-between mb-2">
                                 <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">Human Capacity</span>
                                 <span className="text-xl font-bold text-slate-200 tracking-tight font-mono">{humanDailyCapacity} <span className="text-xs text-slate-500 font-normal">/day</span></span>
                              </div>
                              <input 
                                type="range" 
                                min="20" max="150" step="5"
                                value={humanDailyCapacity} 
                                onChange={(e) => setHumanDailyCapacity(parseInt(e.target.value))}
                                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-500 hover:accent-red-400 transition-all"
                              />
                          </div>
                      </div>

                      {/* Commission Logic - Compact Toggle & Drawer */}
                      <div className="mt-auto pt-5 border-t border-white/5">
                          <div className="flex items-center justify-between mb-3">
                              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest cursor-pointer hover:text-white transition-colors select-none">
                                 Include Commissions
                              </label>
                              <div 
                                onClick={() => setEnableCommission(!enableCommission)}
                                className={`w-8 h-4.5 rounded-full p-0.5 cursor-pointer transition-colors ${enableCommission ? 'bg-amber-500' : 'bg-slate-700'}`}
                              >
                                 <div className={`w-3.5 h-3.5 bg-white rounded-full shadow-md transform transition-transform ${enableCommission ? 'translate-x-3.5' : 'translate-x-0'}`}></div>
                              </div>
                          </div>

                          {/* Expanded Commission Controls - Drawer */}
                          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${enableCommission ? 'max-h-[200px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}>
                             <div className="bg-amber-500/5 rounded-lg p-3 border border-amber-500/10 space-y-3">
                                  <div>
                                     <div className="flex justify-between text-[9px] mb-1.5 text-amber-200/70 uppercase tracking-wider font-bold">
                                        <span>Deals / Day</span>
                                        <span className="text-white font-mono">{avgDealsPerDay}</span>
                                     </div>
                                     <input 
                                        type="range" min="0" max="20" step="0.5"
                                        value={avgDealsPerDay}
                                        onChange={(e) => setAvgDealsPerDay(parseFloat(e.target.value))}
                                        className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                                     />
                                  </div>
                                  <div>
                                     <div className="flex justify-between text-[9px] mb-1.5 text-amber-200/70 uppercase tracking-wider font-bold">
                                        <span>Commission</span>
                                        <span className="text-white font-mono">{data.symbol}{avgCommissionPerDeal}</span>
                                     </div>
                                     <input 
                                        type="range" min="0" max="1000" step="10"
                                        value={avgCommissionPerDeal}
                                        onChange={(e) => setAvgCommissionPerDeal(parseInt(e.target.value))}
                                        className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                                     />
                                  </div>
                             </div>
                          </div>
                      </div>
                  </div>
               </div>

               {/* Results (Right) */}
               <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Human Card */}
                  <div className="group relative bg-[#0a0a0c] rounded-3xl p-8 border border-white/5 hover:border-red-500/30 transition-all duration-500 flex flex-col h-full">
                     <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     
                     <div className="mb-auto">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Human Team ({agentsNeeded})</span>
                        </div>
                        
                        <div className="mb-8">
                             <div className="text-4xl lg:text-5xl font-bold text-white tracking-tighter mb-2">
                                <CountUp value={totalHumanMonthly} prefix={data.symbol} />
                             </div>
                             <div className="text-sm text-slate-500 font-medium">Monthly Cost (TCO)</div>
                        </div>

                        <div className="mb-8 p-4 bg-red-500/5 rounded-xl border border-red-500/10">
                            <div className="text-lg font-mono text-white mb-1">
                                {data.symbol}{humanCostPerCall.toFixed(2)}
                            </div>
                            <div className="text-[10px] text-red-400 uppercase tracking-wider">True Cost Per Call</div>
                        </div>
                     </div>

                     <ul className="space-y-3 pt-6 border-t border-white/5">
                        <li className="flex items-start gap-3 text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                              <X size={14} className="text-red-500 shrink-0 mt-0.5" />
                              <span>Capacity: {humanDailyCapacity} calls/day per agent</span>
                           </li>
                        {['Recruitment Costs', 'Sick Pay, Holiday', 'Training Overhead', 'Attrition Risks'].map((item, i) => (
                           <li key={i} className="flex items-center gap-3 text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                              <X size={14} className="text-red-500 shrink-0" />
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Trinity Card */}
                  <div className="group relative bg-[#0a0a0c] rounded-3xl p-8 border border-white/5 hover:border-green-500/30 transition-all duration-500 flex flex-col h-full">
                     <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     
                     <div className="mb-auto">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Trinity AI</span>
                        </div>
                        
                        <div className="mb-8">
                             <div className="text-4xl lg:text-5xl font-bold text-white tracking-tighter mb-2">
                                <CountUp value={totalTrinityMonthly} prefix={data.symbol} />
                             </div>
                             <div className="text-sm text-slate-500 font-medium">Monthly Cost</div>
                        </div>

                        <div className="mb-8 p-4 bg-green-500/5 rounded-xl border border-green-500/10 transition-colors group-hover:bg-green-500/10 group-hover:border-green-500/20">
                            <div className="text-lg font-mono text-white mb-1">
                                {data.symbol}{aiCostPerCall.toFixed(2)}
                            </div>
                            <div className="text-[10px] text-green-400 uppercase tracking-wider">Est. Cost Per Call</div>
                        </div>
                     </div>

                     <ul className="space-y-3 pt-6 border-t border-white/5">
                        <li className="flex items-start gap-3 text-xs text-slate-400 group-hover:text-white transition-colors">
                              <Check size={14} className="text-green-500 shrink-0 mt-0.5" />
                              <span>Unlimited Concurrency</span>
                           </li>
                        {['Zero Overhead', 'No Downtime', 'Instant Scaling', 'Full Compliance'].map((item, i) => (
                           <li key={i} className="flex items-center gap-3 text-xs text-slate-400 group-hover:text-white transition-colors">
                              <Check size={14} className="text-green-500 shrink-0" />
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Savings Card - Hero */}
                  <div className="relative rounded-3xl p-1 bg-gradient-to-b from-green-500/20 to-green-500/0 shadow-2xl">
                     <div className="absolute inset-0 bg-green-500/5 blur-xl"></div>
                     <div className="relative h-full bg-[#0c0c0e] rounded-[1.3rem] p-7 md:p-8 flex flex-col items-center justify-center text-center overflow-hidden">
                        
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.15),transparent_70%)]"></div>
                        
                        <div className="relative z-10 w-full">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-bold text-green-400 uppercase tracking-widest mb-8">
                                <span className="animate-pulse">●</span> Projected Savings
                            </div>
                            
                            <div className="mb-8 relative">
                               <div className="text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-2 drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                                  {percentSaved}%
                               </div>
                               <div className="text-xs text-green-500 font-bold uppercase tracking-[0.2em] border-t border-green-500/20 pt-4 flex items-center justify-center gap-2">
                                  Reduction
                               </div>
                            </div>

                            <div className="space-y-2 mb-8">
                                <div className="text-2xl font-bold text-white">
                                    <CountUp value={savingsAnnual} prefix={data.symbol} />
                                </div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-widest">Annual Savings</div>
                            </div>

                            <p className="text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-6">
                               Reinvest into growth, <br/> not overhead.
                            </p>
                        </div>
                     </div>
                  </div>

               </div>
           </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center">
            <p className="text-[10px] text-slate-600 uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
                * Figures are estimates based on industry averages. Actual costs may vary.
            </p>
        </div>

      </div>
    </section>
  );
};

export default CostCalculator;
