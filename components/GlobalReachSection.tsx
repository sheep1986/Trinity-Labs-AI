import React from "react";
import { WorldMap } from "@/components/ui/map";
import { Globe, Languages, Users, MapPin, Zap, Sparkles } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import TextMarque from "@/components/ui/text-marque";

export default function GlobalReachSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-green-950/5 to-black relative overflow-x-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_70%)]"></div>


      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10 mb-20">
        {/* Animated Marquee Header */}
        <div className="text-center mb-12 pt-12">
          <h2 className="text-[10px] font-bold text-green-500 uppercase tracking-[0.5em] mb-6 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Global Voice AI Network
          </h2>
        </div>
      </div>

      <div className="mb-24 pb-8 min-h-[200px] relative z-10 w-full overflow-hidden">
        <TextMarque
            delay={0}
            baseVelocity={-2}
            scrollDependent={false}
            clasname='font-bold tracking-[-0.02em] leading-[110%] text-white'
        >
            Reach Customers Everywhere.
        </TextMarque>
        <TextMarque
            delay={0}
            baseVelocity={2}
            scrollDependent={false}
            clasname='font-bold tracking-[-0.02em] leading-[110%] bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent'
        >
            Speak Every Language.
        </TextMarque>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20 pb-12">
          <RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-12 items-center">
               {/* Left: Image */}
               <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 group">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                       style={{ backgroundImage: 'url("/global-network.png")' }} // Earth/Global connection theme
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60"></div>
               </div>

               {/* Right: Text Content */}
               <div className="space-y-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    Connect your business to the world.
                  </h3>
                  <div className="space-y-6">
                    <p className="text-lg text-slate-300 font-light leading-relaxed">
                      Trinity's AI voice assistant connects your business to the world with support for <strong className="text-white font-semibold">100+ languages</strong> and <strong className="text-white font-semibold">regional dialects</strong>. From Tokyo to Toronto, São Paulo to Sydney—deliver natural, human-quality conversations in your customers' native language.
                    </p>
                    <p className="text-base text-slate-400 leading-relaxed">
                      Break down language barriers and expand globally without hiring multilingual staff. Our advanced natural language processing adapts pronunciation, cultural context, and conversation style for authentic communication across continents, time zones, and cultures.
                    </p>
                  </div>
               </div>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={100}>
          <div className="mb-32">
            <WorldMap
                dots={[
                  {
                    start: { lat: 40.7128, lng: -74.0060, label: "New York" },
                    end: { lat: 51.5074, lng: -0.1278, label: "London" },
                  },
                  {
                    start: { lat: 51.5074, lng: -0.1278, label: "London" },
                    end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
                  },
                  {
                    start: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
                    end: { lat: -33.8688, lng: 151.2093, label: "Sydney" },
                  },
                  {
                    start: { lat: -33.8688, lng: 151.2093, label: "Sydney" },
                    end: { lat: -23.5505, lng: -46.6333, label: "São Paulo" },
                  },
                  {
                    start: { lat: -23.5505, lng: -46.6333, label: "São Paulo" },
                    end: { lat: 40.7128, lng: -74.0060, label: "New York" },
                  },
                  {
                    start: { lat: 28.6139, lng: 77.2090, label: "New Delhi" },
                    end: { lat: 1.3521, lng: 103.8198, label: "Singapore" },
                  },
                ]}
                lineColor="#22c55e"
              />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {[
              {
                icon: Languages,
                number: "100+",
                label: "Languages",
                desc: "Fluent in every major global language",
                image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1000&auto=format&fit=crop" // Abstract Dark Mesh/Network
              },
              {
                icon: Globe,
                number: "195",
                label: "Countries",
                desc: "Instant deployment worldwide",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" // Earth Network (Keep, fits tech theme)
              },
              {
                icon: MapPin,
                number: "24/7",
                label: "Availability",
                desc: "Always on, in every timezone",
                image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1000&auto=format&fit=crop" // Abstract City Light Trails / Data Flow
              },
              {
                icon: Users,
                number: "5B+",
                label: "Reach",
                desc: "Connecting the global population",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" // Cyberpunk/Tech Data blocks
              }
            ].map((stat, i) => (
              <div key={i} className="group relative h-96 overflow-hidden rounded-3xl cursor-pointer border border-white/5 bg-black">
                {/* Background Image - Starts Desaturated/Dark, Becomes Vibrant on Hover */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:filter-none filter grayscale opacity-40 group-hover:opacity-100 will-change-transform"
                  style={{ backgroundImage: `url(${stat.image})` }}
                />
                
                {/* Stronger Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 border border-white/10 rounded-3xl group-hover:border-green-500/50 transition-colors duration-500 z-20" />
                
                {/* Content Container */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end relative z-30">
                  {/* Icon floating top right */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center group-hover:bg-green-500 transition-all duration-500 border border-white/10 group-hover:border-green-400">
                    <stat.icon className="text-slate-200 group-hover:text-black transition-colors" size={20} />
                  </div>
                  
                  {/* Number & Label */}
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="text-6xl font-bold text-white mb-2 tracking-tighter bg-clip-text">
                      {stat.number}
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                       <div className="h-px w-8 bg-green-500 transition-all duration-500 group-hover:w-12"></div>
                       <div className="text-green-400 font-bold uppercase tracking-widest text-xs">
                          {stat.label}
                       </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed max-w-[90%] group-hover:text-white transition-colors duration-300">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={300}>
          <div className="mt-48">
            <div className="max-w-7xl mx-auto">
              {/* Two-column layout: Rotating gradient visual on left, content on right */}
              <div className="grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT: Rotating gradient visual element */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative flex items-center justify-center h-[500px]"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="h-[90%] w-[90%] rounded-[48px] blur-3xl opacity-70 will-change-transform backface-hidden"
                      style={{
                        background: `conic-gradient(from 0deg,
                          rgb(52, 211, 153),
                          rgb(34, 211, 238),
                          rgb(59, 130, 246),
                          rgb(139, 92, 246),
                          rgb(239, 68, 68),
                          rgb(52, 211, 153))`,
                        animation: 'spin 12s linear infinite',
                        transform: 'translateZ(0)' // Force GPU layer
                      }}
                    />
                  </div>

                  {/* Center display element */}
                  <div className="relative z-10 w-full max-w-[400px] aspect-square rounded-3xl border border-white/10 bg-black/90 shadow-2xl backdrop-blur-xl p-6 md:p-12 flex flex-col items-center justify-center">
                    <div className="text-center space-y-6">
                      <div className="flex items-center justify-center gap-4 mb-8">
                        <Zap className="text-yellow-400" size={32} />
                        <Globe className="text-blue-400" size={32} />
                        <Sparkles className="text-purple-400" size={32} />
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-5xl font-bold text-white">100+</h4>
                        <p className="text-lg text-zinc-300">Languages</p>
                      </div>

                      <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-green-500 to-transparent" />

                      <div className="space-y-2">
                        <h4 className="text-3xl font-bold text-white">&lt; 1s</h4>
                        <p className="text-sm text-zinc-400">Detection Time</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* RIGHT: Content */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                      Instant Language Detection & Switching
                    </h3>
                    <p className="text-xl text-slate-400 leading-relaxed">
                      Real-time language detection automatically identifies your caller's language and switches instantly—no setup required.
                    </p>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-6 pt-4">
                    {[
                      {
                        icon: Zap,
                        title: "Instant Detection",
                        desc: "Automatically identifies language within the first second of conversation"
                      },
                      {
                        icon: Globe,
                        title: "100+ Languages",
                        desc: "Support for every major language and regional dialect worldwide"
                      },
                      {
                        icon: Sparkles,
                        title: "Native Quality",
                        desc: "Natural pronunciation with cultural context and conversation style"
                      }
                    ].map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                        className="flex gap-4 group"
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 flex items-center justify-center border border-green-500/20 group-hover:border-green-500/40 transition-all duration-300">
                          <feature.icon className="text-green-400" size={24} />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-1 group-hover:text-green-50 transition-colors">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            {feature.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
