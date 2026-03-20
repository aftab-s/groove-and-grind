import { useRef } from 'react';
import { motion } from 'framer-motion';
import './Lookbook.css';

const slides = [
  {
    tag: 'Flower Market Morning',
    title: 'Sunlit Atrium',
    desc: 'A quiet pour-over corner with soft light, blooming stems, and the scent of fresh coffee in the air.',
    image: '/images/lookbook_1.png',
  },
  {
    tag: 'Golden Hour Roast',
    title: 'Amber Light',
    desc: 'Warm afternoon light brushing across handpicked beans and linen-covered tables.',
    image: '/images/lookbook_2.png',
  },
  {
    tag: 'Quiet Extraction',
    title: 'Luminous Pour',
    desc: 'A slow, glowing espresso pull into clear glass, with nothing but calm around it.',
    image: '/images/lookbook_3.png',
  },
  {
    tag: 'Morning Symphony',
    title: 'Airy Daybreak',
    desc: 'Fresh blooms, open windows, and a soft vinyl melody accompanying the first cup.',
    image: '/images/lookbook_4.png',
  },
  {
    tag: 'Garden Reserve',
    title: 'Quiet Shelves',
    desc: 'Single-origin reserve bags resting beside pressed flowers and handwritten tasting cards.',
    image: '/images/lookbook_5.png',
  },
  {
    tag: 'Listening Bar',
    title: 'The Tasting Table',
    desc: 'Natural woods, low-volume jazz, and a brewing station designed for unhurried rituals.',
    image: '/images/lookbook_6.png',
  },
];

const marqueeWords = [
  'Slow Mornings', 'Floral Aroma', 'Soft Jazz', 'Garden Table',
  'Single Origin', 'Peaceful Ritual', 'Gentle Roast', 'Fresh Blooms',
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
            Quiet Rituals
          </div>
          <h2 className="section-heading">
            Moments of <span className="italic-accent">Calm</span>
          </h2>
          <p className="experience-subtitle">
            From flower-filled mornings to soft evening pours,
            every scene is designed to feel peaceful, warm, and musical.
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
          ← Drag gently to explore →
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
