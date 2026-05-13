import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Briefcase, GraduationCap, MapPin, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const EducationExperience = ({ isAppLoading }) => {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const sectionRef = useRef(null);

    const items = [
        {
            id: 1,
            title: t('eduDegree'),
            company: t('eduInstitution'),
            period: t('eduPeriod'),
            description: t('eduDescription'),
            type: 'education',
            icon: <GraduationCap className="w-6 h-6" />,
            highlights: [t('eduCourses'), 'Software Architecture', 'Data Structures', 'Operating Systems']
        },
        {
            id: 2,
            title: t('exp1Title'),
            company: t('exp1Org'),
            period: t('exp1Period'),
            description: t('exp1Desc'),
            type: 'work',
            icon: <Briefcase className="w-6 h-6" />,
            highlights: t('exp1Achievements')
        }
    ];

    useEffect(() => {
        if (isAppLoading) return;

        const ctx = gsap.context(() => {
            gsap.from(".timeline-item", {
                scrollTrigger: {
                    trigger: ".timeline-container",
                    start: "top 90%",
                    once: true,
                    onRefresh: () => {
                        gsap.set(".timeline-item", { opacity: 1, x: 0 });
                    }
                },
                x: -30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                clearProps: "all"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [theme.name, isAppLoading]);

    return (
        <section 
            id="experience" 
            ref={sectionRef}
            className={`min-h-screen ${theme.bg} ${theme.text} px-4 py-24 transition-colors duration-500`}
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${theme.gradientAccent} bg-clip-text text-transparent inline-block pb-2 px-1 break-normal`}>
                        {t('educationTitle')} & {t('experienceTitle')}
                    </h2>
                    <p className={`${theme.textSecondary} text-lg break-words whitespace-normal`}>
                        My academic background and professional journey
                    </p>
                </div>

                <div className="timeline-container relative max-w-5xl mx-auto">
                    {/* Vertical line */}
                    <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b ${theme.gradientAccent} opacity-20 rounded-full`}></div>

                    <div className="space-y-12 md:space-y-0">
                        {items.map((item, index) => (
                            <div 
                                key={item.id} 
                                className={`timeline-item relative flex flex-col md:flex-row items-center mb-12 md:mb-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Circle on timeline */}
                                <div className={`absolute left-0 md:left-1/2 transform -translate-x-[7px] md:-translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${theme.gradientAccent} shadow-[0_0_15px_rgba(129,140,248,0.5)] z-10`}></div>

                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-10 md:pl-0`}>
                                    <div className={`p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br ${theme.gradientCard} border ${theme.borderCard} hover:border-opacity-50 transition-all duration-300 shadow-xl relative group overflow-hidden`}>
                                        <div className={`absolute -right-4 -top-4 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent blur-3xl`}></div>
                                        
                                        <div className="flex items-center justify-between mb-6">
                                            <div className={`${theme.accent} p-3 rounded-2xl bg-white/10 shadow-inner`}>
                                                {item.icon}
                                            </div>
                                            <span className={`text-xs font-bold px-4 py-1.5 rounded-full ${theme.bgCard} ${theme.accent} border ${theme.accentBorder} shadow-sm`}>
                                                {item.period}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold mb-2 break-normal">{item.title}</h3>
                                        <p className={`${theme.accent} font-semibold mb-6 flex items-center gap-2 break-normal text-lg`}>
                                            <MapPin className="w-5 h-5" />
                                            {item.company}
                                        </p>
                                        
                                        <p className={`${theme.textSecondary} mb-8 leading-relaxed break-words whitespace-normal text-base`}>
                                            {item.description}
                                        </p>

                                        <div className="space-y-4">
                                            {Array.isArray(item.highlights) && item.highlights.map((highlight, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <Check className={`w-5 h-5 ${theme.accent} mt-1 shrink-0`} />
                                                    <span className={`text-sm md:text-base ${theme.textSecondary} break-words font-medium`}>{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
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