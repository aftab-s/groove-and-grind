import { motion } from 'framer-motion';
import './BentoGrid.css';

const blends = [
  {
    num: '01',
    eyebrow: 'Signature Drop',
    name: 'Morning Blossom',
    origin: 'Single Origin · Ethiopia Yirgacheffe',
    desc: 'Bright, floral, and utterly transcendent. A light-roast masterpiece with delicate notes of jasmine, white peach, and wild honey — like walking through a sunlit botanical garden.',
    image: '/images/blend-1-floral.png',
    specs: [
      { label: 'Altitude', value: '2,200m' },
      { label: 'Process', value: 'Washed' },
      { label: 'Roast', value: 'Light' },
      { label: 'Notes', value: 'Jasmine · Peach' },
    ],
    tags: ['Single Origin', 'Floral', 'Specialty Grade'],
  },
  {
    num: '02',
    eyebrow: 'Golden Hour Collection',
    name: 'Sunlit Canopy',
    origin: 'Single Origin · Colombia Huila',
    desc: 'Warm, inviting, and brilliantly balanced. Sunkissed notes of golden caramel, sweet citrus, and toasted almond that linger perfectly on the palate.',
    image: '/images/blend-2-sunlit.png',
    specs: [
      { label: 'Altitude', value: '1,800m' },
      { label: 'Process', value: 'Honey' },
      { label: 'Roast', value: 'Medium-Light' },
      { label: 'Notes', value: 'Caramel · Citrus' },
    ],
    tags: ['Single Origin', 'Bright', 'Balanced'],
    reversed: true,
  },
  {
    num: '03',
    eyebrow: 'Reserve Edition',
    name: "Crystal Clear",
    origin: 'Seasonal · Micro-Lot',
    desc: 'A rare, delicate profile — only 200 bags released. Extremely clean and sweet with an almost tea-like clarity, featuring notes of honeysuckle and lemongrass.',
    image: '/images/blend-3-crystal.png',
    specs: [
      { label: 'Edition', value: 'Spring 2026' },
      { label: 'Bags', value: '200 Only' },
      { label: 'Roast', value: 'Light-Slow' },
      { label: 'Notes', value: 'Honeysuckle · Lemongrass' },
    ],
    tags: ['Limited Edition', 'Micro-Lot', 'Seasonal'],
  },
];

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

function BlendCard({ blend }) {
  return (
    <motion.div
      className={`blend-card ${blend.reversed ? 'reversed' : ''}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="blend-card-visual">
        <img className="blend-card-img" src={blend.image} alt={blend.name} />
        <div className="blend-card-visual-glow" />
      </div>

      <div className="blend-card-content">
        <span className="blend-card-number">{blend.num}</span>
        <div className="blend-card-eyebrow">{blend.eyebrow}</div>
        <h3 className="blend-card-name">{blend.name}</h3>
        <div className="blend-card-origin">{blend.origin}</div>
        <p className="blend-card-desc">{blend.desc}</p>

        <div className="blend-specs">
          {blend.specs.map(s => (
            <div className="blend-spec" key={s.label}>
              <span className="blend-spec-label">{s.label}</span>
              <span className="blend-spec-value">{s.value}</span>
            </div>
          ))}
        </div>

        <div className="blend-tags">
          {blend.tags.map(t => (
            <span className="blend-tag" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function BentoGrid() {
  return (
    <section className="blends-section" id="products">
      <div className="container">
        <motion.div
          className="blends-header"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="blends-header-left">
            <div className="section-eyebrow">Our Blends</div>
            <h2 className="section-heading">
              The <span className="italic-accent">Collection</span>
            </h2>
            <p className="blends-desc">
              Each blend is a carefully tuned track — a unique flavor profile
              mastered for your palate.
            </p>
          </div>
          <div className="blends-header-right">
            <a href="#products" className="blends-view-all">
              View All Blends →
            </a>
          </div>
        </motion.div>

        <div className="blends-row">
          {blends.map(b => <BlendCard key={b.num} blend={b} />)}
        </div>
      </div>
    </section>
  );
}
