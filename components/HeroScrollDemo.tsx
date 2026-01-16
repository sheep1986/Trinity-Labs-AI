import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GradientDots } from "@/components/ui/gradient-dots";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-black relative">
      {/* Animated Gradient Dots Background */}
      <GradientDots
        duration={30}
        colorCycleDuration={8}
        backgroundColor="rgb(0, 0, 0)"
        className="opacity-30"
      />

      {/* Gradient Fade Overlays for smooth transitions */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-[5] pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-[5] pointer-events-none"></div>

      <div className="relative z-10">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white px-4">
                Enterprise-Grade Voice AI <br className="hidden sm:block" />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent block">
                  That Scales Infinitely
                </span>
              </h1>
            </>
          }
        >
          <img
            src="/Untitled design (3).svg"
            alt="Trinity AI Call Log Dashboard - Real-time call transcripts, analytics and monitoring"
            className="mx-auto rounded-xl md:rounded-2xl w-full h-full object-contain"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  );
}
