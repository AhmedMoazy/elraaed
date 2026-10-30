import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Statistics from '../components/Statistics';
import Reviews from '../components/Reviews';
import Gallery from '../components/Gallery';
import MapSection from '../components/MapSection';
import { plantCategories, services, siteConfig } from '../data/siteData';
import * as Icons from 'lucide-react';

export default function Home() {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: '-100px' });
  const categoriesRef = useRef(null);
  const categoriesInView = useInView(categoriesRef, { once: true, margin: '-50px' });
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: '-50px' });

  return (
    <main>
      <Hero />

      {/* About Section */}
      <section className="about-section section" ref={aboutRef}>
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <img src="https://image.qwenlm.ai/generated-images/4887b764-3338-4c58-8367-a32bdc5760df/_result.png" alt="مشتل الرائد - مساحات خضراء جميلة" loading="lazy" />
            </motion.div>
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="section-title">عن مشتل الرائد</h2>
              <p>
                مشتل الرائد هو وجهتكم المثالية لعالم النباتات والأشجار. نقدم لكم تشكيلة واسعة ومتنوعة
                من أجود أنواع النباتات المحلية والمستوردة، مع خدمات احترافية في تنسيق الحدائق واختيار
                النباتات المناسبة لمساحاتكم.
              </p>
              <p>
                نحرص على توفير بيئة مثالية للنباتات ونقدم استشارات متخصصة لمساعدتكم في اختيار
                النباتات الأنسب لاحتياجاتكم.
              </p>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                اعرف المزيد
                <ArrowLeft size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plant Categories */}
      <section className="categories-section section" ref={categoriesRef}>
        <div className="container">
          <SectionTitle
            title="أقسام النباتات"
            subtitle="اكتشفوا مجموعتنا المتنوعة من النباتات والأشجار المناسبة لجميع المساحات"
            center
          />
          <div className="categories-grid">
            {plantCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="category-card"
                initial={{ opacity: 0, y: 40 }}
                animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <img src={category.image} alt={category.title} loading="lazy" />
                <div className="category-overlay">
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-desc">{category.description}</p>
                  <Link to="/plants" className="category-btn">
                    استعرض المزيد
                    <ArrowLeft size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section section" ref={servicesRef}>
        <div className="container">
          <SectionTitle
            title="خدماتنا"
            subtitle="نقدم مجموعة متكاملة من الخدمات لتلبية جميع احتياجاتكم النباتية"
            center
          />
          <div className="services-grid">
            {services.map((service, index) => {
              const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{size?: number}>>)[service.icon] || Icons.Leaf;
              return (
                <motion.div
                  key={service.id}
                  className="service-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
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
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link to="/services" className="btn btn-secondary">
              عرض جميع الخدمات
              <ArrowLeft size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <Statistics />

      {/* Gallery */}
      <Gallery />

      {/* Reviews */}
      <Reviews />

      {/* Map */}
      <MapSection />

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--color-cream)', textAlign: 'center' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              جاهزون لخدمتكم
            </h2>
            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-light-text)', marginBottom: 'var(--space-xl)', maxWidth: '500px', margin: '0 auto var(--space-xl)' }}>
              تواصلوا معنا الآن عبر واتساب للاستفسار عن النباتات والخدمات المتاحة
            </p>
            <a
              href={`${siteConfig.whatsappLink}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              تواصل عبر واتساب
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
