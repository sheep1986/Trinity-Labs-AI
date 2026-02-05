
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050506] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="mb-16 md:mb-20 p-6 sm:p-8 md:p-10 bg-[#0b0b0d] border border-white/10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[10px] font-bold text-green-500 uppercase tracking-[0.4em] mb-3">Waitlist</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Get early access to Trinity Voice.</h3>
            <p className="text-slate-400 text-sm font-light">We onboard in waves to preserve quality, safety, and compliance.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link to="/waitlist" className="bg-white text-black px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] text-center hover:bg-teal-500 hover:text-white transition-all">
              Join Waitlist
            </Link>
            <Link to="/contact" className="border border-white/20 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] text-center">
              Talk to Sales
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-16 mb-24">
          <div className="col-span-2">
            <img src="https://i.ibb.co/rrCkBr1/1.png" alt="Trinity Labs AI" className="h-12 w-auto mb-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed font-light">
              Reliable AI calling for teams that cannot afford missed calls.
            </p>
          </div>
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Platform</h4>
            <ul className="space-y-4 text-xs text-slate-500">
              <li><Link to="/platform" className="hover:text-teal-400 transition-colors">Call Routing</Link></li>
              <li><Link to="/platform" className="hover:text-teal-400 transition-colors">Call Logs</Link></li>
              <li><Link to="/security" className="hover:text-teal-400 transition-colors">Data Safety</Link></li>
              <li><Link to="/platform" className="hover:text-teal-400 transition-colors">Integrations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Access</h4>
            <ul className="space-y-4 text-xs text-slate-500">
              <li><Link to="/security" className="hover:text-teal-400 transition-colors">Security</Link></li>
              <li><Link to="/security" className="hover:text-teal-400 transition-colors">Privacy</Link></li>
              <li><Link to="/docs" className="hover:text-teal-400 transition-colors">Docs (Coming Soon)</Link></li>
              <li><Link to="/waitlist" className="hover:text-teal-400 transition-colors">Request Access</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Node</h4>
            <ul className="space-y-4 text-xs text-slate-500">
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">Company</Link></li>
              <li><Link to="/waitlist" className="hover:text-teal-400 transition-colors">Waitlist</Link></li>
              <li><Link to="/terms" className="hover:text-teal-400 transition-colors">Terms</Link></li>
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
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/TrinityLabsAi"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full border border-white/10 text-slate-500 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.instagram.com/trinitylabsai/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full border border-white/10 text-slate-500 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://x.com/TrinityLabsAI"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full border border-white/10 text-slate-500 hover:text-white hover:border-white/30 transition-colors"
              aria-label="X"
            >
              <Twitter size={16} />
            </a>
            <a
              href="https://www.facebook.com/TrinityLabsAi"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full border border-white/10 text-slate-500 hover:text-white hover:border-white/30 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={16} />
            </a>
          </div>
          <p className="text-[10px] text-slate-600 font-mono uppercase tracking-widest">© 2025 TRINITY_LABS_AI.V4 // ENCRYPTED_CORE</p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="text-[10px] text-slate-600 hover:text-slate-400 transition-colors font-mono uppercase tracking-widest">Privacy</Link>
            <Link to="/terms" className="text-[10px] text-slate-600 hover:text-slate-400 transition-colors font-mono uppercase tracking-widest">Terms</Link>
            <Link to="/security" className="text-[10px] text-slate-600 hover:text-slate-400 transition-colors font-mono uppercase tracking-widest">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
