import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoSlider } from './components/LogoSlider';
import { OurFocus } from './components/OurFocus';
import { FirmOverview } from './components/FirmOverview';
import { CoreCapabilities } from './components/CoreCapabilities';
import { OurExpertise } from './components/OurExpertise';
import { Industries } from './components/Industries';
import { OurApproach } from './components/OurApproach';
import { Testimonials } from './components/Testimonials';
import { CTASection, Footer } from './components/CTA';
import { ChatWidget } from './components/ChatWidget';
import { ContactPage } from './pages/ContactPage';
import { StateFootprint } from './components/StateFootprint';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Wait for rendering to complete
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Hero />
      <LogoSlider />
      <OurFocus />
      <FirmOverview />
      <StateFootprint />
      <CoreCapabilities />
      <OurExpertise />
      <Industries />
      <OurApproach />
      <Testimonials />
      <CTASection />
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      {!isContactPage && <ChatWidget />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}