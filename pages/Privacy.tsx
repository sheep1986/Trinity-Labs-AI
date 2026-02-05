import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-[#050506] py-24 lg:py-40 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight">Privacy Policy</h1>
        <div className="space-y-8 text-slate-400 text-sm leading-relaxed font-light">
          <p>
            Trinity Labs AI collects only the information needed to evaluate access requests and provide communications
            related to the waitlist. We do not sell personal data.
          </p>
          <p>
            Information submitted through the waitlist form may include contact details and operational context about your
            organization. We use this data to prioritize onboarding and to understand automation requirements.
          </p>
          <p>
            We apply security controls including access controls and encrypted storage. If you want your data removed, contact us through the Contact page.
          </p>
          <p>
            This policy may be updated as the platform evolves. We will publish changes here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
