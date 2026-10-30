import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({ title, subtitle, center = false }: SectionTitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{ textAlign: center ? 'center' : 'right', marginBottom: 'var(--space-3xl)' }}
    >
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="section-subtitle" style={{ margin: center ? '0 auto' : undefined }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
