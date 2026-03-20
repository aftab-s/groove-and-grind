import { motion } from 'framer-motion';
import './BentoGrid.css';

const blends = [
  {
    num: '01',
    eyebrow: 'Dawn Garden Roast',
    name: 'Petal Dawn',
    origin: 'Single Origin · Ethiopia Yirgacheffe',
    desc: 'A light and floral cup that opens like morning sunlight through leaves. Jasmine, white peach, and wild honey notes create a soft, graceful finish.',
    image: '/images/blend-1-floral.png',
    specs: [
      { label: 'Altitude', value: '2,200m' },
      { label: 'Process', value: 'Washed' },
      { label: 'Roast', value: 'Light' },
      { label: 'Notes', value: 'Jasmine · White Peach' },
    ],
    tags: ['Single Origin', 'Floral', 'Morning Brew'],
  },
  {
    num: '02',
    eyebrow: 'Sunroom Collection',
    name: 'Bloom Canopy',
    origin: 'Single Origin · Colombia Huila',
    desc: 'Balanced and comforting, with golden caramel, sweet citrus, and toasted almond. Built for calm afternoons, open windows, and a record spinning in the background.',
    image: '/images/blend-2-sunlit.png',
    specs: [
      { label: 'Altitude', value: '1,800m' },
      { label: 'Process', value: 'Honey' },
      { label: 'Roast', value: 'Medium-Light' },
      { label: 'Notes', value: 'Caramel · Sweet Citrus' },
    ],
    tags: ['Single Origin', 'Warm', 'Balanced'],
    reversed: true,
  },
  {
    num: '03',
    eyebrow: 'Quiet Reserve',
    name: 'Still Bloom',
    origin: 'Seasonal · Micro-Lot',
    desc: 'A rare and delicate micro-lot with tea-like clarity. Honeysuckle and lemongrass bring a clean, whisper-light sweetness to each cup.',
    image: '/images/blend-3-crystal.png',
    specs: [
      { label: 'Edition', value: 'Spring 2026' },
      { label: 'Bags', value: '200 Limited' },
      { label: 'Roast', value: 'Light-Slow' },
      { label: 'Notes', value: 'Honeysuckle · Lemongrass' },
    ],
    tags: ['Limited Edition', 'Micro-Lot', 'Delicate'],
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
            <div className="section-eyebrow">Floral Coffees</div>
            <h2 className="section-heading">
              A Peaceful <span className="italic-accent">Collection</span>
            </h2>
            <p className="blends-desc">
              Each roast is composed like a gentle song: floral aromatics,
              soft sweetness, and a calm finish made for slow mornings.
            </p>
          </div>
          <div className="blends-header-right">
            <a href="#products" className="blends-view-all">
              See Full Coffee List →
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
