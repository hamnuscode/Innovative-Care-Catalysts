import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

function Counter({ target, duration = 2, suffix = '' }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target); // Ensure we end on exact target
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function CircularProgress({ percentage, duration = 2 }: { percentage: number; duration?: number }) {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const animProgress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      setProgress(animProgress * percentage);

      if (animProgress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, percentage, duration]);

  const circumference = 2 * Math.PI * 70;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className="relative w-48 h-48">
      <svg className="w-full h-full transform -rotate-90">
        {/* Background circle */}
        <circle
          cx="96"
          cy="96"
          r="70"
          stroke="#e5e7eb"
          strokeWidth="12"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx="96"
          cy="96"
          r="70"
          stroke="#A9C25D"
          strokeWidth="12"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-5xl text-[#2F4F3E]" style={{ fontFamily: 'var(--font-heading)' }}>
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}

export function OurExpertise() {
  const circularStats = [
    {
      percentage: 98,
      label: 'Client Retention',
    },
    {
      percentage: 95,
      label: 'Project Success Rate',
    },
    {
      percentage: 40,
      label: 'Higher Efficiency than Traditional Consulting',
    },
  ];

  return (
    <section className="relative py-12 bg-[#F8FAF9] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Section Header - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <p className="text-[#A9C25D] text-sm uppercase tracking-wider mb-3">
              Our Company at a Glance
            </p>
            <h2
              className="text-3xl md:text-4xl text-[#2F4F3E] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              We Lead Organizations to Success on a{' '}
              <span className="text-[#A9C25D]">Global Scale</span>
            </h2>
            <p className="text-[#2F4F3E]/70 leading-relaxed">
              Decades of proven expertise driving transformational change across the healthcare landscape.
            </p>
          </motion.div>

          {/* Stats - Right Side */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            {/* Circular Progress Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {circularStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  <CircularProgress percentage={stat.percentage} duration={2.5} />
                  <p className="mt-3 text-[#2F4F3E]/80 text-sm leading-relaxed">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}