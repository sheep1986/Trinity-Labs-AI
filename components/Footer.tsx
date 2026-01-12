
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050506] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-16 mb-24">
          <div className="col-span-2">
            <img src="https://i.ibb.co/rrCkBr1/1.png" alt="Trinity Labs AI" className="h-12 w-auto mb-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed font-light">
              Engineering-first AI infrastructure for mission-critical enterprise operations.
            </p>
          </div>
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Systems</h4>
            <ul className="space-y-4 text-xs text-slate-500">
              <li><Link to="/platform" className="hover:text-teal-400 transition-colors">Voice Engine</Link></li>
              <li><Link to="/platform" className="hover:text-teal-400 transition-colors">Logic Layer</Link></li>
              <li><Link to="/security" className="hover:text-teal-400 transition-colors">Safety Filter</Link></li>
              <li><Link to="/platform" className="hover:text-teal-400 transition-colors">VPC Bridge</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Protocol</h4>
            <ul className="space-y-4 text-xs text-slate-500">
              <li><Link to="/security" className="hover:text-teal-400 transition-colors">Audit Logs</Link></li>
              <li><Link to="/security" className="hover:text-teal-400 transition-colors">Governance</Link></li>
              <li><Link to="/docs" className="hover:text-teal-400 transition-colors">SDK Ref</Link></li>
              <li><Link to="/docs" className="hover:text-teal-400 transition-colors">API Keys</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Node</h4>
            <ul className="space-y-4 text-xs text-slate-500">
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">Company</Link></li>
              <li><Link to="/pricing" className="hover:text-teal-400 transition-colors">SLA</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Legal</Link></li>
              <li><Link to="/faq" className="hover:text-teal-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Status</h4>
            <div className="flex items-center space-x-2 text-teal-600 text-[10px] font-bold tracking-widest uppercase">
              <span className="w-1 h-1 bg-teal-500 rounded-full animate-pulse"></span>
              <span>All Systems Nominal</span>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-600 font-mono uppercase tracking-widest">© 2025 TRINITY_LABS_AI.V4 // ENCRYPTED_CORE</p>
          <div className="flex space-x-8">
            {['Privacy', 'Security', 'ISO_27001'].map(p => (
              <a key={p} href="#" className="text-[10px] text-slate-600 hover:text-slate-400 transition-colors font-mono uppercase tracking-widest">{p}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
