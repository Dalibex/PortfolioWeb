import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { LenisProvider, useLenis } from './context/LenisContext';
import Hero from './components/Hero';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function InnerApp() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [lenis]);

  return (
    <main>
      <Hero />
      <MainSection />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <LenisProvider>
      <InnerApp />
    </LenisProvider>
  );
}

export default App;
