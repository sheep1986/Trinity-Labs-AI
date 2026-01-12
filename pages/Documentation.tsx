
import React from 'react';
import { Search, Book, Code, ShieldCheck, HelpCircle } from 'lucide-react';

const Documentation: React.FC = () => {
  const categories = [
    { title: 'Platform Overview', icon: <Book size={20} />, items: ['Core Architecture', 'Workflow Engine', 'Voice Agent Framework'] },
    { title: 'Security & Auth', icon: <ShieldCheck size={20} />, items: ['RBAC Config', 'SSO Integration', 'Data Residency'] },
    { title: 'Developer Guides', icon: <Code size={20} />, items: ['REST API Reference', 'Webhook Verification', 'SDK Setup'] },
    { title: 'Support', icon: <HelpCircle size={20} />, items: ['Troubleshooting', 'SLA Details', 'Opening a Ticket'] }
  ];

  return (
    <div className="bg-[#0a0a0b] py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">Documentation</h1>
            <p className="text-slate-400">Everything you need to deploy and manage Trinity Labs AI.</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Search documentation..." 
              className="w-full bg-[#1a1a1c] border border-[#2d2d30] rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-teal-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="p-8 bg-[#1a1a1c] border border-[#2d2d30] rounded-xl hover:border-teal-900/50 transition-colors">
              <div className="text-teal-600 mb-6">{cat.icon}</div>
              <h3 className="text-white font-bold mb-6">{cat.title}</h3>
              <ul className="space-y-4">
                {cat.items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-500 hover:text-teal-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-gradient-to-r from-teal-900/10 to-transparent border border-[#2d2d30] rounded-3xl">
           <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-grow">
                 <h2 className="text-2xl font-bold text-white mb-4">Getting Started Guide</h2>
                 <p className="text-slate-400 mb-6">
                   Follow our step-by-step guide to setting up your first operational workflow and integrating your CRM.
                 </p>
                 <button className="bg-white text-black px-6 py-3 rounded font-bold hover:bg-slate-200 transition-all text-sm">
                   Read Start Guide
                 </button>
              </div>
              <div className="w-full md:w-1/3 p-6 bg-[#0a0a0b] border border-[#2d2d30] rounded-xl font-mono text-[10px] text-teal-600">
                <p>$ curl -X POST https://api.trinity.ai/v1/deploy \</p>
                <p>  -H "Authorization: Bearer $TRINITY_KEY" \</p>
                {/* Fixed literal curly braces to prevent JSX parsing errors */}
                <p>  -d '&#123;'</p>
                <p>    "workflow_id": "ops_sync_01",</p>
                <p>    "target": "sap_hana_prod"</p>
                <p>  &#125;'</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
