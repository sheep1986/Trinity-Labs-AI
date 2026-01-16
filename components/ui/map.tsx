import { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DottedMap from "dotted-map";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  showLabels?: boolean;
  labelClassName?: string;
  animationDuration?: number;
  loop?: boolean;
}

export function WorldMap({
  dots = [],
  lineColor = "#22c55e",
  showLabels = true,
  labelClassName = "text-sm",
  animationDuration = 2,
  loop = true
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const map = useMemo(
    () => new DottedMap({ height: 100, grid: "diagonal" }),
    []
  );

  const svgMap = useMemo(
    () => map.getSVG({
      radius: 0.22,
      color: "#10b98140",
      shape: "circle",
      backgroundColor: "black",
    }),
    [map]
  );

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const staggerDelay = 0.3;
  const totalAnimationTime = dots.length * staggerDelay + animationDuration;
  const pauseTime = 2;
  const fullCycleDuration = totalAnimationTime + pauseTime;

  return (
    <div className="w-full aspect-[2/1] md:aspect-[2.5/1] lg:aspect-[2/1] bg-black rounded-lg relative font-sans overflow-hidden">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none object-cover"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-auto select-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="0.4" />
            <stop offset="50%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="dot-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="50%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0.6" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="strong-glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Lines removed - keeping only pulsing location markers below */}

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);

          return (
            <g key={`points-group-${i}`}>
              <g key={`start-${i}`}>
                <motion.g
                  onHoverStart={() => setHoveredLocation(dot.start.label || `Location ${i}`)}
                  onHoverEnd={() => setHoveredLocation(null)}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Outer pulse ring */}
                  <circle
                    cx={startPoint.x}
                    cy={startPoint.y}
                    r="3"
                    fill={lineColor}
                    opacity="0.4"
                  >
                    <animate
                      attributeName="r"
                      from="4"
                      to="20"
                      dur="2.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.6"
                      to="0"
                      dur="2.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Inner pulse ring */}
                  <circle
                    cx={startPoint.x}
                    cy={startPoint.y}
                    r="3"
                    fill={lineColor}
                    opacity="0.6"
                  >
                    <animate
                      attributeName="r"
                      from="4"
                      to="15"
                      dur="2s"
                      begin="0.3s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.8"
                      to="0"
                      dur="2s"
                      begin="0.3s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Glow circle */}
                  <circle
                    cx={startPoint.x}
                    cy={startPoint.y}
                    r="6"
                    fill={lineColor}
                    fillOpacity="0.4"
                  />

                  {/* Core dot */}
                  <circle
                    cx={startPoint.x}
                    cy={startPoint.y}
                    r="4"
                    fill="url(#dot-gradient)"
                    className="drop-shadow-lg"
                  />
                </motion.g>

                {showLabels && dot.start.label && (
                  <motion.g
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 * i + 0.3, duration: 0.5 }}
                    className="pointer-events-none"
                  >
                    <foreignObject
                      x={startPoint.x - 50}
                      y={startPoint.y - 35}
                      width="100"
                      height="30"
                      className="block"
                    >
                      <div className="flex items-center justify-center h-full">
                        <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-black/95 text-white border border-green-500/30 shadow-sm">
                          {dot.start.label}
                        </span>
                      </div>
                    </foreignObject>
                  </motion.g>
                )}
              </g>

              <g key={`end-${i}`}>
                <motion.g
                  onHoverStart={() => setHoveredLocation(dot.end.label || `Destination ${i}`)}
                  onHoverEnd={() => setHoveredLocation(null)}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Outer pulse ring */}
                  <circle
                    cx={endPoint.x}
                    cy={endPoint.y}
                    r="3"
                    fill={lineColor}
                    opacity="0.4"
                  >
                    <animate
                      attributeName="r"
                      from="4"
                      to="20"
                      dur="2.5s"
                      begin="0.5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.6"
                      to="0"
                      dur="2.5s"
                      begin="0.5s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Inner pulse ring */}
                  <circle
                    cx={endPoint.x}
                    cy={endPoint.y}
                    r="3"
                    fill={lineColor}
                    opacity="0.6"
                  >
                    <animate
                      attributeName="r"
                      from="4"
                      to="15"
                      dur="2s"
                      begin="0.8s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.8"
                      to="0"
                      dur="2s"
                      begin="0.8s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Glow circle */}
                  <circle
                    cx={endPoint.x}
                    cy={endPoint.y}
                    r="6"
                    fill={lineColor}
                    fillOpacity="0.4"
                  />

                  {/* Core dot */}
                  <circle
                    cx={endPoint.x}
                    cy={endPoint.y}
                    r="4"
                    fill="url(#dot-gradient)"
                    className="drop-shadow-lg"
                  />
                </motion.g>

                {showLabels && dot.end.label && (
                  <motion.g
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 * i + 0.5, duration: 0.5 }}
                    className="pointer-events-none"
                  >
                    <foreignObject
                      x={endPoint.x - 50}
                      y={endPoint.y - 35}
                      width="100"
                      height="30"
                      className="block"
                    >
                      <div className="flex items-center justify-center h-full">
                        <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-black/95 text-white border border-green-500/30 shadow-sm">
                          {dot.end.label}
                        </span>
                      </div>
                    </foreignObject>
                  </motion.g>
                )}
              </g>
            </g>
          );
        })}
      </svg>

      <AnimatePresence>
        {hoveredLocation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 left-4 bg-black/90 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm sm:hidden border border-green-500/30"
          >
            {hoveredLocation}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
