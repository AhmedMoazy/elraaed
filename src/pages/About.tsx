import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf, Heart, Award, Users } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const values = [
    { icon: Leaf, title: 'الجودة', description: 'نختار لكم أجود أنواع النباتات بعناية فائقة' },
    { icon: Heart, title: 'الشغف', description: 'نحب ما نقدمه ونسعى لإرضاء عملائنا' },
    { icon: Award, title: 'الاحترافية', description: 'فريق متخصص ذو خبرة في عالم النباتات' },
    { icon: Users, title: 'خدمة العملاء', description: 'نضع رضا العميل في مقدمة أولوياتنا' },
  ];

  return (
    <main>
      <div className="page-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            من نحن
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            تعرفوا على مشتل الرائد ورسالتنا في نشر الجمال الطبيعي
          </motion.p>
        </div>
      </div>

      <section className="section" ref={ref}>
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <img src="https://image.qwenlm.ai/generated-images/4887b764-3338-4c58-8367-a32bdc5760df/_result.png" alt="مشتل الرائد" loading="lazy" />
            </motion.div>
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="section-title">قصتنا</h2>
              <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-lg)' }}>
                مشتل الرائد هو وجهة محبي النباتات والطبيعة. نسعى لتقديم أفضل تجربة لعملائنا
                من خلال توفير تشكيلة واسعة ومتنوعة من النباتات والأشجار والشجيرات.
              </p>
              <p style={{ marginBottom: 'var(--space-lg)' }}>
                نؤمن بأن كل مساحة تستحق أن تُزيَّن بلمسة خضراء طبيعية، ولذلك نعمل جاهدين
                على توفير النباتات المناسبة لكل بيئة ومساحة، مع تقديم النصائح والاستشارات
                المتخصصة لضمان نجاح تجربتكم مع النباتات.
              </p>
              <p>
                فريقنا المتخصص مستعد دائماً لمساعدتكم في اختيار النباتات المثالية وتقديم
                خدمات تنسيق الحدائق بأعلى معايير الجودة.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}
          >
            <h2 className="section-title" style={{ textAlign: 'center' }}>قيمنا</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              المبادئ التي نسير عليها في خدمة عملائنا
            </p>
          </motion.div>

          <div className="services-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="service-icon">
                  <value.icon size={28} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
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
              يسعدنا تواصلكم معنا
            </h2>
            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-light-text)', marginBottom: 'var(--space-xl)', maxWidth: '500px', margin: '0 auto var(--space-xl)' }}>
              لا تترددوا في التواصل معنا لأي استفسار أو طلب
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
                واتساب
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
