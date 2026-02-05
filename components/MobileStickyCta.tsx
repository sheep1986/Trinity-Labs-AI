import React from 'react';
import { Link } from 'react-router-dom';

const MobileStickyCta: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[180] lg:hidden">
      <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-[#050506]/90 backdrop-blur-xl shadow-2xl">
        <div className="p-3 flex items-center gap-3">
          <Link
            to="/waitlist"
            className="flex-1 bg-white text-black text-center py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-teal-500 hover:text-white transition-all"
          >
            Join Waitlist
          </Link>
          <Link
            to="/contact"
            className="flex-1 border border-white/20 text-white text-center py-3 rounded-xl font-bold uppercase tracking-widest text-[10px]"
          >
            Talk to Sales
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileStickyCta;
