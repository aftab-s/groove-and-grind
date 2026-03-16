import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <span className="brand-text">Groove<span className="brand-amp">&</span>Grind</span>
            </div>
            <p className="footer-tagline">
              The Fidelity of Flavor. Boutique coffee roastery tuned to
              perfection since 2026.
            </p>
          </div>
          <div className="footer-nav-cols">
            <div className="footer-nav-col">
              <h4>Navigate</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#products">Our Blends</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#record-club">The Club</a></li>
              </ul>
            </div>
            <div className="footer-nav-col">
              <h4>Connect</h4>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter / X</a></li>
                <li><a href="#">Spotify</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- Image Strip --- */}
        <div className="footer-image-strip">
          <img 
            src="/images/premium-coffee-field-bg.png" 
            alt="Coffee field texture" 
            className="footer-strip-bg"
          />
          <div className="footer-strip-overlay" />
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 Groove & Grind. All rights reserved.
          </span>
          <div className="footer-socials">
            <a href="#">IG</a>
            <a href="#">TW</a>
            <a href="#">SP</a>
          </div>
        </div>

        {/* --- Designer Signature --- */}
        <div className="footer-signature">
          Aftab
        </div>
      </div>
    </motion.footer>
  );
}
