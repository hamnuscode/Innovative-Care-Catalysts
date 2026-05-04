import image_fee02a20f475a57f3395245eb8d7cea175c88a65 from '../../assets/fee02a20f475a57f3395245eb8d7cea175c88a65.png'
import { motion } from 'motion/react';
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

export function CTASection() {
  const navigate = useNavigate();

  return (
    <section
      id="contact-cta"
      className="py-16 bg-gradient-to-br from-[#2F4F3E] via-[#2F4F3E] to-[#3d6350] relative overflow-visible"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A9C25D] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A9C25D] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl text-white mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Let's Transform Your Operations with
              <br />
              <span className="text-[#A9C25D]">Clarity and Confidence</span>
            </h2>

            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Partner with us to unlock your organization's full potential through strategic alignment of people, processes, and technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="group bg-[#A9C25D] text-[#2F4F3E] px-8 py-4 rounded-full hover:bg-[#b8d170] transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => {
                  if (window.location.pathname !== '/') {
                    navigate('/#about');
                  } else {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group bg-white/10 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-lg border-2 border-white/30"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const navigate = useNavigate();
  
  const quickLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'MDS Consulting',
    'Delivery Leadership',
    'Business Strategy',
    'Agile & Product Evolution',
  ];

  const handleServiceClick = (index: number) => {
    if (window.location.pathname !== '/') {
      navigate(`/?service=${index}#services`);
    } else {
      const section = document.getElementById('services');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // We'll trust the CoreCapabilities Effect to pick up the search param if we refresh, 
        // but for SPA navigation we might need a custom event or state.
        // For now, let's just update the URL.
        const url = new URL(window.location.href);
        url.searchParams.set('service', index.toString());
        window.history.pushState({}, '', url);
        // Force a small delay to ensure scroll finishes
        window.dispatchEvent(new Event('popstate'));
      }
    }
  };

  return (
    <footer className="bg-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <button 
              onClick={() => {
                if (window.location.pathname !== '/') {
                  navigate('/');
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <img
                src={image_fee02a20f475a57f3395245eb8d7cea175c88a65}
                alt="Innovative Care Catalysts"
                className="h-[60px] w-auto mb-2"
              />
            </button>
            <p className="text-[#2F4F3E]/70 text-sm text-center md:text-left">
              Driving performance through people, process & technology.
            </p>
          </div>

          {/* Quick Links & Services */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-[#2F4F3E] mb-3 text-sm" style={{ fontFamily: 'var(--font-heading)' }}>
                Quick Links
              </h4>
              <ul className="space-y-1.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/#') ? (
                       <button
                         onClick={() => {
                           if (window.location.pathname !== '/') {
                             navigate(link.href);
                           } else {
                             document.getElementById(link.href.split('#')[1])?.scrollIntoView({ behavior: 'smooth' });
                           }
                         }}
                         className="text-[#2F4F3E]/70 hover:text-[#A9C25D] transition-colors duration-300 text-sm"
                       >
                         {link.name}
                       </button>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-[#2F4F3E]/70 hover:text-[#A9C25D] transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[#2F4F3E] mb-3 text-sm" style={{ fontFamily: 'var(--font-heading)' }}>
                Services
              </h4>
              <ul className="space-y-1.5">
                {services.map((service, index) => (
                  <li key={service}>
                    <button 
                      onClick={() => handleServiceClick(index)}
                      className="text-[#2F4F3E]/70 hover:text-[#A9C25D] transition-colors duration-300 text-sm text-left"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#2F4F3E] mb-3 text-sm" style={{ fontFamily: 'var(--font-heading)' }}>
              Contact
            </h4>
            <div className="space-y-2 mb-4">
              <a
                href="mailto:info@innovativecarecatalysts.com"
                className="flex items-center gap-2 text-[#2F4F3E]/70 hover:text-[#A9C25D] transition-colors duration-300 text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@innovativecarecatalysts.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-[#2F4F3E]/70 hover:text-[#A9C25D] transition-colors duration-300 text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-[#A9C25D]/20 p-2 rounded-full hover:bg-[#A9C25D] hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-[#A9C25D]/20 p-2 rounded-full hover:bg-[#A9C25D] hover:text-white transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-[#2F4F3E]/10">
        <div className="container mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#2F4F3E]/60">
            <p>© {new Date().getFullYear()} Innovative Care Catalysts. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#privacy" className="hover:text-[#A9C25D] transition-colors duration-300">
                Privacy
              </a>
              <a href="#terms" className="hover:text-[#A9C25D] transition-colors duration-300">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}