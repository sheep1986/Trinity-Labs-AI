
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { VoiceAgent } from './components/VoiceAgent';
import MobileStickyCta from './components/MobileStickyCta';

import Home from './pages/Home';
// Lazy load pages for performance
const Platform = lazy(() => import('./pages/Platform'));
const Security = lazy(() => import('./pages/Security'));
const UseCases = lazy(() => import('./pages/UseCases'));
const Pricing = lazy(() => import('./pages/Pricing'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Documentation = lazy(() => import('./pages/Documentation'));
const Waitlist = lazy(() => import('./pages/Waitlist'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  React.useEffect(() => {
    const warm = () => {
      import('./pages/Platform');
      import('./pages/Security');
      import('./pages/UseCases');
      import('./pages/Pricing');
      import('./pages/About');
      import('./pages/Contact');
      import('./pages/FAQ');
      import('./pages/Documentation');
      import('./pages/Waitlist');
      import('./pages/Terms');
      import('./pages/Privacy');
    };

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(warm);
    } else {
      setTimeout(warm, 1200);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-teal-900/40 selection:text-white">
        <Navbar />
        <main className="flex-grow pb-24 lg:pb-0">
          <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/waitlist" element={<Waitlist />} />
              <Route path="/platform" element={<Platform />} />
              <Route path="/security" element={<Security />} />
              <Route path="/use-cases" element={<UseCases />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/demo" element={<Navigate to="/waitlist" replace />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </Suspense>
        </main>
        <MobileStickyCta />
        {/* Unified Singleton Voice Controller */}
        <VoiceAgent />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
