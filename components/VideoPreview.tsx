import React from 'react';
import { Play } from 'lucide-react';

interface VideoPreviewProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({
  eyebrow = 'Early Access Preview',
  title = 'Watch the Trinity Voice walkthrough',
  description = 'Preview of how Trinity Voice handles calls. Not a live product yet.'
}) => {
  return (
    <section className="py-16 md:py-20 bg-[#050506]">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-5/12">
            <p className="text-[10px] font-bold text-green-500 uppercase tracking-[0.5em] mb-4">{eyebrow}</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{title}</h3>
            <p className="text-slate-400 font-light leading-relaxed">{description}</p>
          </div>
          <div className="lg:w-7/12 w-full">
            <div className="relative aspect-video rounded-3xl border border-white/10 bg-[#0d0d0f] overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_60%)]"></div>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_55%)]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Play className="text-white" size={28} />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[10px] uppercase tracking-widest text-slate-500">
                <span>Preview Placeholder</span>
                <span>Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPreview;
