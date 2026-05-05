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

  const activeData = statesData.find(s => s.abbr === activeState);

  return (
    <section className="py-24 bg-[#F8FAF9] border-t border-[#2F4F3E]/5 relative z-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#A9C25D] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Regional Presence</span>
          <h2 className="text-3xl md:text-4xl text-[#2F4F3E]" style={{ fontFamily: 'var(--font-heading)' }}>
            States We Have Worked In
          </h2>
          <div className="w-16 h-1 bg-[#A9C25D] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* State Selection Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {statesData.map((state) => (
            <motion.div
              key={state.abbr}
              onClick={() => setActiveState(activeState === state.abbr ? null : state.abbr)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`flex items-center gap-4 bg-white px-8 py-6 rounded-2xl shadow-lg border cursor-pointer transition-all duration-300 group min-w-[280px] ${
                activeState === state.abbr ? 'border-[#A9C25D] ring-2 ring-[#A9C25D]/10 shadow-xl' : 'border-[#2F4F3E]/10'
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
          ))}
        </div>

        {/* Integrated Details Section */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeState && activeData && (
              <motion.div
                key={activeState}
                initial={{ opacity: 0, height: 0, y: 20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="bg-white rounded-3xl border border-[#2F4F3E]/10 shadow-xl overflow-hidden mb-12">
                  <div className="h-2 w-full bg-[#A9C25D]"></div>
                  <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-[#2F4F3E]/10">
                      <div>
                        <span className="text-[#A9C25D] font-bold tracking-[0.2em] uppercase text-[10px] mb-2 block">Case Study</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#2F4F3E]" style={{ fontFamily: 'var(--font-heading)' }}>
                          {activeData.name} Impact
                        </h3>
                      </div>
                      <div className="bg-[#F8FAF9] px-6 py-3 rounded-xl border border-[#2F4F3E]/5">
                        <span className="text-[#2F4F3E]/60 text-sm font-medium italic">"{activeData.subtitle}"</span>
                      </div>
                    </div>

                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A9C25D] mb-8 flex items-center gap-3">
                      Key Clients & Projects
                      <div className="flex-1 h-[1px] bg-[#2F4F3E]/10"></div>
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                      {activeData.clients.map((client, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="group/item"
                        >
                          <h5 className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#2F4F3E] mb-3 flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#A9C25D]"></div>
                            {client.name}
                          </h5>
                          <p className="text-[15px] text-[#2F4F3E]/80 leading-relaxed font-medium pl-5 border-l-2 border-[#A9C25D]/20 group-hover/item:border-[#A9C25D] transition-colors duration-300">
                            {client.detail}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Informational Subtext */}
        {!activeState && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-[#2F4F3E]/50 font-medium"
          >
            Click on a state to explore our regional impact and partnerships
          </motion.p>
        )}
      </div>
    </section>
  );
};
