import { motion, AnimatePresence } from 'motion/react';
import { Stethoscope, Users, Target, Workflow, Database, Lightbulb, Check, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router';

interface CapabilityDetail {
  icon: React.ElementType;
  label: string;
  color: string;
  headline: string;
  body: string;
  bullets: string[];
}

export function CoreCapabilities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const location = useLocation();

  useEffect(() => {
    // Check for service parameter in URL
    const params = new URLSearchParams(location.search);
    const serviceIndex = params.get('service');
    if (serviceIndex !== null && !isNaN(parseInt(serviceIndex))) {
      const idx = parseInt(serviceIndex);
      if (idx >= 0 && idx < capabilities.length) {
        // Find the section element
        const section = document.getElementById('services');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            setHoveredIndex(idx);
          }, 800);
        }
      }
    }
  }, [location.search]);

  useEffect(() => {
    if (hoveredIndex !== null && cardRefs.current[hoveredIndex]) {
      const card = cardRefs.current[hoveredIndex];
      if (card) {
        const rect = card.getBoundingClientRect();
        const popupHeight = 350; // Estimated height for the more compact popup
        const padding = 180; // Increased safety margin for more generous scroll

        const spaceBelow = window.innerHeight - rect.bottom;

        // If the popup would be cut off at the bottom
        if (spaceBelow < popupHeight + padding) {
          const scrollAmount = (popupHeight + padding) - spaceBelow;
          window.scrollBy({
            top: scrollAmount,
            behavior: 'smooth'
          });
        }
      }
    }
  }, [hoveredIndex]);

  const capabilities: CapabilityDetail[] = [
    {
      icon: Stethoscope,
      label: 'MDS Consulting',
      color: '#A9C25D',
      headline: 'Solve the right problems first',
      body: 'We step in when things feel unclear or stuck. Whether it\'s growth, operations, or direction, we help you cut through noise and focus on what actually matters. No generic frameworks. Just practical thinking tailored to your business.',
      bullets: [
        'Business diagnostics and gap analysis',
        'Leadership alignment and decision support',
        'Growth bottleneck identification',
        'Clear execution roadmaps',
      ],
    },
    {
      icon: Database,
      label: 'Data Modernization',
      color: '#2F4F3E',
      headline: 'Strategic Data Transformation',
      body: 'As a strategic delivery partner for the Department of Health, we spearhead the transition of Enterprise Data Warehousing to Azure cloud, enabling real-time intelligence for public health decision-makers.',
      bullets: [
        'Azure Cloud EDW Migration',
        'Real-Time Cross-Program Analytics',
        'Public Health Surveillance Systems',
        'Immunization & Vital Records Support',
      ],
    },
    {
      icon: Users,
      label: 'Delivery Leadership',
      color: '#A9C25D',
      headline: 'Turn plans into outcomes',
      body: 'Ideas are easy. Execution is where most teams struggle. We bring structure, accountability, and momentum so projects don\'t stall or drift. Your teams move faster with fewer blockers.',
      bullets: [
        'Program and project leadership',
        'Cross-team coordination',
        'Delivery frameworks that actually work',
        'Risk identification and mitigation',
      ],
    },
    {
      icon: Target,
      label: 'Business Strategy',
      color: '#2F4F3E',
      headline: 'Direction you can act on',
      body: 'We help you define where to play and how to win. From positioning to revenue strategy, everything is grounded in real market conditions, not theory.',
      bullets: [
        'Market and competitor analysis',
        'ICP and positioning clarity',
        'Pricing and revenue strategy',
        'Go-to-market planning',
      ],
    },
    {
      icon: Workflow,
      label: 'Agile & Product Evolution',
      color: '#A9C25D',
      headline: 'Build better, faster',
      body: 'We help teams move from slow, reactive development to structured, high-impact product delivery. Less chaos, more clarity on what to build next and why.',
      bullets: [
        'Agile transformation and coaching',
        'Product roadmap planning',
        'Sprint and delivery optimization',
        'Continuous improvement systems',
      ],
    },
    {
      icon: Database,
      label: 'Technology Advisory',
      color: '#2F4F3E',
      headline: 'Make smarter tech decisions',
      body: 'Choosing the wrong tools or architecture slows everything down. We guide your tech decisions so your systems support growth instead of holding it back.',
      bullets: [
        'Tech stack evaluation and selection',
        'System architecture guidance',
        'Vendor and tool selection',
        'Scalability planning',
      ],
    },
    {
      icon: Lightbulb,
      label: 'Data Solutions',
      color: '#A9C25D',
      headline: 'Turn data into decisions',
      body: 'Most businesses have data but don\'t use it well. We organize, track, and surface what matters so you can make confident decisions without guessing.',
      bullets: [
        'Data tracking and infrastructure setup',
        'Dashboard and reporting systems',
        'Performance analysis',
        'Data-driven decision frameworks',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#F8FAF9] relative overflow-visible">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-[#A9C25D]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-[#2F4F3E]/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#A9C25D] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Expertise</span>
          <h2
            className="text-4xl md:text-5xl text-[#2F4F3E] mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Core Capabilities
          </h2>
          <div className="w-20 h-1 bg-[#A9C25D] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-[#2F4F3E]/70 max-w-2xl mx-auto font-light">
            Comprehensive solutions tailored to drive your organization forward
          </p>
        </motion.div>

        {/* Row 1 (3 items) */}
        <div className="flex flex-wrap justify-center gap-x-12 lg:gap-x-20 gap-y-12 mb-12 relative">
          {capabilities.slice(0, 3).map((capability, index) => {
            const globalIndex = index;
            return (
              <div
                key={capability.label}
                ref={(el) => { cardRefs.current[globalIndex] = el; }}
                className="relative flex flex-col items-center group"
                style={{ zIndex: hoveredIndex === globalIndex ? 50 : 1 }}
                onMouseEnter={() => setHoveredIndex(globalIndex)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-4 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  <div
                    className="p-6 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${capability.color} 0%, ${capability.color}dd 100%)`,
                    }}
                  >
                    <capability.icon className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-sm text-[#2F4F3E] font-semibold text-center max-w-[140px] min-h-[40px] flex items-center justify-center">
                    {capability.label}
                  </span>
                </motion.div>

                <AnimatePresence>
                  {hoveredIndex === globalIndex && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ type: 'spring', damping: 22, stiffness: 300, duration: 0.2 }}
                      className="absolute top-full pt-4 left-1/2 -translate-x-1/2 z-[100] w-[290px] md:w-[330px] pointer-events-auto"
                    >
                      <div className="absolute top-0 left-0 w-full h-6 -translate-y-full"></div>
                      <div className="absolute inset-0 bg-[#2F4F3E]/10 blur-3xl rounded-3xl -z-10 translate-y-6"></div>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[6px] w-4 h-4 bg-[#F2F6EF] rotate-45 z-0 border-t border-l border-[#2F4F3E]/5"></div>
                      <div className="bg-[#F2F6EF] text-[#2F4F3E] rounded-xl overflow-hidden border border-[#2F4F3E]/10 shadow-2xl relative z-10 mt-0">
                        <div className="h-1.5 w-full" style={{ backgroundColor: capability.color }}></div>
                        <div className="p-5 md:p-6">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="p-2.5 rounded-lg flex-shrink-0" style={{ backgroundColor: `${capability.color}15` }}>
                              <capability.icon className="w-5 h-5" style={{ color: capability.color }} />
                            </div>
                            <h3 className="text-base md:text-lg font-bold leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                              {capability.label}
                            </h3>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-[10px] font-bold uppercase tracking-[0.1em] mb-1.5" style={{ color: capability.color }}>Impact</h4>
                              <p className="text-[15px] font-semibold text-[#2F4F3E] leading-snug">{capability.headline}</p>
                            </div>
                            <p className="text-[13.5px] text-[#2F4F3E]/80 leading-relaxed font-normal">{capability.body}</p>
                            <div className="pt-1">
                              <h4 className="text-[10px] font-bold uppercase tracking-[0.1em] mb-3 flex items-center gap-3" style={{ color: capability.color }}>
                                What we do
                                <div className="flex-1 h-[1px] bg-[#2F4F3E]/10"></div>
                              </h4>
                              <ul className="space-y-2.5">
                                {capability.bullets.map((bullet, i) => (
                                  <li key={i} className="flex items-start gap-3.5 group/item">
                                    <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300" style={{ backgroundColor: `${capability.color}15` }}>
                                      <Check className="w-2.5 h-2.5" style={{ color: capability.color }} />
                                    </div>
                                    <span className="text-[13px] text-[#2F4F3E]/90 leading-snug font-medium">{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Row 2 (4 items) */}
        <div className="flex flex-wrap justify-center gap-x-8 lg:gap-x-12 gap-y-12 relative">
          {capabilities.slice(3, 7).map((capability, index) => {
            const globalIndex = index + 3;
            return (
              <div
                key={capability.label}
                ref={(el) => { cardRefs.current[globalIndex] = el; }}
                className="relative flex flex-col items-center group"
                style={{ zIndex: hoveredIndex === globalIndex ? 50 : 1 }}
                onMouseEnter={() => setHoveredIndex(globalIndex)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-4 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  <div
                    className="p-6 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${capability.color} 0%, ${capability.color}dd 100%)`,
                    }}
                  >
                    <capability.icon className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-sm text-[#2F4F3E] font-semibold text-center max-w-[140px] min-h-[40px] flex items-center justify-center">
                    {capability.label}
                  </span>
                </motion.div>

                <AnimatePresence>
                  {hoveredIndex === globalIndex && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ type: 'spring', damping: 22, stiffness: 300, duration: 0.2 }}
                      className="absolute top-full pt-4 left-1/2 -translate-x-1/2 z-[100] w-[290px] md:w-[330px] pointer-events-auto"
                    >
                      <div className="absolute top-0 left-0 w-full h-6 -translate-y-full"></div>
                      <div className="absolute inset-0 bg-[#2F4F3E]/10 blur-3xl rounded-3xl -z-10 translate-y-6"></div>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[6px] w-4 h-4 bg-[#F2F6EF] rotate-45 z-0 border-t border-l border-[#2F4F3E]/5"></div>
                      <div className="bg-[#F2F6EF] text-[#2F4F3E] rounded-xl overflow-hidden border border-[#2F4F3E]/10 shadow-2xl relative z-10 mt-0">
                        <div className="h-1.5 w-full" style={{ backgroundColor: capability.color }}></div>
                        <div className="p-5 md:p-6">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="p-2.5 rounded-lg flex-shrink-0" style={{ backgroundColor: `${capability.color}15` }}>
                              <capability.icon className="w-5 h-5" style={{ color: capability.color }} />
                            </div>
                            <h3 className="text-base md:text-lg font-bold leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                              {capability.label}
                            </h3>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-[10px] font-bold uppercase tracking-[0.1em] mb-1.5" style={{ color: capability.color }}>Impact</h4>
                              <p className="text-[15px] font-semibold text-[#2F4F3E] leading-snug">{capability.headline}</p>
                            </div>
                            <p className="text-[13.5px] text-[#2F4F3E]/80 leading-relaxed font-normal">{capability.body}</p>
                            <div className="pt-1">
                              <h4 className="text-[10px] font-bold uppercase tracking-[0.1em] mb-3 flex items-center gap-3" style={{ color: capability.color }}>
                                What we do
                                <div className="flex-1 h-[1px] bg-[#2F4F3E]/10"></div>
                              </h4>
                              <ul className="space-y-2.5">
                                {capability.bullets.map((bullet, i) => (
                                  <li key={i} className="flex items-start gap-3.5 group/item">
                                    <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300" style={{ backgroundColor: `${capability.color}15` }}>
                                      <Check className="w-2.5 h-2.5" style={{ color: capability.color }} />
                                    </div>
                                    <span className="text-[13px] text-[#2F4F3E]/90 leading-snug font-medium">{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#2F4F3E]/5 border border-[#2F4F3E]/10">
            <div className="w-1.5 h-1.5 rounded-full bg-[#A9C25D] animate-pulse"></div>
            <p className="text-sm text-[#2F4F3E]/70 font-medium">
              Hover to explore how we work
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}