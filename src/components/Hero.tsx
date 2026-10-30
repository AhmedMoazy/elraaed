import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteData';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img
          src="https://image.qwenlm.ai/generated-images/dab2ad86-3420-47e3-99ab-72c632b16f9a/_result.png"
          alt="مشتل الرائد - نباتات خضراء طبيعية"
          loading="eager"
        />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(8px)',
            padding: '0.5rem 1rem',
            borderRadius: 'var(--radius-full)',
            marginBottom: '1.5rem',
            color: 'rgba(255,255,255,0.9)',
            fontSize: 'var(--font-size-sm)',
            fontWeight: 500,
          }}>
            <Leaf size={16} />
            مشتل الرائد للنباتات والأشجار
          </div>
          <h1 className="hero-title">
            نمنح الطبيعة مساحة أجمل في حياتك
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <p className="hero-description">
            اكتشف عالم النباتات والأشجار والاختيارات الطبيعية التي تضيف الجمال والحياة إلى مساحاتك.
            نقدم لكم في مشتل الرائد أجود أنواع النباتات مع خدمات احترافية لتنسيق الحدائق.
          </p>
        </motion.div>
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <Link to="/plants" className="btn btn-primary">
            استكشف النباتات
            <ArrowLeft size={18} />
          </Link>
          <a
            href={`${siteConfig.whatsappLink}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageCircle size={18} />
            تواصل معنا عبر واتساب
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'rgba(255,255,255,0.6)',
            fontSize: 'var(--font-size-xs)',
          }}
        >
          <span>اكتشف المزيد</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ width: '2px', height: '24px', background: 'rgba(255,255,255,0.4)', borderRadius: '2px' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
