import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { siteConfig, reviews } from '../data/siteData';

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="reviews-section section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}
        >
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            ماذا يقول عملاؤنا عن مشتل الرائد؟
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <span style={{ color: 'var(--color-light-text)', fontSize: 'var(--font-size-sm)' }}>
              تقييمات عملائنا على Google
            </span>
          </div>
        </motion.div>

        {reviews.length > 0 ? (
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="review-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <p className="review-text">"{review.text}"</p>
                <div className="review-author">{review.author}</div>
                <div className="review-date">{review.date}</div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: 'center',
              padding: 'var(--space-3xl)',
              background: 'var(--color-white)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '1rem' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <p style={{ color: 'var(--color-light-text)', fontSize: 'var(--font-size-lg)', marginBottom: '0.5rem' }}>
              نفتخر بثقة عملائنا
            </p>
            <p style={{ color: 'var(--color-light-text)', fontSize: 'var(--font-size-sm)' }}>
              يمكنك الاطلاع على تقييمات عملائنا الحقيقية على Google Maps
            </p>
          </motion.div>
        )}

        <motion.div
          className="reviews-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a
            href={siteConfig.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <ExternalLink size={16} />
            شاهد جميع التقييمات على Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
