import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon, Palette, Globe, Home } from 'lucide-react';
import gsap from 'gsap';

import { useLenis } from '../context/LenisContext';

const Header = ({ isAppLoading }) => {
  const { theme, cycleTheme } = useTheme();
  const { t, language, toggleLanguage } = useLanguage();
  const lenis = useLenis();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(href, { 
        duration: 1.5, 
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
      });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isAppLoading) return;

    const ctx = gsap.context(() => {
      // Header items entry animation
      gsap.from(".header-item", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.5, // Start slightly after preloader fade-out
        clearProps: "all"
      });
    }, headerRef);

    return () => ctx.revert();
  }, [isAppLoading]);

  const navLinks = [
    { name: t('navAbout'), href: '#about' },
    { name: t('navProjects'), href: '#projects' },
    { name: t('navSkills'), href: '#skills' },
    { name: t('navExperience'), href: '#experience' },
    { name: t('navContact'), href: '#contact' },
  ];

  const handleThemeChange = () => {
    cycleTheme();
  };

  const getThemeIcon = () => {
    if (theme.name === 'dark') return <Moon className="w-5 h-5" />;
    if (theme.name === 'light') return <Sun className="w-5 h-5" />;
    return <Palette className="w-5 h-5" />;
  };

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? `${theme.bg} border-b ${theme.border} backdrop-blur-md bg-opacity-80 py-3 shadow-lg` 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo - Home Icon Only */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="header-item flex items-center gap-2 group"
        >
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${theme.gradientAccent} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Home className="w-6 h-6" />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name} className="header-item">
                <a 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium ${theme.textSecondary} hover:${theme.text} hover:${theme.accent} transition-colors duration-300 relative group`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${theme.gradientAccent} transition-all duration-300 group-hover:w-full`}></span>
                </a>
              </li>
            ))}
          </ul>

          <div className={`header-item h-6 w-px ${theme.border} mx-2`}></div>

          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className={`header-item flex items-center gap-2 px-3 py-1.5 rounded-full ${theme.bgCard} border ${theme.borderCard} text-xs font-bold ${theme.textSecondary} hover:${theme.text} transition-all duration-300`}
            >
              <Globe className="w-4 h-4" />
              {language.toUpperCase()}
            </button>

            {/* Theme Toggle */}
            <button 
              onClick={handleThemeChange}
              className={`header-item p-2.5 rounded-full ${theme.bgCard} border ${theme.borderCard} ${theme.textSecondary} hover:${theme.text} hover:scale-110 transition-all duration-300 shadow-md`}
              title="Change Theme"
            >
              {getThemeIcon()}
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="header-item flex lg:hidden items-center gap-4">
           <button 
              onClick={handleThemeChange}
              className={`p-2 rounded-full ${theme.bgCard} border ${theme.borderCard} ${theme.textSecondary}`}
            >
              {getThemeIcon()}
            </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-xl ${theme.bgCard} border ${theme.borderCard} ${theme.text}`}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 ${theme.bg} transition-all duration-500 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8 pt-24">
          <ul className="space-y-6 mb-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-3xl font-bold ${theme.text} hover:${theme.accent} transition-colors duration-300`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto space-y-6">
            <button 
              onClick={toggleLanguage}
              className={`w-full flex items-center justify-between p-4 rounded-2xl ${theme.bgCard} border ${theme.borderCard} text-lg font-bold ${theme.text}`}
            >
              <span>{t('contactLanguages')}</span>
              <span className={theme.accent}>{language === 'en' ? 'English' : 'Español'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
