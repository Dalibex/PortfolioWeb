import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Github, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);
  const projectsRef = useRef([]);

  const projects = [
    {
      id: 1,
      title: "Multiplayer Plugin – Java Backend",
      description: "Plugin de servidor multijugador en producción con usuarios reales. Implementé arquitectura orientada a eventos, testing automatizado con bots y optimización de rendimiento basada en feedback de usuarios.",
      technologies: ["Java", "Server APIs", "Event-Driven Architecture", "JUnit Testing", "Performance Optimization"],
      highlights: ["Usuarios en producción", "Testing con bots", "Optimización de performance", "Soporte continuo"],
      githubUrl: "https://github.com/dalibex",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 2,
      title: "Malackathon II - UMA",
      description: "Solución para profesionales de salud mental desarrollada en hackathon universitario. Integré análisis de datos, visualización, APIs de IA y desarrollo de chatbot con prototipado rápido en equipo.",
      technologies: ["Data Analysis", "Data Visualization", "AI APIs", "Chatbot Development", "Rapid Prototyping"],
      highlights: ["Hackathon universitario", "Solución real para profesionales", "Integración IA", "Trabajo en equipo"],
      githubUrl: "https://github.com/dalibex",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      id: 3,
      title: "MalagaCrea 2026 - Game Development",
      description: "Videojuego desarrollado para programa de juventud de Málaga. Diseñé mecánicas interactivas, arquitectura de software limpia, UI intuitiva y gestión de versiones con Git en equipo.",
      technologies: ["Unity", "C#", "Game Design", "Interactive Systems", "UI Development", "Git/Version Control"],
      highlights: ["Programa oficial de juventud", "Diseño de gameplay", "Arquitectura escalable", "Control de versiones"],
      githubUrl: "https://github.com/dalibex",
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30"
    },
    {
      id: 4,
      title: "Discord Bot - Open Source",
      description: "Bot de Discord con integración de IA generativa. Arquitectura modular, integración con LLM Gemma 3 27B, manejo de comandos robusto y APIs REST para extensibilidad.",
      technologies: ["Python", "Discord API", "LLM Integration (Gemma 3 27B)", "Modular Architecture", "REST APIs"],
      highlights: ["Open source", "IA generativa", "Arquitectura modular", "Fácil de extender"],
      githubUrl: "https://github.com/dalibex",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    }
  ];

  useEffect(() => {
    projectsRef.current.forEach((el, index) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.15,
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
    <section className="min-h-screen bg-gray-950 text-white px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Proyectos destacados que demuestran mis habilidades en desarrollo backend, frontend y game development
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectsRef.current[index] = el)}
              className={`bg-gradient-to-br ${project.color} backdrop-blur-sm border ${project.borderColor} rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                  </a>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800/50 text-cyan-400 text-sm rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap gap-2">
                  {project.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="text-sm text-gray-400 flex items-center gap-1"
                    >
                      ✓ {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;