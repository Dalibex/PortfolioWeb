import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Code2, Lightbulb, Users, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const itemsRef = useRef([]);

  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Code",
      description: "Código limpio, mantenible y siguiendo best practices"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Soluciono problemas complejos con enfoque creativo"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Trabajo colaborativo y comunicación efectiva"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Full Stack",
      description: "Backend, frontend y game development"
    }
  ];

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    itemsRef.current.forEach((el, index) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <section id="about" className="min-h-screen bg-gray-950 text-white px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div
          ref={textRef}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Soy un desarrollador apasionado por crear soluciones de software de alta calidad.
            Con formación sólida en ingeniería de software y experiencia práctica en proyectos reales,
            combino conocimientos técnicos con una mentalidad colaborativa y enfocada en resultados.
          </p>
        </div>

        {/* Main Description */}
        <div className="mb-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl">
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Desarrollador de software con experiencia en:
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold mt-1">✓</span>
              <span><strong>Backend Development:</strong> Java, C#, Python con frameworks como SpringBoot y Node.js</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold mt-1">✓</span>
              <span><strong>Frontend Development:</strong> React, Tailwind CSS, GSAP y diseño responsive</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold mt-1">✓</span>
              <span><strong>Game Development:</strong> Unity, C#, diseño de mecánicas y arquitectura de juegos</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold mt-1">✓</span>
              <span><strong>DevOps & Tools:</strong> Git, Docker, Linux, testing y mejores prácticas de desarrollo</span>
            </li>
          </ul>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Hire Me */}
        <div className="mt-16 p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl">
          <h3 className="text-2xl font-bold mb-6">Why work with me?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">→</span>
              <p>Experiencia en proyectos reales con usuarios en producción</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">→</span>
              <p>Comprometido con clean code y arquitectura de software</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">→</span>
              <p>Capacidad de aprender rápidamente nuevas tecnologías</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">→</span>
              <p>Excelente en trabajo colaborativo y comunicación</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">→</span>
              <p>Enfocado en soluciones de calidad y optimización</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">→</span>
              <p>Bilingüe: Spanish (Native) & English (C1 Cambridge)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;