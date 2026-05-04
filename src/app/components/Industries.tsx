import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Heart, ShoppingCart, Sprout, DollarSign, Truck, Coffee } from 'lucide-react';

export function Industries() {
  const industries = [
    { name: 'Healthcare', icon: Heart, description: 'Patient-centered care delivery' },
    { name: 'Retail', icon: ShoppingCart, description: 'Customer experience excellence' },
    { name: 'Farming', icon: Sprout, description: 'Sustainable operations' },
    { name: 'Finance', icon: DollarSign, description: 'Digital transformation' },
    { name: 'Transportation', icon: Truck, description: 'Logistics optimization' },
    { name: 'Food & Beverages', icon: Coffee, description: 'Supply chain efficiency' },
  ];

  return (
    <section className="py-20 bg-[#F5F7F6] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl text-[#2F4F3E] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Industries We Serve
          </h2>
          <p className="text-lg text-[#2F4F3E]/70 max-w-2xl mx-auto">
            Deep expertise across diverse sectors
          </p>
        </motion.div>
      </div>

      {/* Infinite Loop Carousel */}
      <div className="relative">
        <div className="flex animate-scroll">
          {/* Duplicate for seamless loop */}
          {[...industries, ...industries, ...industries].map((industry, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 mx-4"
            >
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#2F4F3E]/10 group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="bg-gradient-to-br from-[#A9C25D] to-[#8fb044] p-4 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-2xl text-[#2F4F3E] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {industry.name}
                </h3>
                <p className="text-[#2F4F3E]/70">{industry.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Skinny Banner Below */}
      <div className="mt-12 bg-gradient-to-r from-[#2F4F3E] via-[#3d6350] to-[#2F4F3E] py-4 overflow-hidden">
        <div className="flex animate-scroll-fast">
          {[...Array(3)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex flex-shrink-0">
              <span className="text-white/90 px-8 whitespace-nowrap">
                Proven results across 100+ organizations
              </span>
              <span className="text-[#A9C25D] px-8 whitespace-nowrap">•</span>
              <span className="text-white/90 px-8 whitespace-nowrap">
                20+ years of combined expertise
              </span>
              <span className="text-[#A9C25D] px-8 whitespace-nowrap">•</span>
              <span className="text-white/90 px-8 whitespace-nowrap">
                Tailored solutions for every industry
              </span>
              <span className="text-[#A9C25D] px-8 whitespace-nowrap">•</span>
              <span className="text-white/90 px-8 whitespace-nowrap">
                Strategic partnerships that deliver
              </span>
              <span className="text-[#A9C25D] px-8 whitespace-nowrap">•</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        @keyframes scrollFast {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll-fast {
          animation: scrollFast 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}