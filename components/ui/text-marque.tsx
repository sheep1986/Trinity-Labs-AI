import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from 'framer-motion';
import { cn } from '@/lib/utils';

interface ComponentProps {
  children: string;
  baseVelocity: number;
  clasname?: string;
  scrollDependent?: boolean;
  delay?: number;
}

const Component = ({
  children,
  baseVelocity = -5,
  clasname,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  scrollDependent = true,
  delay = 0,
}: ComponentProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of THIS component relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 50, stiffness: 400 });

  // Move range: 0% to -20% (or positive) depending on velocity
  // We don't want it to move TOO fast otherwise it's hard to read
  // And we want it to start visible.
  
  const x = useTransform(smoothProgress, [0, 1], ["0%", `${baseVelocity * 5}%`]);

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap flex w-full">
      <motion.div
        className='flex whitespace-nowrap gap-10 flex-nowrap w-full'
        style={{ x }}
      >
        {/* Render copies to ensure full width coverage */}
        <span className={cn(`block text-[6vw] md:text-[7vw] flex-shrink-0`, clasname)}>{children}</span>
        <span className={cn(`block text-[6vw] md:text-[7vw] flex-shrink-0`, clasname)}>{children}</span>
        <span className={cn(`block text-[6vw] md:text-[7vw] flex-shrink-0`, clasname)}>{children}</span>
        <span className={cn(`block text-[6vw] md:text-[7vw] flex-shrink-0`, clasname)}>{children}</span>
      </motion.div>
    </div>
  );
};

Component.displayName = 'TextMarque';

export default Component;
