import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    // Nav
    navAbout: 'About',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navExperience: 'Experience',
    navContact: 'Contact',

    // Hero
    heroGreeting: "Hi, I'm",
    heroName: 'Daniel Linares Bernal',
    heroRole: 'Software Engineer',
    heroDescription: 'Passionate about creating high-quality software, backend architecture, and game development.',
    heroCta: 'Explore My Work',
    heroContact: 'Get in Touch',

    // About
    aboutTitle: 'About Me',
    aboutIntro: 'I am a software engineer focused on building robust and high-quality solutions. With a solid foundation in software engineering and experience in production environments, I combine technical knowledge with a result-oriented approach.',
    aboutExperience: 'Software developer with experience in:',
    aboutBackend: 'Java, C#, Python with frameworks like SpringBoot and Node.js',
    aboutApis: 'REST API design, integration, and server-side logic',
    aboutGameDev: 'Unity, C#, gameplay design, and game architecture',
    aboutDevops: 'Git, Docker, Linux, testing, and development best practices',
    aboutCleanCode: 'Clean Code',
    aboutCleanCodeDesc: 'Clean, maintainable code following best practices',
    aboutProblemSolving: 'Problem Solving',
    aboutProblemSolvingDesc: 'Solving complex problems with a creative approach',
    aboutTeamPlayer: 'Team Player',
    aboutTeamPlayerDesc: 'Collaborative work and effective communication',
    aboutSoftwareDev: 'Software Dev',
    aboutSoftwareDevDesc: 'Backend, systems, and game development',
    aboutWhyTitle: 'Why work with me?',
    aboutWhy1: 'Experience in real projects with production users',
    aboutWhy2: 'Committed to clean code and software architecture',
    aboutWhy3: 'Ability to learn new technologies quickly',
    aboutWhy4: 'Excellent at teamwork and communication',
    aboutWhy5: 'Focused on quality solutions and optimization',
    aboutWhy6: 'Bilingual: Spanish (Native) & English (C1 Cambridge)',

    // Projects
    projectsTitle: 'Projects',
    projectsSubtitle: 'Featured projects showcasing my skills in backend systems and game development',
    project1Title: 'Multiplayer Plugin – Java Backend',
    project1Desc: 'Open-source multiplayer plugin published for the community. Implemented event-driven architecture, automated testing with bots, and performance optimization based on user feedback.',
    project1Highlights: ['Public release', 'Bot testing', 'Performance optimization', 'Continuous support'],
    project2Title: 'Malackathon II - UMA',
    project2Desc: 'Solution for mental health professionals developed at a university hackathon. Integrated data analysis, visualization, and REST APIs for chatbot functionality.',
    project2Highlights: ['University hackathon', 'Real solution for professionals', 'REST API integration', 'Teamwork'],
    project3Title: 'MalagaCrea 2026 - Game Development',
    project3Desc: "Video game developed for Malaga's youth program. Designed interactive mechanics, clean software architecture, and team version control with Git.",
    project3Highlights: ['Official youth program', 'Gameplay design', 'Scalable architecture', 'Version control'],
    project4Title: 'Discord Bot - Open Source',
    project4Desc: 'Discord bot with generative AI integration. Modular architecture, LLM Gemma 3 27B integration, robust command handling, and REST APIs for extensibility.',
    project4Highlights: ['Open source', 'Generative AI', 'Modular architecture', 'Easy to extend'],

    // Skills
    skillsTitle: 'Skills & Tech',
    skillsSubtitle: 'Technical stack developed throughout my education and practical experience',
    skillBackend: 'Backend Development',
    skillApis: 'REST APIs & Integration',
    skillDatabases: 'Databases',
    skillTesting: 'Testing & Quality',
    skillGameDev: 'Game Development',
    skillDevops: 'DevOps & Tools',
    coreTitle: 'Core Competencies',
    core1: 'Clean Code & Software Architecture',
    core2: 'Problem Solving & Performance Optimization',
    core3: 'Teamwork & Collaborative Development',
    core4: 'Software Development Capabilities',

    // Education & Experience
    educationTitle: 'Education',
    experienceTitle: 'Experience',
    eduDegree: "Bachelor's Degree in Software Engineering",
    eduInstitution: 'University of Malaga',
    eduPeriod: '2021 - Present (4th year)',
    eduDescription: 'Comprehensive software engineering education with emphasis on clean architecture, design patterns, and development best practices.',
    eduCourses: 'Relevant Courses:',
    exp1Title: 'Multiplayer Plugin Development',
    exp1Org: 'Public Release & Community',
    exp1Period: '2025',
    exp1Desc: 'Development and maintenance of a multiplayer plugin released for the community. Real experience with user feedback, debugging in varied environments, and performance optimization for scalability.',
    exp1Achievements: ['Event-driven architecture', 'Automated testing with bots', 'Performance optimization', 'User feedback integration'],
    exp2Title: 'Malackathon II - Hackathon Participant',
    exp2Org: 'University of Malaga',
    exp2Period: '2025',
    exp2Desc: 'Participation in university hackathon focused on digital solutions for mental health professionals. Team work with rapid prototyping.',
    exp2Achievements: ['Data analysis & visualization', 'API integration', 'REST architecture', 'Rapid prototyping'],
    exp3Title: 'Game Development - MalagaCrea 2026',
    exp3Org: 'Program of Youth of Malaga',
    exp3Period: '2026',
    exp3Desc: "Video game development for Malaga's official youth program. Responsible for game design, technical architecture and coordinating version control.",
    exp3Achievements: ['Game design & mechanics', 'Clean software architecture', 'Systems development', 'Team coordination'],
    keyAchievements: 'Key Achievements:',

    // Contact
    contactTitle: 'Get In Touch',
    contactSubtitle: "I'm looking for internship opportunities or positions as a software engineer.",
    contactSubtitle2: "Don't hesitate to reach out!",
    contactEmail: 'Email',
    contactPhone: 'Phone',
    contactLocation: 'Location',
    contactCta: 'Send Me An Email',
    contactLanguages: 'Languages',
    contactSpanish: 'Spanish',
    contactNative: 'Native',
    contactEnglish: 'English',
    contactJapanese: 'Japanese',
    contactJapaneseLevel: 'Beginner (EOI Malaga)',

    // Footer
    footerRole: 'Software Engineer',
    footerQuickLinks: 'Quick Links',
    footerConnect: 'Connect',
    footerRights: 'All rights reserved.',
    footerCrafted: 'Hecho con',
    footerUsing: 'usando React, Tailwind & GSAP',
    footerQuote: '"Code is read much more often than it is written" - Guido van Rossum',
  },
  es: {
    // Nav
    navAbout: 'Sobre Mí',
    navProjects: 'Proyectos',
    navSkills: 'Habilidades',
    navExperience: 'Experiencia',
    navContact: 'Contacto',

    // Hero
    heroGreeting: 'Hola, soy',
    heroName: 'Daniel Linares Bernal',
    heroRole: 'Ingeniero de Software',
    heroDescription: 'Apasionado por crear software de alta calidad, arquitectura backend y desarrollo de videojuegos.',
    heroCta: 'Explorar Mi Trabajo',
    heroContact: 'Contáctame',

    // About
    aboutTitle: 'Sobre Mí',
    aboutIntro: 'Soy un ingeniero de software enfocado en crear soluciones robustas y de alta calidad. Con formación sólida en ingeniería de software y experiencia en entornos de producción, combino conocimientos técnicos con un enfoque orientado a resultados.',
    aboutExperience: 'Desarrollador de software con experiencia en:',
    aboutBackend: 'Java, C#, Python con frameworks como SpringBoot y Node.js',
    aboutApis: 'Diseño de APIs REST, integración y lógica de servidor',
    aboutGameDev: 'Unity, C#, diseño de mecánicas y arquitectura de juegos',
    aboutDevops: 'Git, Docker, Linux, testing y mejores prácticas de desarrollo',
    aboutCleanCode: 'Código Limpio',
    aboutCleanCodeDesc: 'Código limpio, mantenible y siguiendo mejores prácticas',
    aboutProblemSolving: 'Resolución de Problemas',
    aboutProblemSolvingDesc: 'Soluciono problemas complejos con enfoque creativo',
    aboutTeamPlayer: 'Trabajo en Equipo',
    aboutTeamPlayerDesc: 'Trabajo colaborativo y comunicación efectiva',
    aboutSoftwareDev: 'Software Dev',
    aboutSoftwareDevDesc: 'Backend, sistemas y desarrollo de videojuegos',
    aboutWhyTitle: '¿Por qué trabajar conmigo?',
    aboutWhy1: 'Experiencia en proyectos reales con usuarios en producción',
    aboutWhy2: 'Comprometido con clean code y arquitectura de software',
    aboutWhy3: 'Capacidad de aprender rápidamente nuevas tecnologías',
    aboutWhy4: 'Excelente en trabajo colaborativo y comunicación',
    aboutWhy5: 'Enfocado en soluciones de calidad y optimización',
    aboutWhy6: 'Bilingüe: Español (Nativo) e Inglés (C1 Cambridge)',

    // Projects
    projectsTitle: 'Proyectos',
    projectsSubtitle: 'Proyectos destacados que demuestran mis habilidades en sistemas backend y videojuegos',
    project1Title: 'Plugin Multijugador – Java Backend',
    project1Desc: 'Plugin multiplayer open-source publicado para la comunidad. Implementé arquitectura orientada a eventos, testing automatizado con bots y optimización de rendimiento basada en feedback.',
    project1Highlights: ['Publicación abierta', 'Testing con bots', 'Optimización de rendimiento', 'Soporte continuo'],
    project2Title: 'Malackathon II - UMA',
    project2Desc: 'Solución para profesionales de salud mental desarrollada en hackathon universitario. Integré análisis de datos, visualización y APIs REST para funcionalidades de chatbot.',
    project2Highlights: ['Hackathon universitario', 'Solución real para profesionales', 'Integración de APIs REST', 'Trabajo en equipo'],
    project3Title: 'MalagaCrea 2026 - Desarrollo de Videojuegos',
    project3Desc: 'Videojuego desarrollado para programa de juventud de Málaga. Diseñé mecánicas interactivas, arquitectura de software limpia y gestión de versiones con Git.',
    project3Highlights: ['Programa oficial de juventud', 'Diseño de gameplay', 'Arquitectura escalable', 'Control de versiones'],
    project4Title: 'Bot de Discord - Open Source',
    project4Desc: 'Bot de Discord con integración de IA generativa. Arquitectura modular, integración con LLM Gemma 3 27B, manejo de comandos robusto y APIs REST.',
    project4Highlights: ['Open source', 'IA generativa', 'Arquitectura modular', 'Fácil de extender'],

    // Skills
    skillsTitle: 'Habilidades y Tech',
    skillsSubtitle: 'Stack técnico desarrollado a lo largo de mi formación y experiencia práctica',
    skillBackend: 'Desarrollo Backend',
    skillApis: 'APIs REST e Integración',
    skillDatabases: 'Bases de Datos',
    skillTesting: 'Testing y Calidad',
    skillGameDev: 'Desarrollo de Videojuegos',
    skillDevops: 'DevOps y Herramientas',
    coreTitle: 'Competencias Principales',
    core1: 'Código Limpio y Arquitectura de Software',
    core2: 'Resolución de Problemas y Optimización',
    core3: 'Trabajo en Equipo y Desarrollo Colaborativo',
    core4: 'Capacidades de Desarrollo de Software',

    // Education & Experience
    educationTitle: 'Educación',
    experienceTitle: 'Experiencia',
    eduDegree: 'Grado en Ingeniería del Software',
    eduInstitution: 'Universidad de Málaga',
    eduPeriod: '2021 - Presente (4º año)',
    eduDescription: 'Formación completa en ingeniería de software con énfasis en arquitectura limpia, patrones de diseño y buenas prácticas.',
    eduCourses: 'Asignaturas Relevantes:',
    exp1Title: 'Desarrollo de Plugin Multijugador',
    exp1Org: 'Lanzamiento Público y Comunidad',
    exp1Period: '2025',
    exp1Desc: 'Desarrollo y mantenimiento de un plugin multiplayer publicado para la comunidad. Experiencia real con feedback de usuarios, debugging en entornos variados y optimización para escalabilidad.',
    exp1Achievements: ['Arquitectura orientada a eventos', 'Testing automatizado con bots', 'Optimización de rendimiento', 'Integración de feedback'],
    exp2Title: 'Malackathon II - Participante Hackathon',
    exp2Org: 'Universidad de Málaga',
    exp2Period: '2025',
    exp2Desc: 'Participación en hackathon universitario enfocado en soluciones digitales para profesionales de salud mental. Trabajo en equipo con prototipado rápido.',
    exp2Achievements: ['Análisis y visualización de datos', 'Integración de APIs', 'Arquitectura REST', 'Prototipado rápido'],
    exp3Title: 'Desarrollo de Videojuegos - MalagaCrea 2026',
    exp3Org: 'Programa de Juventud de Málaga',
    exp3Period: '2026',
    exp3Desc: 'Desarrollo de videojuego para programa oficial de juventud de Málaga. Responsable de game design, arquitectura técnica y coordinación de control de versiones.',
    exp3Achievements: ['Diseño de juego y mecánicas', 'Arquitectura de software limpia', 'Desarrollo de sistemas', 'Coordinación de equipo'],
    keyAchievements: 'Logros Clave:',

    // Contact
    contactTitle: 'Contacto',
    contactSubtitle: 'Busco oportunidades para prácticas o posiciones como ingeniero de software.',
    contactSubtitle2: '¡No dudes en contactarme!',
    contactEmail: 'Email',
    contactPhone: 'Teléfono',
    contactLocation: 'Ubicación',
    contactCta: 'Envíame un Email',
    contactLanguages: 'Idiomas',
    contactSpanish: 'Español',
    contactNative: 'Nativo',
    contactEnglish: 'Inglés',
    contactJapanese: 'Japonés',
    contactJapaneseLevel: 'Principiante (EOI Málaga)',

    // Footer
    footerRole: 'Ingeniero de Software',
    footerQuickLinks: 'Enlaces Rápidos',
    footerConnect: 'Conectar',
    footerRights: 'Todos los derechos reservados.',
    footerCrafted: 'Hecho con',
    footerUsing: 'usando React, Tailwind y GSAP',
    footerQuote: '"El código se lee mucho más de lo que se escribe" - Guido van Rossum',
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => translations[language]?.[key] || translations.en[key] || key;

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
