import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Platform", path: "/platform" },
    { name: "Security", path: "/security" },
    { name: "Use Cases", path: "/use-cases" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[200] transition-all duration-300 py-4 backdrop-blur-md bg-black/40 border-b border-white/5`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-14">
          {/* Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="https://i.ibb.co/rrCkBr1/1.png"
              alt="Trinity Labs AI"
              className="h-8 w-auto transition-all duration-300 logo-green-hover"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-white"
                    : "text-slate-500 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Matrix - Right Aligned */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/contact"
              className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] hover:text-white transition-all flex items-center gap-2 group"
            >
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform text-slate-600 group-hover:text-white" />
              <span>Talk to Sales</span>
            </Link>

            <Link
              to="/waitlist"
              className="bg-white text-black px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-teal-500 hover:text-white transition-all shadow-lg hover:shadow-teal-500/30"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Controller */}
          <div className="lg:hidden flex items-center relative z-[310]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-xl border transition-all duration-300 ${
                isOpen
                  ? "bg-white border-white text-black"
                  : "bg-white/5 border-white/10 text-white"
              }`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide Down Panel */}
      <div
        className={`absolute left-0 right-0 top-full z-[250] lg:hidden transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-4 mt-3 rounded-2xl border border-white/10 bg-[#050506]/95 backdrop-blur-xl shadow-2xl">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-base font-bold text-white hover:text-teal-400 transition-all uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <Link
                to="/waitlist"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-white text-black text-center py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-teal-500 hover:text-white transition-all"
              >
                Join Waitlist
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full border border-white/20 text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest text-[10px]"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
