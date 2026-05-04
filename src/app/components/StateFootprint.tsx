import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export const StateFootprint = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 bg-[#F8FAF9] border-t border-[#2F4F3E]/5 relative z-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-[#A9C25D] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Regional Presence</span>
          <h2 className="text-3xl md:text-4xl text-[#2F4F3E]" style={{ fontFamily: 'var(--font-heading)' }}>
            States We Have Worked In
          </h2>
          <div className="w-16 h-1 bg-[#A9C25D] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="relative inline-block">
          {/* Main State Card */}
          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 bg-white px-10 py-6 rounded-2xl shadow-lg border border-[#2F4F3E]/10 cursor-pointer hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-[#A9C25D]/10 rounded-full flex items-center justify-center group-hover:bg-[#A9C25D] transition-colors duration-300">
              <span className="font-extrabold text-[#A9C25D] text-xl group-hover:text-white">PA</span>
            </div>
            <div className="text-left">
              <span className="block text-xs font-bold text-[#A9C25D] uppercase tracking-wider mb-0.5">Primary Footprint</span>
              <span className="font-bold text-[#2F4F3E] text-2xl md:text-3xl">Pennsylvania</span>
            </div>
          </motion.div>

          {/* Dropdown/Popover Explanation */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="absolute top-full mt-4 left-1/2 -translate-x-1/2 z-[100] w-[320px] md:w-[450px] pointer-events-auto"
              >
                {/* Transparent bridge to prevent hover glitch */}
                <div className="absolute top-[-20px] left-0 w-full h-6"></div>
                
                {/* Shadow Layer */}
                <div className="absolute inset-0 bg-[#2F4F3E]/15 blur-3xl rounded-3xl -z-10 translate-y-6"></div>

                {/* Content Card */}
                <div className="bg-[#F2F6EF] text-[#2F4F3E] rounded-2xl overflow-hidden border border-[#2F4F3E]/10 shadow-2xl relative">
                  <div className="h-2 w-full bg-[#A9C25D]"></div>
                  <div className="p-7 text-left">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-heading)' }}>
                      Strategic Impact in PA
                      <div className="flex-1 h-[1px] bg-[#2F4F3E]/10"></div>
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="group/item">
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#A9C25D] mb-2 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#A9C25D]"></div>
                          MDS Consulting
                        </h4>
                        <p className="text-[14.5px] text-[#2F4F3E]/85 leading-relaxed font-medium">
                          Driving operational excellence through tailored business diagnostics, leadership alignment, and actionable execution roadmaps for state-wide impact.
                        </p>
                      </div>
                      
                      <div className="pt-5 border-t border-[#2F4F3E]/10 group/item">
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#2F4F3E]/60 mb-2 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#2F4F3E]/40"></div>
                          DHS ERP Modernization
                        </h4>
                        <p className="text-[14.5px] text-[#2F4F3E]/85 leading-relaxed font-medium">
                          Spearheading complex digital transformations, including full-cycle analysis, PI planning, and RTM management for high-stakes ERP systems.
                        </p>
                      </div>
                      
                      <div className="pt-5 border-t border-[#2F4F3E]/10 group/item">
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#A9C25D] mb-2 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#A9C25D]"></div>
                          DOT Modernization
                        </h4>
                        <p className="text-[14.5px] text-[#2F4F3E]/85 leading-relaxed font-medium">
                          Modernizing transportation infrastructure through expert tech advisory, traffic management systems, and data-informed logistics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Informational Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-sm text-[#2F4F3E]/50 font-medium"
        >
          Hover over our primary state to explore specific case studies
        </motion.p>
      </div>
    </section>
  );
};
