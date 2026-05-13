import { useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { LenisProvider, useLenis } from './context/LenisContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Hero from './components/Hero';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

gsap.registerPlugin(ScrollTrigger);

function InnerApp() {
  const [isLoading, setIsLoading] = useState(true);
  const lenis = useLenis();
  const { theme } = useTheme();

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!lenis) return;

    if (isLoading) {
      lenis.stop();
      window.scrollTo(0, 0);
    } else {
      const activate = () => {
        window.scrollTo(0, 0);
        lenis.start();
        ScrollTrigger.refresh(true);
        document.body.style.overflow = 'auto';
      };
      const timer = setTimeout(activate, 100);
      return () => clearTimeout(timer);
    }
  }, [lenis, isLoading]);

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      
      <main className={`min-h-screen ${theme.bg} ${theme.text} transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Hero isAppLoading={isLoading} />
        <MainSection isAppLoading={isLoading} />
        <Footer />
      </main>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <LenisProvider>
          <InnerApp />
        </LenisProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;