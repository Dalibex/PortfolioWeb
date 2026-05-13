import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const containerRef = useRef(null);
    const skillsRef = useRef([]);

    const skillCategories = [
        {
            category: "Backend Development",
            skills: ["Java", "C#", "Python", "C", "SpringBoot", "Node.js"],
            icon: "⚙️"
        },
        {
            category: "Frontend Development",
            skills: ["React", "JavaScript", "Tailwind CSS", "GSAP", "UI/UX Design"],
            icon: "🎨"
        },
        {
            category: "Databases",
            skills: ["SQL", "NoSQL", "Database Design", "Query Optimization"],
            icon: "🗄️"
        },
        {
            category: "Testing & Quality",
            skills: ["JUnit", "Testing", "Code Review", "Best Practices"],
            icon: "✅"
        },
        {
            category: "Game Development",
            skills: ["Unity", "C#", "Game Design", "Interactive Systems"],
            icon: "🎮"
        },
        {
            category: "DevOps & Tools",
            skills: ["Git", "Docker", "Linux", "Version Control", "CI/CD"],
            icon: "🔧"
        }
    ];

    useEffect(() => {
        skillsRef.current.forEach((el, index) => {
            if (!el) return;
            gsap.fromTo(
                el,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: index * 0.1,
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
        <section className="min-h-screen bg-gray-900 text-white px-4 py-20">
            <div className="max-w-5xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Skills & Technologies
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Stack técnico desarrollado a lo largo de mi formación y experiencia práctica
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((group, index) => (
                        <div
                            key={index}
                            ref={(el) => (skillsRef.current[index] = el)}
                            className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">{group.icon}</span>
                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                    {group.category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-gray-700/50 text-gray-200 text-sm rounded-full border border-gray-600 group-hover:border-cyan-400/50 group-hover:text-cyan-400 transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Resumen de Skills */}
                <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4">Core Competencies</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                        <div className="flex items-start gap-3">
                            <span className="text-cyan-400 font-bold mt-1">→</span>
                            <p>Clean Code & Software Architecture</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-cyan-400 font-bold mt-1">→</span>
                            <p>Problem Solving & Performance Optimization</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-cyan-400 font-bold mt-1">→</span>
                            <p>Teamwork & Collaborative Development</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-cyan-400 font-bold mt-1">→</span>
                            <p>Full-Stack Development Capabilities</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;