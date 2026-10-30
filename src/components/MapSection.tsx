import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Navigation, MapPin } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function MapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="map-section section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}
        >
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            يسعدنا زيارتكم في مشتل الرائد
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            زوروا معرضنا واستمتعوا بتشكيلة واسعة من أجمل النباتات والأشجار
          </p>
        </motion.div>

        <motion.div
          className="map-container"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.4!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMCJF!5e0!3m2!1sar!2ssa!4v1700000000000!5m2!1sar!2ssa"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع مشتل الرائد على الخريطة"
          />
        </motion.div>

        <motion.div
          className="map-buttons"
          style={{ justifyContent: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a
            href={siteConfig.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Navigation size={18} />
            احصل على الاتجاهات
          </a>
          <a
            href={siteConfig.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <MapPin size={18} />
            افتح الموقع على Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
}
