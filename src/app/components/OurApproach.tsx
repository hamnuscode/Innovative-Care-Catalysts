import { motion } from 'motion/react';

export function OurApproach() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#F5F7F6] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#A9C25D] text-sm uppercase tracking-wider mb-2">
            Our Methodology
          </p>
          <h2
            className="text-3xl md:text-4xl text-[#2F4F3E] mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our <span className="text-[#A9C25D]">Approach</span>
          </h2>
          <p className="text-base text-[#2F4F3E]/80 max-w-4xl mx-auto leading-relaxed">
            By aligning people, processes, and technology, we help organizations reduce inefficiencies, 
            minimize compliance risks, and achieve meaningful cost savings while maintaining high standards of care.
          </p>
        </motion.div>

        {/* Visual Formula */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8"
          >
            {/* People */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative"
            >
              <div className="bg-white/80 backdrop-blur-md border-2 border-[#A9C25D]/30 rounded-2xl p-8 hover:border-[#A9C25D] transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#A9C25D] to-[#8fb044] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl text-[#2F4F3E]" style={{ fontFamily: 'var(--font-heading)' }}>
                    People
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Plus Sign */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-4xl text-[#A9C25D]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              +
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative"
            >
              <div className="bg-white/80 backdrop-blur-md border-2 border-[#A9C25D]/30 rounded-2xl p-8 hover:border-[#A9C25D] transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2F4F3E] to-[#3d6350] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl text-[#2F4F3E]" style={{ fontFamily: 'var(--font-heading)' }}>
                    Process
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Plus Sign */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-4xl text-[#A9C25D]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              +
            </motion.div>

            {/* Technology */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative"
            >
              <div className="bg-white/80 backdrop-blur-md border-2 border-[#A9C25D]/30 rounded-2xl p-8 hover:border-[#A9C25D] transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#A9C25D] to-[#8fb044] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl text-[#2F4F3E]" style={{ fontFamily: 'var(--font-heading)' }}>
                    Technology
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-4xl text-[#A9C25D]"
            >
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.div>

            {/* Outcomes */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-[#2F4F3E] to-[#3d6350] border-2 border-[#2F4F3E] rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-[#A9C25D] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#2F4F3E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                    Outcomes
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}