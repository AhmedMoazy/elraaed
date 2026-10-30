import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { plantCategories, siteConfig } from '../data/siteData';

export default function Plants() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <main>
      <div className="page-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            النباتات والمنتجات
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            اكتشفوا تشكيلتنا الواسعة من النباتات والأشجار المتنوعة
          </motion.p>
        </div>
      </div>

      <section className="section" ref={ref}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}
          >
            <h2 className="section-title" style={{ textAlign: 'center' }}>أقسام النباتات</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              نقدم لكم مجموعة متنوعة من النباتات لتناسب جميع الأذواق والمساحات
            </p>
          </motion.div>

          <div className="categories-grid">
            {plantCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="category-card"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <img src={category.image} alt={category.title} loading="lazy" />
                <div className="category-overlay">
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-desc">{category.description}</p>
                  <a
                    href={`${siteConfig.whatsappLink}?text=${encodeURIComponent(`السلام عليكم، أرغب في الاستفسار عن ${category.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="category-btn"
                  >
                    استفسر الآن
                    <ArrowLeft size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}
          >
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              لا تجد ما تبحث عنه؟
            </h2>
            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-light-text)', marginBottom: 'var(--space-xl)' }}>
              لدينا تشكيلة أكبر في المعرض. تواصلوا معنا وسنساعدكم في إيجاد النبات المناسب لكم
            </p>
            <a
              href={`${siteConfig.whatsappLink}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <MessageCircle size={18} />
              تواصل معنا عبر واتساب
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
