import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'الرجاء إدخال الاسم';
    if (!formData.phone.trim()) newErrors.phone = 'الرجاء إدخال رقم الجوال';
    if (!formData.inquiryType) newErrors.inquiryType = 'الرجاء اختيار نوع الاستفسار';
    if (!formData.message.trim()) newErrors.message = 'الرجاء كتابة تفاصيل الرسالة';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'الرجاء إدخال بريد إلكتروني صحيح';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build WhatsApp message from form data
    const inquiryTypes: Record<string, string> = {
      plants: 'استفسار عن النباتات',
      services: 'استفسار عن الخدمات',
      landscaping: 'طلب تنسيق حدائق',
      other: 'استفسار آخر',
    };

    const whatsappMsg = `السلام عليكم،
الاسم: ${formData.name}
رقم الجوال: ${formData.phone}
${formData.email ? `البريد الإلكتروني: ${formData.email}` : ''}
نوع الاستفسار: ${inquiryTypes[formData.inquiryType] || formData.inquiryType}
الرسالة: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <main>
      <div className="page-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            تواصل معنا
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            نسعد بتواصلكم واستفساراتكم
          </motion.p>
        </div>
      </div>

      <section className="contact-section section" ref={ref}>
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <motion.div
              className="contact-form"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h3 style={{ marginBottom: 'var(--space-xl)', color: 'var(--color-primary)' }}>
                أرسل لنا رسالة
              </h3>

              {submitted && (
                <div className="form-success">
                  ✓ تم إرسال رسالتك بنجاح عبر واتساب. سنتواصل معك في أقرب وقت.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">الاسم *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="أدخل اسمك الكامل"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">رقم الجوال *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    placeholder="05xxxxxxxx"
                    value={formData.phone}
                    onChange={handleChange}
                    dir="ltr"
                    style={{ textAlign: 'right' }}
                  />
                  {errors.phone && <span className="form-error">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">البريد الإلكتروني (اختياري)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    dir="ltr"
                    style={{ textAlign: 'right' }}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="inquiryType">نوع الاستفسار *</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    className="form-select"
                    value={formData.inquiryType}
                    onChange={handleChange}
                  >
                    <option value="">اختر نوع الاستفسار</option>
                    <option value="plants">استفسار عن النباتات</option>
                    <option value="services">استفسار عن الخدمات</option>
                    <option value="landscaping">طلب تنسيق حدائق</option>
                    <option value="other">استفسار آخر</option>
                  </select>
                  {errors.inquiryType && <span className="form-error">{errors.inquiryType}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">تفاصيل الرسالة *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="اكتب تفاصيل استفسارك هنا..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <Send size={18} />
                  إرسال عبر واتساب
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 style={{ marginBottom: 'var(--space-xl)', color: 'var(--color-primary)' }}>
                معلومات التواصل
              </h3>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MessageCircle size={22} />
                </div>
                <div className="contact-info-text">
                  <h4>واتساب</h4>
                  <a
                    href={`${siteConfig.whatsappLink}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--color-secondary)', fontWeight: 600 }}
                  >
                    +966 507 337 744
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={22} />
                </div>
                <div className="contact-info-text">
                  <h4>اتصل بنا</h4>
                  <p dir="ltr" style={{ textAlign: 'right' }}>+966 507 337 744</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={22} />
                </div>
                <div className="contact-info-text">
                  <h4>الموقع</h4>
                  <a
                    href={siteConfig.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    افتح الموقع على الخريطة
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Clock size={22} />
                </div>
                <div className="contact-info-text">
                  <h4>ساعات العمل</h4>
                  <p>السبت - الخميس: 8:00 ص - 10:00 م</p>
                  <p>الجمعة: 2:00 م - 10:00 م</p>
                </div>
              </div>

              <div style={{
                marginTop: 'var(--space-2xl)',
                padding: 'var(--space-xl)',
                background: 'var(--color-cream)',
                borderRadius: 'var(--radius-lg)',
              }}>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-dark-text)', marginBottom: 'var(--space-md)' }}>
                  <strong>طريقة التواصل الأسرع:</strong>
                </p>
                <a
                  href={`${siteConfig.whatsappLink}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <MessageCircle size={18} />
                  تواصل عبر واتساب
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
