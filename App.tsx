
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { VoiceAgent } from './components/VoiceAgent';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Platform = lazy(() => import('./pages/Platform'));
const Security = lazy(() => import('./pages/Security'));
const UseCases = lazy(() => import('./pages/UseCases'));
const Pricing = lazy(() => import('./pages/Pricing'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Demo = lazy(() => import('./pages/Demo'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Documentation = lazy(() => import('./pages/Documentation'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-teal-900/40 selection:text-white">
        <Navbar />
        <main className="flex-grow pt-24 lg:pt-32">
          <Suspense fallback={
            <div className="min-h-[60vh] flex items-center justify-center bg-[#0a0a0b]">
              <div className="w-8 h-8 border-2 border-slate-700 border-t-teal-600 rounded-full animate-spin"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/platform" element={<Platform />} />
              <Route path="/security" element={<Security />} />
              <Route path="/use-cases" element={<UseCases />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/docs" element={<Documentation />} />
            </Routes>
          </Suspense>
        </main>
        {/* Unified Singleton Voice Controller */}
        <VoiceAgent />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
