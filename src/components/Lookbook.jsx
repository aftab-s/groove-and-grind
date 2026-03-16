import { useRef } from 'react';
import { motion } from 'framer-motion';
import './Lookbook.css';

const slides = [
  {
    tag: 'Botanical Brew',
    title: 'Sunlit Atrium',
    desc: 'A sleek acrylic pour-over station bathed in soft, natural botanical light.',
    image: '/images/lookbook_1.png',
  },
  {
    tag: 'Golden Hour Roast',
    title: 'Amber Light',
    desc: 'Warm sunlight catching premium, ethically sourced coffee beans.',
    image: '/images/lookbook_2.png',
  },
  {
    tag: 'Crystal Clear',
    title: 'Luminous Extraction',
    desc: 'Flawless espresso dripping slowly into refined, minimalist glassware.',
    image: '/images/lookbook_3.png',
  },
  {
    tag: 'Morning Symphony',
    title: 'Airy Daybreak',
    desc: 'A bright, clean morning scene scored by a softly spinning vinyl record.',
    image: '/images/lookbook_4.png',
  },
  {
    tag: 'Vault Selection',
    title: 'Premium Reserves',
    desc: 'Single-origin matte black & gold bags resting neatly on a frosted shelf.',
    image: '/images/lookbook_5.png',
  },
  {
    tag: 'Minimalist Space',
    title: 'The Tasting Bar',
    desc: 'Clean lines, natural light wood, and high-end analog audio gear.',
    image: '/images/lookbook_6.png',
  },
];

const marqueeWords = [
  'High-Fidelity', 'Sunlit Brew', 'Groove & Grind', 'Crystal Extraction',
  'Single Origin', 'The Master Mix', 'Boutique Coffee', 'Airy Aesthetics',
];

export default function Lookbook() {
  const constraintRef = useRef(null);

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <motion.div
          className="experience-header"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            The Experience
          </div>
          <h2 className="section-heading">
            Two <span className="italic-accent">Sides</span> of the Groove
          </h2>
          <p className="experience-subtitle">
            From the warm glow of a mid-century lounge to the electric pulse
            of a neon-lit espresso bar.
          </p>
        </motion.div>
      </div>

      <motion.div className="experience-carousel" ref={constraintRef}>
        <motion.div
          className="experience-track"
          drag="x"
          dragConstraints={constraintRef}
          dragElastic={0.08}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
        >
          {slides.map((s, i) => (
            <motion.div
              key={i}
              className="experience-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <img className="experience-card-img" src={s.image} alt={s.title} loading="lazy" />
              <div className="experience-card-body">
                <div className="experience-card-tag">{s.tag}</div>
                <div className="experience-card-title">{s.title}</div>
                <div className="experience-card-desc">{s.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="container">
        <motion.div
          className="experience-hint"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          ← Drag to explore →
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="marquee-strip">
        <div className="marquee-inner">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span className="marquee-item" key={i}>
              <span className="marquee-dot" />
              {w}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
