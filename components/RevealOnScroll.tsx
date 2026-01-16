import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number; // Delay in ms
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
  children, 
  width = "100%",
  className = "",
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -50px 0px", // Trigger when element is slightly above bottom
        threshold: 0.15, // 15% visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Inline style for dynamic delay
  const transitionDelay = `${delay}ms`;

  return (
    <div
      ref={ref}
      style={{ width, transitionDelay }}
      className={`${className} transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
