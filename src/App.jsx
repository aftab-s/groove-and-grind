import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Lookbook from './components/Lookbook';
import Subscription from './components/Subscription';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="noise" />
      <div className="ambient-glow ambient-glow--1" />
      <div className="ambient-glow ambient-glow--2" />
      <Navbar />
      <main>
        <Hero />
        <div className="funky-divider" />
        <BentoGrid />
        <Lookbook />
        <Subscription />
      </main>
      <Footer />
    </>
  );
}
