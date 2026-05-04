import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Users, Target, Award } from 'lucide-react';

function Counter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export function ImpactMetrics() {
  const metrics = [
    {
      icon: TrendingUp,
      value: 40,
      suffix: '%',
      label: 'Average Efficiency Gain',
      color: '#A9C25D',
    },
    {
      icon: Users,
      value: 100,
      suffix: '+',
      label: 'Organizations Transformed',
      color: '#2F4F3E',
    },
    {
      icon: Target,
      value: 95,
      suffix: '%',
      label: 'Client Satisfaction',
      color: '#A9C25D',
    },
    {
      icon: Award,
      value: 20,
      suffix: '+',
      label: 'Years Combined Expertise',
      color: '#2F4F3E',
    },
  ];

  return (
    null
  );
}