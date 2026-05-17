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
    heroGreeting: "Welcome, I'm",
    heroName: 'Daniel Linares Bernal',
    heroRole: 'Software Engineer',
    heroDescription: 'Backend-focused developer and learning DevOps step by step',
    heroCta: 'Explore My Work',
    heroContact: 'Get in Touch',

    // About
    aboutTitle: 'About Me',
    aboutIntro: "I'm a Software Engineering student (University of Malaga) focused mainly on backend. I'm also starting to learn DevOps for the future: right now I have some experience with Docker and a bit of Python scripting.",
    aboutExperience: 'Software developer with experience in:',
    aboutBackend: 'Java, C#, and Python, plus frameworks like Spring Boot and Node.js',
    aboutApis: 'REST API design, integration, and server-side logic',
    aboutGameDev: 'Unity, C#, gameplay design, and game architecture',
    aboutDevops: 'Git, Docker (basic), Linux, testing, and development best practices',
    aboutCleanCode: 'Clean Code',
    aboutCleanCodeDesc: 'Clean, maintainable code following best practices',
    aboutProblemSolving: 'Problem Solving',
    aboutProblemSolvingDesc: 'Solving complex problems with a creative approach',
    aboutTeamPlayer: 'Team Player',
    aboutTeamPlayerDesc: 'Collaborative work and effective communication',
    aboutSoftwareDev: 'Software Dev',
    aboutSoftwareDevDesc: 'Backend, systems, APIs REST & more',
    aboutWhyTitle: 'Why work with me?',
    aboutWhy1: 'Personal and university projects with real feedback',
    aboutWhy2: 'Committed to clean code and software architecture',
    aboutWhy3: 'Ability to learn new technologies quickly',
    aboutWhy4: 'Excellent at teamwork and communication',
    aboutWhy5: 'Focused on quality solutions and optimization',
    aboutWhy6: 'Languages: Spanish (Native), English (C1 Cambridge), and Japanese (Beginner)',

    // Projects
    projectsTitle: 'Projects',
    projectsSubtitle: 'Featured personal & university projects',
    project1Title: 'Multiplayer Plugin – Java Backend',
    project1Desc: 'Open-source multiplayer plugin published for the community. Implemented event-driven architecture, testing with bots, and performance optimization based on user feedback.',
    project1Highlights: ['Public release', 'Bot testing', 'Performance optimization', 'Continuous support', 'Real users'],
    project2Title: 'Malackathon II - UMA',
    project2Desc: 'Solution for mental health professionals developed at a university hackathon. Integrated data analysis, visualization, WEB and APP development & chatbot functionality included.',
    project2Highlights: ['University hackathon', 'Real solution for professionals', 'Datasets', 'APIs Integration' ,'Teamwork'],
    project3Title: 'MalagaCrea 2026 - Game Development',
    project3Desc: "Video game development for Malaga's youth program. Designing interactive mechanics, clean software architecture, and team version control with Git.",
    project3Highlights: ['Official youth program', 'Gameplay design', 'Scalable architecture', 'Version control'],
    project4Title: 'Discord Bot - Open Source',
    project4Desc: 'Discord bot with generative AI integration. Modular architecture, LLM Gemma 3 27B integration, robust command handling, and REST APIs for extensibility.',
    project4Highlights: ['Open source', 'Generative AI', 'Modular architecture', 'Easy to extend'],

    // Skills
    skillsTitle: 'Skills & Tech',
    skillsSubtitle: 'Technical stack developed through university and personal projects',
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
    experienceSubTitle: 'My academic background and professional journey',
    eduDegree: "Bachelor's Degree in Software Engineering",
    eduInstitution: 'University of Malaga',
    eduPeriod: '2021 - Present (4th year)',
    eduDescription: 'Comprehensive software engineering education with emphasis on clean architecture, design patterns, and development best practices.',
    eduCourses: 'Analysis and Desing of Algorithms',
    exp1Title: 'Multiplayer Plugin Development',
    exp1Org: 'Public Release & Community',
    exp1Period: '2025',
    exp1Desc: 'Development and maintenance of a multiplayer plugin released for the community. Real experience with user feedback, debugging in varied environments, and performance optimization for scalability.',
    exp1Achievements: ['Event-driven architecture', 'Testing with bots', 'Performance optimization', 'User feedback integration'],
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
    contactSubtitle: "I'm looking for internship or entry-level opportunities, especially backend-focused roles.",
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
    contactJapaneseLevel: 'Beginner N5 (EOI Malaga)',

    // Footer
    footerRole: 'Software Engineer',
    footerQuickLinks: 'Quick Links',
    footerConnect: 'Connect',
    footerRights: 'All rights reserved.',
    footerCrafted: 'Made using ',
    footerUsing: 'React, Tailwind & GSAP',
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
    heroGreeting: 'Bienvenido, soy',
    heroName: 'Daniel Linares Bernal',
    heroRole: 'Ingeniero de Software',
    heroDescription: 'Foco en backend y aprendiendo DevOps poco a poco',
    heroCta: 'Explorar Mi Trabajo',
    heroContact: 'Contáctame',

    // About
    aboutTitle: 'Sobre Mí',
    aboutIntro: 'Estudiante de Ingeniería del Software (UMA) con foco sobre todo en backend. También estoy empezando a aprender DevOps de cara al futuro: ahora mismo tengo algo de experiencia con Docker y un poco de scripting en Python.',
    aboutExperience: 'Desarrollador de software con experiencia en:',
    aboutBackend: 'Java, C#, y Python, con frameworks como SpringBoot y Node.js',
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
    aboutSoftwareDevDesc: 'Backend, sistemas, APIs y más',
    aboutWhyTitle: '¿Por qué trabajar conmigo?',
    aboutWhy1: 'Experiencia en proyectos personales y universitarios con feedback real',
    aboutWhy2: 'Comprometido con clean code y arquitectura de software',
    aboutWhy3: 'Capacidad de aprender rápidamente nuevas tecnologías',
    aboutWhy4: 'Excelente en trabajo colaborativo y comunicación',
    aboutWhy5: 'Enfocado en soluciones de calidad y optimización',
    aboutWhy6: 'Idiomas: Español (Nativo), Inglés (C1 Cambridge) y Japonés (Principiante N5)',

    // Projects
    projectsTitle: 'Proyectos',
    projectsSubtitle: 'Proyectos destacados tanto a nivel personal como desarrollados en la universidad',
    project1Title: 'Plugin Multijugador – Java Backend',
    project1Desc: 'Plugin multiplayer open-source publicado para la comunidad. Implementé arquitectura orientada a eventos, testing con bots y optimización de rendimiento basada en feedback.',
    project1Highlights: ['Publicación abierta', 'Testing con bots', 'Optimización de rendimiento', 'Soporte continuo'],
    project2Title: 'Malackathon II - UMA',
    project2Desc: 'Solución para profesionales de salud mental desarrollada en hackathon universitario. Integré análisis de datos, visualización y desarrollo tanto de WEB como APP, con funcionalidades de chatbot incluidas.',
    project2Highlights: ['Hackathon universitario', 'Solución real para profesionales', 'Datasets', 'Integración de APIs', 'Trabajo en equipo'],
    project3Title: 'MalagaCrea 2026 - Desarrollo de Videojuegos',
    project3Desc: 'Videojuego siendo desarrollado para programa de juventud de Málaga. Diseñando mecánicas interactivas, arquitectura de software limpia y gestión de versiones con Git.',
    project3Highlights: ['Programa oficial de juventud', 'Diseño de gameplay', 'Arquitectura escalable', 'Control de versiones'],
    project4Title: 'Bot de Discord - Open Source',
    project4Desc: 'Bot de Discord con integración de IA generativa. Arquitectura modular, integración con LLM Gemma 3 27B, manejo de comandos robusto y APIs REST.',
    project4Highlights: ['Open source', 'IA generativa', 'Arquitectura modular', 'Fácil de extender'],

    // Skills
    skillsTitle: 'Habilidades y Tech',
    skillsSubtitle: 'Stack técnico desarrollado a lo largo de la carrera y proyectos personales',
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
    experienceSubTitle: 'Mi perfil académico y experiencia',
    eduDegree: 'Grado en Ingeniería del Software',
    eduInstitution: 'Universidad de Málaga',
    eduPeriod: '2021 - Presente (4º año)',
    eduDescription: 'Formación completa en ingeniería de software con énfasis en arquitectura limpia, patrones de diseño y buenas prácticas.',
    eduCourses: 'Análisis y Diseño de Algoritmos',
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
    contactSubtitle: 'Busco oportunidades para prácticas o junior, sobre todo orientadas a backend.',
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
    contactJapaneseLevel: 'Principiante N5 (EOI Málaga)',

    // Footer
    footerRole: 'Ingeniero de Software',
    footerQuickLinks: 'Enlaces Rápidos',
    footerConnect: 'Conectar',
    footerRights: 'Todos los derechos reservados.',
    footerCrafted: 'Hecho usando ',
    footerUsing: 'React, Tailwind y GSAP',
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
