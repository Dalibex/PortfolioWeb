import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const themes = {
  dark: {
    name: 'dark',
    bg: 'bg-gray-950',
    bgAlt: 'bg-gray-900',
    bgCard: 'bg-gray-800/50',
    bgNav: 'bg-black/80',
    text: 'text-white',
    textSecondary: 'text-gray-400',
    textMuted: 'text-gray-500',
    border: 'border-gray-800',
    borderCard: 'border-gray-700',
    accent: 'text-cyan-400',
    accentBg: 'bg-cyan-500/20',
    accentBorder: 'border-cyan-500/30',
    gradientAccent: 'from-cyan-400 to-blue-400',
    gradientCard: 'from-gray-800/50 to-gray-900/50',
    hoverBorder: 'hover:border-cyan-400/50',
    inputBg: 'bg-gray-800',
    footerBg: 'bg-black',
  },
  light: {
    name: 'light',
    bg: 'bg-gray-50',
    bgAlt: 'bg-white',
    bgCard: 'bg-white/80',
    bgNav: 'bg-white/90',
    text: 'text-gray-900',
    textSecondary: 'text-gray-600',
    textMuted: 'text-gray-400',
    border: 'border-gray-200',
    borderCard: 'border-gray-200',
    accent: 'text-cyan-600',
    accentBg: 'bg-cyan-100',
    accentBorder: 'border-cyan-300',
    gradientAccent: 'from-cyan-600 to-blue-600',
    gradientCard: 'from-white/80 to-gray-50/80',
    hoverBorder: 'hover:border-cyan-400/50',
    inputBg: 'bg-gray-100',
    footerBg: 'bg-gray-100',
  },
  purple: {
    name: 'purple',
    bg: 'bg-[#1a1025]',
    bgAlt: 'bg-[#241535]',
    bgCard: 'bg-[#2a1a3e]', // Increased opacity (removed /60)
    bgNav: 'bg-[#120b1d]/90',
    text: 'text-white',
    textSecondary: 'text-purple-200', // Brighter text for better contrast
    textMuted: 'text-purple-400/60',
    border: 'border-purple-900/60',
    borderCard: 'border-purple-700/50',
    accent: 'text-purple-400',
    accentBg: 'bg-purple-500/20',
    accentBorder: 'border-purple-500/30',
    gradientAccent: 'from-purple-400 to-pink-400',
    gradientCard: 'from-[#2a1a3e] to-[#1a1025]', // Solid gradient
    hoverBorder: 'hover:border-purple-400/50',
    inputBg: 'bg-purple-900/30',
    footerBg: 'bg-[#0d0715]',
  },
};

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') || 'dark';
    }
    return 'dark';
  });

  const theme = themes[themeName] || themes.dark;

  useEffect(() => {
    localStorage.setItem('portfolio-theme', themeName);
    document.documentElement.setAttribute('data-theme', themeName);
  }, [themeName]);

  const cycleTheme = () => {
    const order = ['dark', 'light', 'purple'];
    const currentIndex = order.indexOf(themeName);
    const nextIndex = (currentIndex + 1) % order.length;
    setThemeName(order[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeName, setThemeName, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
