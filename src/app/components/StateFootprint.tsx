import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const statesData = [
  {
    abbr: 'PA',
    name: 'Pennsylvania',
    subtitle: 'Primary Footprint',
    clients: [
      { name: 'MDS Consulting', detail: 'Tailored business diagnostics, leadership alignment, and actionable execution roadmaps.' },
      { name: 'DHS ERP Modernization', detail: 'Full-cycle analysis, PI planning, and RTM management for high-stakes systems.' },
      { name: 'DOT Systems Modernization', detail: 'Infrastructure tech advisory, traffic management systems, and data-informed logistics.' },
    ]
  },
  {
    abbr: 'CA',
    name: 'California',
    subtitle: 'Regional Partner',
    clients: [
      { name: 'Yum! Brands', detail: 'Strategic digital initiatives and enterprise-level system optimization.' },
      { name: 'Hyundai Capital', detail: 'Financial technology modernization and operational efficiency strategies.' },
      { name: 'Amgen Inc.', detail: 'High-impact technology consulting for global biopharmaceutical operations.' },
      { name: 'Local and Regional Hospitals', detail: 'Modernizing healthcare infrastructure and patient service delivery systems.' },
    ]
  }
];

export const StateFootprint = () => {
  const [activeState, setActiveState] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[#F8FAF9] border-t border-[#2F4F3E]/5 relative z-20 overflow-visible">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#A9C25D] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Regional Presence</span>
          <h2 className="text-3xl md:text-4xl text-[#2F4F3E]" style={{ fontFamily: 'var(--font-heading)' }}>
            States We Have Worked In
          </h2>
          <div className="w-16 h-1 bg-[#A9C25D] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 relative">
          {statesData.map((state) => (
            <div key={state.abbr} className="relative">
              {/* State Card */}
              <motion.div
                onClick={() => setActiveState(activeState === state.abbr ? null : state.abbr)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`flex items-center gap-4 bg-white px-8 py-6 rounded-2xl shadow-lg border cursor-pointer transition-all duration-300 group min-w-[280px] ${
                  activeState === state.abbr ? 'border-[#A9C25D] ring-2 ring-[#A9C25D]/10 shadow-2xl' : 'border-[#2F4F3E]/10'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  activeState === state.abbr ? 'bg-[#A9C25D]' : 'bg-[#A9C25D]/10 group-hover:bg-[#A9C25D]'
                }`}>
                  <span className={`font-extrabold text-xl transition-colors duration-300 ${
                    activeState === state.abbr ? 'text-white' : 'text-[#A9C25D] group-hover:text-white'
                  }`}>{state.abbr}</span>
                </div>
                <div className="text-left">
                  <span className="block text-[10px] font-bold text-[#A9C25D] uppercase tracking-widest mb-0.5">{state.subtitle}</span>
                  <span className="font-bold text-[#2F4F3E] text-2xl">{state.name}</span>
                </div>
              </motion.div>

              {/* Collapsible Content */}
              <AnimatePresence>
                {activeState === state.abbr && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="absolute top-full mt-6 left-1/2 -translate-x-1/2 z-[100] w-[320px] md:w-[450px] pointer-events-auto"
                  >
                    {/* Arrow Indicator */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[6px] w-4 h-4 bg-[#F2F6EF] rotate-45 z-0 border-t border-l border-[#2F4F3E]/5"></div>
                    
                    {/* Shadow Layer */}
                    <div className="absolute inset-0 bg-[#2F4F3E]/15 blur-3xl rounded-3xl -z-10 translate-y-6"></div>

                    {/* Content Card */}
                    <div className="bg-[#F2F6EF] text-[#2F4F3E] rounded-2xl overflow-hidden border border-[#2F4F3E]/10 shadow-2xl relative">
                      <div className="h-2 w-full bg-[#A9C25D]"></div>
                      <div className="p-7 text-left">
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A9C25D] mb-6 flex items-center gap-3">
                          Clients
                          <div className="flex-1 h-[1px] bg-[#2F4F3E]/10"></div>
                        </h3>
                        
                        <div className="space-y-6">
                          {state.clients.map((client, i) => (
                            <div key={i} className={i !== 0 ? 'pt-5 border-t border-[#2F4F3E]/10' : ''}>
                              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#2F4F3E]/60 mb-2 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#A9C25D]"></div>
                                {client.name}
                              </h4>
                              <p className="text-[14.5px] text-[#2F4F3E]/85 leading-relaxed font-medium">
                                {client.detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Informational Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-sm text-[#2F4F3E]/50 font-medium"
        >
          Click on a state to explore our regional impact and partnerships
        </motion.p>
      </div>
    </section>
  );
};
