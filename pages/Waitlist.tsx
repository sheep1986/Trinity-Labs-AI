import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Globe, PhoneCall } from 'lucide-react';
import VideoPreview from '../components/VideoPreview';

const industries = [
  'Utilities / Energy Brokers',
  'Real Estate',
  'Legal Firms',
  'Clinics / Healthcare Admin',
  'Hospitality',
  'Agencies (Lead Gen / Appointment Setting)',
  'Other'
];

const callVolumes = [
  '< 100 / month',
  '100 - 1,000 / month',
  '1,000 - 10,000 / month',
  '10,000+ / month'
];

const Waitlist: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showOptional, setShowOptional] = useState(false);

  return (
    <div className="bg-[#050506] py-20 md:py-28 lg:py-40 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-[10px] font-bold text-teal-500 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              Waitlist Access
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[0.95]">
              Join the waitlist for Trinity Voice.
            </h1>
            <p className="text-lg text-slate-400 font-light leading-relaxed max-w-xl">
              We are onboarding in controlled waves. Tell us what you want to automate and we will reach out with timing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {[
                { title: 'Private by Design', icon: ShieldCheck, desc: 'Sensitive details are protected by default.' },
                { title: 'Provider-Agnostic', icon: Globe, desc: 'Designed to avoid lock‑in to a single provider.' },
                { title: 'Cost Guardrails', icon: PhoneCall, desc: 'Hard stops before cost is incurred.' }
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl">
                  <item.icon className="text-teal-500 mb-3" size={18} />
                  <h3 className="text-white text-sm font-bold mb-2 uppercase tracking-widest">{item.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0d0d0f] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-teal-500 text-xs font-bold uppercase tracking-widest mb-4">Request Received</div>
                <h2 className="text-3xl font-bold text-white mb-4">You are on the list.</h2>
                <p className="text-slate-400 max-w-md mx-auto">
                  We will review your request and reach out with next steps.
                </p>
              </div>
            ) : (
              <form
                name="waitlist"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={() => setSubmitted(true)}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="waitlist" />
                <p className="hidden">
                  <label>
                    Do not fill this out if you are human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Full Name *</label>
                    <input
                      name="name"
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-teal-500 focus:outline-none transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Work Email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-teal-500 focus:outline-none transition-all"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Company</label>
                    <input
                      name="company"
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-teal-500 focus:outline-none transition-all"
                      placeholder="Trinity Group"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Role / Title</label>
                    <input
                      name="role"
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-teal-500 focus:outline-none transition-all"
                      placeholder="Ops Lead"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Industry</label>
                    <select
                      name="industry"
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-teal-500 focus:outline-none transition-all"
                      defaultValue=""
                    >
                      <option value="" disabled>Select industry</option>
                      {industries.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Monthly Call Volume</label>
                    <select
                      name="monthly_call_volume"
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-teal-500 focus:outline-none transition-all"
                      defaultValue=""
                    >
                      <option value="" disabled>Select volume</option>
                      {callVolumes.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">What are you trying to automate?</label>
                  <textarea
                    name="automation_goals"
                    rows={4}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-teal-500 focus:outline-none transition-all resize-none"
                    placeholder="Inbound routing, outbound follow-ups, appointment booking..."
                  ></textarea>
                </div>

                <div className="border border-white/10 rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setShowOptional((v) => !v)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-teal-400 transition-all"
                  >
                    Optional (helps us prioritise access)
                    <span className="text-slate-600">{showOptional ? '—' : '+'}</span>
                  </button>
                  {showOptional && (
                    <div className="px-5 pb-5 space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Phone (optional)</label>
                          <input
                            name="phone"
                            className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-teal-500 focus:outline-none transition-all"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Website</label>
                          <input
                            name="website"
                            className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-teal-500 focus:outline-none transition-all"
                            placeholder="company.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Country</label>
                          <input
                            name="country"
                            className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-teal-500 focus:outline-none transition-all"
                            placeholder="United States"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Current Tools</label>
                          <input
                            name="current_tools"
                            className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-teal-500 focus:outline-none transition-all"
                            placeholder="CRM / phone system"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black py-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-teal-500 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  Join Waitlist
                  <ArrowRight size={14} />
                </button>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest text-center">
                  Used only to prioritise early access — no spam.
                </p>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: '1. Review', desc: 'We assess fit, volume, and compliance needs.' },
            { title: '2. Alignment', desc: 'We confirm routing, safety, and workflow goals.' },
            { title: '3. Access', desc: 'You receive onboarding materials and access timing.' }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-[#0d0d0f] border border-white/10 rounded-2xl">
              <p className="text-[10px] font-bold text-teal-500 uppercase tracking-widest mb-2">{item.title}</p>
              <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <VideoPreview
          eyebrow="Access Preview"
          title="What early access looks like"
          description="Preview of the onboarding sequence and workflow alignment."
        />
      </div>
    </div>
  );
};

export default Waitlist;
