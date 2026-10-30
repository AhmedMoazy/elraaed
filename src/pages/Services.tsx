import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowLeft, Truck, LayoutGrid, Search, Sprout, Lightbulb } from 'lucide-react';
import { services, siteConfig } from '../data/siteData';

const iconMap: Record<string, any> = {
  Truck,
  LayoutGrid,
  Search,
  Sprout,
  Lightbulb,
};

export default function Services() {
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
            خدماتنا
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            خدمات متكاملة لتلبية جميع احتياجاتكم النباتية
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
            <h2 className="section-title" style={{ textAlign: 'center' }}>ماذا نقدم لكم؟</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              نقدم مجموعة متنوعة من الخدمات المتخصصة في عالم النباتات والحدائق
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Sprout;
              return (
                <motion.div
                  key={service.id}
                  className="service-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="service-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}
          >
            <h2 className="section-title" style={{ textAlign: 'center' }}>كيف نعمل؟</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-xl)' }}>
            {[
              { step: '١', title: 'التواصل', desc: 'تواصلوا معنا عبر واتساب أو زوروا معرضنا' },
              { step: '٢', title: 'الاستشارة', desc: 'نقدم لكم الاستشارة المناسبة لاختيار النباتات' },
              { step: '٣', title: 'التنفيذ', desc: 'ننفذ الخدمة بأعلى معايير الجودة والاحترافية' },
              { step: '٤', title: 'المتابعة', desc: 'نتابع معكم لضمان رضاكم وسلامة النباتات' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                style={{
                  background: 'var(--color-white)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-2xl)',
                  textAlign: 'center',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'var(--color-primary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-white)',
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: 700,
                  margin: '0 auto var(--space-lg)',
                }}>
                  {item.step}
                </div>
                <h3 style={{ marginBottom: 'var(--space-sm)' }}>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              تحتاج خدمة متخصصة؟
            </h2>
            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-light-text)', marginBottom: 'var(--space-xl)', maxWidth: '500px', margin: '0 auto var(--space-xl)' }}>
              تواصلوا معنا وسنقدم لكم أفضل الحلول لاحتياجاتكم
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                تواصل معنا
                <ArrowLeft size={18} />
              </Link>
              <a
                href={`${siteConfig.whatsappLink}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} />
                واتساب
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
