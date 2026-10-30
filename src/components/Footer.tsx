import { Link } from 'react-router-dom';
import { Leaf, Phone, MapPin } from 'lucide-react';
import { siteConfig, navLinks } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div className="navbar-logo-icon" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <Leaf size={22} />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>{siteConfig.businessName}</span>
            </div>
            <p>{siteConfig.description}</p>
          </div>

          <div>
            <h4 className="footer-title">روابط سريعة</h4>
            <div className="footer-links">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-title">تواصل معنا</h4>
            <div className="footer-links">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Phone size={14} />
                واتساب
              </a>
              <a
                href={siteConfig.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <MapPin size={14} />
                موقعنا على الخريطة
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">ساعات العمل</h4>
            <div className="footer-links">
              <span className="footer-link">السبت - الخميس</span>
              <span className="footer-link">8:00 ص - 10:00 م</span>
              <span className="footer-link" style={{ marginTop: '0.5rem' }}>الجمعة</span>
              <span className="footer-link">2:00 م - 10:00 م</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {siteConfig.businessName}. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
