import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeaturesProps {
  features: {
    id: number;
    icon: React.ElementType;
    title: string;
    description: string;
    image: string;
  }[];
  primaryColor?: string;
  progressGradientLight?: string;
  progressGradientDark?: string;
}

export function Features({
  features,
  primaryColor = "green-500",
  progressGradientLight = "bg-gradient-to-r from-green-400 to-green-500",
  progressGradientDark = "bg-gradient-to-r from-green-500 to-teal-500",
}: FeaturesProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }, 200);
    }
  }, [progress]);

  useEffect(() => {
    const activeFeatureElement = featureRefs.current[currentFeature];
    const container = containerRef.current;

    if (activeFeatureElement && container) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = activeFeatureElement.getBoundingClientRect();

      container.scrollTo({
        left:
          activeFeatureElement.offsetLeft -
          (containerRect.width - elementRect.width) / 2,
        behavior: "smooth",
      });
    }
  }, [currentFeature]);

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header - Handled by parent component usually, but keeping structure if needed */}
        
        <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 items-center">
          {/* Left Side - Features with Progress Lines */}
          <div
            ref={containerRef}
            className="lg:space-y-8 md:space-x-6 lg:space-x-0 overflow-x-auto overflow-hidden no-scrollbar lg:overflow-visible flex lg:flex lg:flex-col flex-row order-1 pb-4 scroll-smooth"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = currentFeature === index;

              return (
                <div
                  key={feature.id}
                  ref={(el) => {
                    featureRefs.current[index] = el;
                  }}
                  className="relative cursor-pointer flex-shrink-0"
                  onClick={() => handleFeatureClick(index)}
                >
                  {/* Feature Content */}
                  <div
                    className={cn(
                      "flex lg:flex-row flex-col items-start space-x-4 p-4 lg:p-6 max-w-sm md:max-w-sm lg:max-w-2xl transition-all duration-300 rounded-2xl border",
                      isActive
                        ? "bg-white/5 border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.15)] ring-1 ring-green-500/20"
                        : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10"
                    )}
                  >
                    {/* Icon */}
                    <div
                      className={cn(
                        "p-3 rounded-xl transition-all duration-300 flex-shrink-0",
                        isActive
                          ? "bg-green-500 text-black shadow-lg shadow-green-500/30 scale-110"
                          : "bg-white/10 text-slate-400 group-hover:text-white"
                      )}
                    >
                      <Icon size={24} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className={cn(
                          "text-xl font-bold mb-2 transition-colors duration-300",
                          isActive ? "text-white" : "text-slate-400 group-hover:text-green-50"
                        )}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={cn(
                          "transition-colors duration-300 text-base leading-relaxed hidden md:block",
                          isActive ? "text-slate-300" : "text-slate-500"
                        )}
                      >
                        {feature.description}
                      </p>
                      
                      {/* Progress Bar */}
                      <div className="mt-4 bg-white/5 rounded-full h-1 overflow-hidden w-full">
                        {isActive ? (
                          <motion.div
                            className={`h-full ${progressGradientDark} shadow-[0_0_10px_rgba(34,197,94,0.5)]`}
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1, ease: "linear" }}
                          />
                        ) : (
                          <div className="h-full w-0" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Image Display */}
          <div className="relative order-1 max-w-lg mx-auto lg:order-2 w-full aspect-[4/3] lg:aspect-square flex items-center justify-center">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <img
                className="rounded-3xl border border-white/10 shadow-2xl object-cover w-full h-full"
                src={features[currentFeature].image}
                alt={features[currentFeature].title}
              />
              {/* Optional Glow */}
              <div className="absolute inset-0 bg-green-500/10 blur-3xl -z-10 rounded-full opacity-60 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
