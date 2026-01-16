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
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[200] transition-all duration-300 py-4 backdrop-blur-md bg-black/40 border-b border-white/5`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-14">
          {/* Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-6 h-6">
              {/* Triquetra/Trinity Icon SVG */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full text-white"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M12 2L2 22h20L12 2zm0 3.5L18.5 20h-13L12 5.5z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="13"
                  r="3"
                  className="fill-white/10"
                  stroke="none"
                />
              </svg>
            </div>
            <span className="text-sm font-semibold text-white tracking-tight">
              Trinity Labs AI
            </span>
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
              to="/login"
              className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] hover:text-white transition-all flex items-center gap-2 group"
            >
              <ArrowRight
                size={12}
                className="group-hover:translate-x-1 transition-transform text-slate-600 group-hover:text-white"
              />
              <span>Login</span>
            </Link>

            <Link
              to="/demo"
              className="bg-white text-black px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-slate-200 transition-all shadow-lg hover:shadow-white/20"
            >
              Request Demo
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

      {/* Mobile Menu - Higher Z-Index to cover AI Trigger */}
      <div
        className={`fixed inset-0 z-[500] lg:hidden transition-all duration-500 ease-in-out bg-black/95 backdrop-blur-3xl ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[#050506]"></div>
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
