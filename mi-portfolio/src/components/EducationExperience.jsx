import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const EducationExperience = () => {
    const containerRef = useRef(null);
    const itemsRef = useRef([]);

    const education = [
        {
            degree: "Bachelor's Degree in Software Engineering",
            institution: "University of Malaga",
            period: "2021 - Present (4th year)",
            description: "Formación completa en ingeniería de software con énfasis en arquitectura limpia, patrones de diseño y buenas prácticas de desarrollo.",
            relevantCourses: ["Software Architecture", "Database Design", "Web Development", "Game Development", "Data Structures"]
        }
    ];

    const experience = [
        {
            title: "Multiplayer Plugin Development",
            organization: "Real Users Production",
            period: "Ongoing",
            description: "Desarrollo y mantenimiento de plugins multiplayer para servidor en producción. Experiencia real con usuarios, debugging en entornos productivos, y optimización basada en feedback.",
            achievements: ["Event-driven architecture", "Automated testing with bots", "Performance optimization", "User feedback integration"]
        },
        {
            title: "Malackathon II - Hackathon Participant",
            organization: "University of Malaga",
            period: "2024",
            description: "Participación en hackathon universitario enfocado en soluciones digitales para profesionales de salud mental. Trabajo en equipo con prototipado rápido.",
            achievements: ["Data analysis & visualization", "AI API integration", "Chatbot development", "Rapid prototyping"]
        },
        {
            title: "Game Development - MalagaCrea 2026",
            organization: "Program of Youth of Malaga",
            period: "2024-2025",
            description: "Desarrollo de videojuego para programa oficial de juventud de Málaga. Responsable de game design, arquitectura técnica y coordinar version control.",
            achievements: ["Game design & mechanics", "Clean software architecture", "UI/UX development", "Team coordination"]
        }
    ];

    useEffect(() => {
        itemsRef.current.forEach((el, index) => {
            if (!el) return;
            gsap.fromTo(
                el,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
    }, []);

    return (
        <section className="min-h-screen bg-gray-950 text-white px-4 py-20">
            <div className="max-w-5xl mx-auto">
                {/* Education Section */}
                <div className="mb-20">
                    <div className="mb-12 flex items-center gap-3">
                        <GraduationCap className="w-8 h-8 text-cyan-400" />
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Education
                        </h2>
                    </div>

                    {education.map((edu, index) => (
                        <div
                            key={index}
                            ref={(el) => (itemsRef.current[index] = el)}
                            className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl hover:border-cyan-400/50 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                                    <p className="text-cyan-400 font-semibold">{edu.institution}</p>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 text-sm whitespace-nowrap">
                                    <Calendar className="w-4 h-4" />
                                    {edu.period}
                                </div>
                            </div>

                            <p className="text-gray-300 mb-4">{edu.description}</p>

                            <div>
                                <p className="text-sm font-semibold text-gray-400 mb-2">Relevant Courses:</p>
                                <div className="flex flex-wrap gap-2">
                                    {edu.relevantCourses.map((course, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gray-800/50 text-cyan-400 text-sm rounded-full border border-cyan-500/30"
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Experience Section */}
                <div>
                    <div className="mb-12 flex items-center gap-3">
                        <Briefcase className="w-8 h-8 text-cyan-400" />
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Experience
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {experience.map((exp, index) => (
                            <div
                                key={index}
                                ref={(el) => (itemsRef.current[education.length + index] = el)}
                                className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl hover:border-cyan-400/50 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                                        <p className="text-cyan-400 font-semibold">{exp.organization}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400 text-sm whitespace-nowrap">
                                        <Calendar className="w-4 h-4" />
                                        {exp.period}
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-4">{exp.description}</p>

                                <div>
                                    <p className="text-sm font-semibold text-gray-400 mb-2">Key Achievements:</p>
                                    <ul className="space-y-2">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-300">
                                                <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationExperience;