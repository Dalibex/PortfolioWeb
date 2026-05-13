import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Database, Server, Terminal, Code2, Cpu, Braces, Binary, GitBranch, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const Skills = ({ isAppLoading }) => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const sectionRef = useRef(null);

  useEffect(() => {
    // Only animate if the app preloader is finished
    if (isAppLoading) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".skill-card");
      if (cards.length === 0) return;

      gsap.from(cards, {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
          onRefresh: () => {
             // Safety visibility
             gsap.set(cards, { opacity: 1, y: 0 });
          }
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
        clearProps: "all"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [theme.name, isAppLoading]);

  const skillGroups = [
    {
      title: t('skillBackend'),
      icon: <Server className="w-6 h-6" />,
      skills: ["Java (Spring Boot)", "Node.js", "Python", "C# (.NET)"],
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: t('skillApis'),
      icon: <Braces className="w-6 h-6" />,
      skills: ["RESTful APIs", "JSON", "HTTP/S", "API Integration"],
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: t('skillDatabases'),
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL Design"],
      color: "from-amber-500/20 to-orange-500/20"
    },
    {
      title: t('skillGameDev'),
      icon: <Binary className="w-6 h-6" />,
      skills: ["Unity Engine", "C# Scripting", "Game Physics", "3D Math"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: t('skillDevops'),
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git / GitHub", "Docker", "Linux (Bash)", "Testing (JUnit)"],
      color: "from-red-500/20 to-rose-500/20"
    },
    {
      title: 'Design & Tools',
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Clean Architecture", "UML Design", "Maven / NPM", "Postman"],
      color: "from-cyan-500/20 to-sky-500/20"
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className={`min-h-screen ${theme.bg} ${theme.text} px-4 py-24 transition-colors duration-500`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${theme.gradientAccent} bg-clip-text text-transparent inline-block pb-2 px-1 break-normal`}>
            {t('skillsTitle')}
          </h2>
          <p className={`${theme.textSecondary} text-lg max-w-2xl mx-auto break-words whitespace-normal`}>
            {t('skillsSubtitle')}
          </p>
        </div>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className={`skill-card p-8 rounded-3xl bg-gradient-to-br ${theme.gradientCard} border ${theme.borderCard} ${theme.hoverBorder} transition-all duration-500 group relative overflow-hidden shadow-lg`}
              style={{ opacity: 1 }}
            >
                <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${group.color} blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className={`p-4 rounded-2xl bg-white/10 ${theme.accent} group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold break-normal">{group.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3 py-2 rounded-xl text-sm font-medium ${theme.bgCard} ${theme.textSecondary} border ${theme.borderCard} hover:border-white/20 transition-all duration-300 whitespace-nowrap`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-20 p-8 md:p-12 rounded-[2rem] bg-gradient-to-br ${theme.gradientCard} border ${theme.borderCard} relative overflow-hidden shadow-2xl`}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl -mr-48 -mt-48"></div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3 relative z-10 break-normal">
            <Layers className={theme.accent} />
            {t('coreTitle')}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className={`w-16 h-16 rounded-2xl ${theme.bgCard} border ${theme.borderCard} flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-110 group-hover:${theme.accent} transition-all duration-500 shadow-lg`}>
                  {i}
                </div>
                <p className={`font-semibold ${theme.text} text-sm md:text-base leading-snug px-2 break-words`}>
                  {t(`core${i}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;