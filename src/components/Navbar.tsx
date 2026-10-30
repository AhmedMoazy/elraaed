import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';
import { navLinks, siteConfig } from '../data/siteData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <nav className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              <div className="navbar-logo-icon">
                <Leaf size={22} />
              </div>
              <span>{siteConfig.businessName}</span>
            </Link>

            <div className="navbar-links">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary navbar-cta desktop"
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
              >
                تواصل معنا
              </a>
              <button
                className="navbar-toggle"
                onClick={() => setIsMobileOpen(true)}
                aria-label="فتح القائمة"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="mobile-menu open"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <div className="mobile-menu-header">
              <Link to="/" className="navbar-logo">
                <div className="navbar-logo-icon">
                  <Leaf size={22} />
                </div>
                <span>{siteConfig.businessName}</span>
              </Link>
              <button
                className="mobile-menu-close"
                onClick={() => setIsMobileOpen(false)}
                aria-label="إغلاق القائمة"
              >
                <X size={28} />
              </button>
            </div>
            <div className="mobile-menu-links">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link to={link.path} className="mobile-menu-link">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                style={{ marginTop: '1rem' }}
              >
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  تواصل عبر واتساب
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
