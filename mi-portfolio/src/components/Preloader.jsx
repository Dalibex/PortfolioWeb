import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    // Artificial duration: approx 2.5 - 3 seconds
    const totalDuration = 2500; 
    const intervalTime = 40;
    const steps = totalDuration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Small extra delay for a smooth transition exit
          setTimeout(onComplete, 300);
          return 100;
        }
        
        // Add a bit of randomness to make it look "organic"
        const jitter = Math.random() * 2;
        return Math.min(100, prev + increment + jitter);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center ${theme.bg} transition-colors duration-500`}>
      {/* Minimalist Progress Bar Container */}
      <div className="relative w-72 md:w-96 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div 
          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${theme.gradientAccent} transition-all duration-300 ease-out shadow-[0_0_15px_rgba(129,140,248,0.8)]`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Subtle Glow Effect around the bar */}
      <div 
        className={`absolute w-72 md:w-96 h-10 bg-gradient-to-r ${theme.gradientAccent} opacity-10 blur-xl pointer-events-none transition-all duration-300`}
        style={{ width: `${progress}%` }}
      />
      
      {/* Aesthetic background glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r ${theme.gradientAccent} opacity-5 blur-[120px] rounded-full pointer-events-none`} />
    </div>
  );
};

export default Preloader;
