import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { statistics } from '../data/siteData';

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>{count.toLocaleString('ar-SA')}{suffix}</span>
  );
}

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="stats-section section" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="stat-number">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} inView={isInView} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
