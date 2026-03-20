import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#hero', label: 'Sanctuary' },
    { href: '#products', label: 'Floral Coffees' },
    { href: '#experience', label: 'Quiet Moments' },
    { href: '#record-club', label: 'Morning Circle' },
  ];

  return (
    <>
      <div className="navbar-wrapper">
        <motion.nav
          className={`navbar ${scrolled ? 'scrolled' : ''}`}
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="navbar-brand">
            <span className="brand-text">Groove<span className="brand-amp">&</span>Grind</span>
          </div>

          <ul className="navbar-links">
            {links.map(l => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>

          <a href="#record-club" className="nav-cta">Brew With Us</a>

          <button
            className={`nav-hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </motion.nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.08 }}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
