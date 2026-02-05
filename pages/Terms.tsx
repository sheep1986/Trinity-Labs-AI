import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="bg-[#050506] py-24 lg:py-40 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight">Terms of Service</h1>
        <div className="space-y-8 text-slate-400 text-sm leading-relaxed font-light">
          <p>
            These Terms of Service govern access to Trinity Labs AI and related services. By joining the waitlist or using any
            Trinity Labs AI materials, you agree to these terms.
          </p>
          <p>
            Access to the platform is currently provided by invitation only. We may update or modify access criteria,
            features, or availability at any time as part of a controlled rollout.
          </p>
          <p>
            You agree not to misuse the service, attempt to reverse engineer the platform, or access systems without authorization.
            Use of the platform is subject to applicable laws and compliance obligations.
          </p>
          <p>
            If you have questions about these terms, please contact us via the Contact page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
