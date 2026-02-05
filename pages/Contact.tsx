
import React from 'react';
import { Mail, Calendar, MapPin } from 'lucide-react';
import VideoPreview from '../components/VideoPreview';

const Contact: React.FC = () => {
  return (
    <>
      <div className="bg-[#0a0a0b] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h1 className="text-4xl font-bold text-white mb-8">Start a conversation</h1>
            <p className="text-xl text-slate-400 mb-12">
              We help you understand what Trinity Voice can automate for your team.
            </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-teal-900/10 rounded flex items-center justify-center text-teal-600 mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">General & Sales</h4>
                    <p className="text-slate-500">sales@trinitylabs.ai</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-teal-900/10 rounded flex items-center justify-center text-teal-600 mt-1">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Partnerships</h4>
                    <p className="text-slate-500">partners@trinitylabs.ai</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-teal-900/10 rounded flex items-center justify-center text-teal-600 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Headquarters</h4>
                    <p className="text-slate-500">2410 California St, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1c] border border-[#2d2d30] p-6 sm:p-8 md:p-10 rounded-2xl">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Do not fill this out if you are human: <input name="bot-field" />
                  </label>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      name="full_name"
                      className="w-full bg-[#0a0a0b] border border-[#2d2d30] rounded p-3 text-white focus:border-teal-600 focus:outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Work Email</label>
                    <input 
                      type="email" 
                      name="email"
                      className="w-full bg-[#0a0a0b] border border-[#2d2d30] rounded p-3 text-white focus:border-teal-600 focus:outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Company</label>
                  <input 
                    type="text" 
                    name="company"
                    className="w-full bg-[#0a0a0b] border border-[#2d2d30] rounded p-3 text-white focus:border-teal-600 focus:outline-none transition-all"
                    placeholder="Acme Corp"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subject of Inquiry</label>
                  <select name="subject" className="w-full bg-[#0a0a0b] border border-[#2d2d30] rounded p-3 text-white focus:border-teal-600 focus:outline-none transition-all">
                     <option>Platform Overview</option>
                     <option>Security Review</option>
                     <option>Partnership Inquiry</option>
                     <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
                  <textarea 
                    rows={4}
                    name="message"
                    className="w-full bg-[#0a0a0b] border border-[#2d2d30] rounded p-3 text-white focus:border-teal-600 focus:outline-none transition-all"
                    placeholder="How can we help?"
                  ></textarea>
                </div>

                <button className="w-full bg-white text-black py-4 rounded font-bold hover:bg-slate-200 transition-all uppercase tracking-widest text-sm">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <VideoPreview
        eyebrow="Contact Preview"
        title="See how onboarding works"
        description="Preview of the discovery and workflow alignment process."
      />
    </>
  );
};

export default Contact;
