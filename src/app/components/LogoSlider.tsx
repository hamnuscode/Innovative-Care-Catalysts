import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const logos = [
  'Kaiser Permanente',
  'UnitedHealth',
  'Anthem',
  'Humana',
  'Cigna',
  'Aetna',
  'Blue Cross',
  'CVS Health',
  'Kaiser Permanente',
  'UnitedHealth',
  'Anthem',
  'Humana',
];

export function LogoSlider() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-16 bg-white border-y border-[#2F4F3E]/10">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl text-center text-[#2F4F3E] mb-12"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Trusted by Leading Organizations
        </motion.h3>

        <div className="relative overflow-hidden">
          <div
            className="flex gap-12 animate-scroll"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              animationPlayState: isHovered ? 'paused' : 'running',
            }}
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center min-w-[200px] h-24"
              >
                <span className="text-xl text-[#2F4F3E]/40 font-medium whitespace-nowrap">
                  {logo}
                </span>
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
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
