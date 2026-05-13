import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Database, Code2, Rocket, Users, Server, Gamepad2, Terminal, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const About = ({ isAppLoading }) => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (isAppLoading) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 90%",
          once: true,
          onRefresh: () => {
             gsap.set(".about-title", { opacity: 1, y: 0 });
          }
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "all"
      });

      // Cards stagger animation
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: ".about-grid",
          start: "top 85%",
          once: true,
          onRefresh: () => {
             gsap.set(cardsRef.current, { opacity: 1, y: 0 });
          }
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        clearProps: "all"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [theme.name, isAppLoading]);

  const features = [
    {
      icon: <Server className="w-8 h-8" />,
      title: t('aboutBackend'),
      desc: t('aboutApis')
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Game Development',
      desc: t('aboutGameDev')
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: 'Systems & DevOps',
      desc: t('aboutDevops')
    }
  ];

  const highlights = [
    {
      icon: <Code2 className={`w-6 h-6 ${theme.accent}`} />,
      title: t('aboutCleanCode'),
      desc: t('aboutCleanCodeDesc'),
    },
    {
      icon: <Cpu className={`w-6 h-6 ${theme.accent}`} />,
      title: t('aboutProblemSolving'),
      desc: t('aboutProblemSolvingDesc'),
    },
    {
      icon: <Users className={`w-6 h-6 ${theme.accent}`} />,
      title: t('aboutTeamPlayer'),
      desc: t('aboutTeamPlayerDesc'),
    },
    {
      icon: <Database className={`w-6 h-6 ${theme.accent}`} />,
      title: t('aboutSoftwareDev'),
      desc: t('aboutSoftwareDevDesc'),
    },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`min-h-screen ${theme.bg} ${theme.text} px-4 py-24 transition-colors duration-500 overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className={`about-title text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r ${theme.gradientAccent} bg-clip-text text-transparent inline-block pb-2 px-1 break-normal`}>
            {t('aboutTitle')}
          </h2>
          <p className={`max-w-3xl mx-auto text-lg ${theme.textSecondary} leading-relaxed break-words whitespace-normal`}>
            {t('aboutIntro')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 break-normal">{t('aboutExperience')}</h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r ${theme.gradientCard} border ${theme.borderCard} ${theme.hoverBorder} transition-all duration-300 shadow-md`}
                >
                  <div className={`${theme.accent} mt-1`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 break-normal">{feature.title}</h4>
                    <p className={`${theme.textSecondary} break-words whitespace-normal`}>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className={`p-6 rounded-2xl bg-gradient-to-br ${theme.gradientCard} border ${theme.borderCard} hover:border-opacity-50 transition-all duration-300 transform hover:-translate-y-2 shadow-lg`}
              >
                <div className="mb-4 bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center shadow-inner">
                  {item.icon}
                </div>
                <h4 className="font-bold text-xl mb-2 break-normal">{item.title}</h4>
                <p className={`text-sm ${theme.textSecondary} leading-relaxed break-words whitespace-normal`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={`p-8 md:p-12 rounded-3xl bg-gradient-to-r ${theme.gradientCard} border ${theme.borderCard} relative overflow-hidden shadow-2xl`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white to-transparent opacity-5 -mr-20 -mt-20 rounded-full blur-3xl"></div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center break-normal">{t('aboutWhyTitle')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${theme.accentBg}`}></div>
                <p className={`${theme.textSecondary} text-sm md:text-base break-words`}>{t(`aboutWhy${i}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;