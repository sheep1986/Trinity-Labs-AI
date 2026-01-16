import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Define the props interface for the component
interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: React.ReactNode;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

// Reusable CtaCard component with a clean, modern layout
const CtaCard = React.forwardRef<HTMLDivElement, CtaCardProps>(
  ({ className, imageSrc, imageAlt, title, subtitle, description, buttonText, onButtonClick, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0e] text-card-foreground shadow-2xl",
          "flex flex-col md:flex-row", // Stacks on mobile, row on desktop
          className
        )}
        {...props}
      >
        {/* Image Section */}
        <div className="md:w-1/3 w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e]/50 to-transparent z-10 hidden md:block"></div>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-64 w-full object-cover md:h-full opacity-80" // Ensure image covers the area
          />
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 w-full p-8 md:p-12 flex flex-col justify-center relative z-20">
          <div>
            <p className="text-sm font-bold text-green-500 uppercase tracking-widest mb-2 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               {title}
            </p>
            <h2 className="mt-1 text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
              {subtitle}
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-xl">
              {description}
            </p>
            <div className="mt-8">
              <Button 
                size="lg" 
                onClick={onButtonClick}
                className="bg-white text-black hover:bg-slate-200 transition-all font-bold uppercase tracking-widest text-xs h-12 px-8 rounded-full"
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
CtaCard.displayName = "CtaCard";

export { CtaCard };
