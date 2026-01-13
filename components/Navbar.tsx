
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Platform', path: '/platform' },
    { name: 'Security', path: '/security' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed inset-x-0 top-0 z-[200] transition-all duration-300 py-4 backdrop-blur-md bg-black/40 border-b border-white/5`}>
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          
          {/* Brand Identity */}
          <Link to="/" className="flex items-center group relative z-[310]">
            <img 
              src="https://i.ibb.co/rrCkBr1/1.png" 
              alt="Trinity Labs AI" 
              className={`transition-all duration-500 h-8 lg:h-9 w-auto`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 ${
                  location.pathname === link.path ? 'text-teal-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-teal-500 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Action Matrix */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/login"
              className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em] hover:text-white transition-all flex items-center gap-2"
            >
              <ArrowRight size={14} />
              <span>Login</span>
            </Link>
            
            <Link
              to="/demo"
              className="bg-white text-black px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-teal-500 hover:text-white transition-all shadow-lg flex items-center gap-2"
            >

              Request Demo
            </Link>
          </div>

          {/* Mobile Controller */}
          <div className="lg:hidden flex items-center relative z-[310]">
             <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-3 rounded-xl border transition-all duration-300 ${
                isOpen ? 'bg-white border-white text-black' : 'bg-white/5 border-white/10 text-white'
              }`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Higher Z-Index to cover AI Trigger */}
      <div className={`fixed inset-0 z-[300] lg:hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="absolute inset-0 bg-[#050506] shadow-2xl"></div>
        <div className="h-full flex flex-col justify-center px-10 relative z-10 pt-20">
          <div className="space-y-6">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-3xl font-bold text-white hover:text-teal-400 transition-all tracking-tight uppercase"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-10 border-t border-white/10 space-y-4">
              <Link
                to="/demo"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-white text-black text-center py-5 rounded-xl font-bold uppercase tracking-widest text-xs"
              >
                Request Demo
              </Link>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block w-full border border-white/20 text-white text-center py-5 rounded-xl font-bold uppercase tracking-widest text-xs"
              >
                Client Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
