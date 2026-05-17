import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Code2, Gamepad2, Cpu, Check, Server } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ isAppLoading }) => {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const sectionRef = useRef(null);

    const projects = [
        {
            id: 2,
            title: t('project2Title'),
            description: t('project2Desc'),
            tags: ["DB Dataset", "Android & Web APP", "Data analysis", "Hackathon"],
            icon: <Cpu className="w-10 h-10" />,
            github: "https://github.com/dalibex",
            highlights: t('project2Highlights'),
            color: "from-emerald-600/20 to-teal-600/20"
        },
        {
            id: 3,
            title: t('project3Title'),
            description: t('project3Desc'),
            tags: ["Unity", "C#", "Game Design"],
            icon: <Gamepad2 className="w-10 h-10" />,
            github: "https://github.com/dalibex",
            highlights: t('project3Highlights'),
            color: "from-purple-600/20 to-pink-600/20"
        },
        {
            id: 4,
            title: t('project4Title'),
            description: t('project4Desc'),
            tags: ["Python", "Prompts", "API - GenAI", "Modular"],
            icon: <Code2 className="w-10 h-10" />,
            github: "https://github.com/dalibex",
            highlights: t('project4Highlights'),
            color: "from-red-600/20 to-orange-600/20"
        }
    ];

    useEffect(() => {
        // ONLY initialize animations once the app is done loading
        if (isAppLoading) return;

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".project-card");
            if (cards.length === 0) return;

            gsap.from(cards, {
                scrollTrigger: {
                    trigger: ".projects-grid",
                    start: "top 95%",
                    once: true,
                    onRefresh: () => {
                        // Ensure visibility if something went wrong
                        gsap.set(cards, { opacity: 1, y: 0 });
                    }
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                clearProps: "all"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [theme.name, isAppLoading]);

    return (
        <section 
            id="projects" 
            ref={sectionRef}
            className={`min-h-screen ${theme.bg} ${theme.text} px-4 py-24 transition-colors duration-500`}
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${theme.gradientAccent} bg-clip-text text-transparent inline-block pb-2 px-1 break-normal`}>
                        {t('projectsTitle')}
                    </h2>
                    <p className={`${theme.textSecondary} text-lg max-w-2xl mx-auto break-words whitespace-normal`}>
                        {t('projectsSubtitle')}
                    </p>
                </div>

                <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`project-card group relative p-8 rounded-[2.5rem] bg-gradient-to-br ${theme.gradientCard} border ${theme.borderCard} ${theme.hoverBorder} transition-all duration-500 flex flex-col justify-between h-full hover:shadow-2xl hover:shadow-indigo-500/10 shadow-xl overflow-hidden`}
                            style={{ opacity: 1 }} // Fallback visibility
                        >
                            <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${project.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className={`p-4 rounded-2xl bg-white/10 ${theme.accent} group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                                        {project.icon}
                                    </div>
                                    <div className="flex gap-3">
                                        {project.github && (
                                            <a 
                                                href={project.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className={`p-2.5 rounded-xl ${theme.bgCard} ${theme.textSecondary} hover:${theme.text} hover:${theme.accentBg} transition-all duration-300 border ${theme.borderCard}`}
                                                title="View Code"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className={`text-xl md:text-2xl font-bold mb-3 group-hover:${theme.accent} transition-colors duration-300 break-normal`}>
                                    {project.title}
                                </h3>
                                
                                <p className={`${theme.textSecondary} mb-6 leading-relaxed text-sm md:text-base break-words whitespace-normal`}>
                                    {project.description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {Array.isArray(project.highlights) && project.highlights.map((highlight, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <Check className={`w-4 h-4 ${theme.accent} mt-0.5 shrink-0`} />
                                            <span className={`${theme.textSecondary} text-xs md:text-sm font-medium break-words`}>{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={`flex flex-wrap gap-2 pt-6 border-t ${theme.border} relative z-10`}>
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className={`px-3 py-1 text-[10px] md:text-xs font-bold rounded-full ${theme.bgCard} ${theme.accent} border ${theme.accentBorder} shadow-sm whitespace-nowrap`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;