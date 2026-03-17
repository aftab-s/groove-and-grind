import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 25 });

  // Subtle parallax for the background image
  const bgY = useTransform(smooth, [0, 1], ['0%', '15%']);
  // Foreground card and copy move at a different rate for depth
  const cardY = useTransform(smooth, [0, 1], ['0%', '-8%']);
  const copyY = useTransform(smooth, [0, 1], ['0%', '-12%']);

  // Staggered reveal for typography
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="hero" id="hero" ref={ref}>
      
      {/* --- Vibrant Background Layer --- */}
      <div className="hero-bg-layer">
        <motion.img 
          src="/images/premium-coffee-field-bg.png" 
          alt="Premium coffee field" 
          className="hero-bg-image"
          style={{ y: bgY }}
        />
        <div className="hero-bg-overlay" />
      </div>

      {/* --- Foreground Content --- */}
      <motion.div
        className="hero-container"
        variants={stagger}
        initial="hidden"
        animate="show"
        style={{ y: cardY }}
      >
        
        <motion.h1 className="hero-title" variants={item} style={{ y: copyY }}>
          <span className="brand-text">Groove<span className="brand-amp">&</span>Grind</span>
        </motion.h1>

        <motion.p className="hero-sub" variants={item} style={{ y: copyY }}>
          Turn your mornings into masterpieces. Tuned to perfection. Every roast is a master mix — crafted with the warmth and precision of vintage analog audio.
        </motion.p>

        <motion.div className="hero-cta-row" variants={item}>
          <a href="#products" className="hero-cta-primary">
            Explore Blends
          </a>
          <a href="#record-club" className="hero-cta-secondary">
            Join the Club
          </a>
        </motion.div>

      </motion.div>

      {/* --- Scroll Indicator --- */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="scroll-pill">
          <motion.div
            className="scroll-dot"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <span className="scroll-label">Scroll</span>
      </motion.div>
    </section>
  );
}
