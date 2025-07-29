// src/context/LenisContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

const LenisContext = createContext();

export const LenisProvider = ({ children }) => {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const lenisInstance = new Lenis({ smooth: true, lerp: 0.07 });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    setLenis(lenisInstance);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = () => useContext(LenisContext);