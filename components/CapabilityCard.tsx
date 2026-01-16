import React, { useState } from 'react';
import { ChevronRight, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import CardMatrixRain from './CardMatrixRain';

interface CapabilityCardProps {
  title: string;
  Icon: LucideIcon;
  desc: string;
  to?: string;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ title, Icon, desc, to = '/demo' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={to}
      className="group p-10 bg-[#0c0c0e] border border-white/5 rounded-3xl hover:border-green-500/30 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(34,197,94,0.1)] relative overflow-hidden flex flex-col text-left"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Matrix Rain Effect - Only active on hover */}
      {isHovered && <CardMatrixRain />}

      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="mb-8 p-4 bg-white/5 w-fit rounded-2xl group-hover:bg-green-500/20 group-hover:text-green-400 transition-colors duration-500 relative z-10">
         <Icon size={32} strokeWidth={1.5} />
      </div>
      
      <h4 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-300 relative z-10">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed font-light group-hover:text-slate-300 transition-colors relative z-10">{desc}</p>
      
      {/* Hover Arrow */}
      <div className="mt-8 flex items-center text-green-500 text-xs font-bold uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100 relative z-10">
         <span>Learn More</span>
         <ChevronRight size={14} className="ml-1" />
      </div>
    </Link>
  );
};

export default CapabilityCard;
