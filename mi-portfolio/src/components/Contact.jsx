import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const Contact = ({ isAppLoading }) => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (isAppLoading) return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-item", {
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 90%",
          once: true,
          onRefresh: () => {
             gsap.set(".contact-item", { opacity: 1, x: 0 });
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

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'dalibe2003@gmail.com',
      link: 'mailto:dalibe2003@gmail.com'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/daniel',
      link: 'https://www.linkedin.com/in/daniel-l-a349a52a8/'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'github.com/dalibex',
      link: 'https://github.com/dalibex'
    }
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`min-h-screen ${theme.bg} ${theme.text} px-4 py-24 transition-colors duration-500`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r ${theme.gradientAccent} bg-clip-text text-transparent inline-block pb-2 px-1 break-normal`}>
            {t('contactTitle')}
          </h2>
          <p className={`${theme.textSecondary} text-lg max-w-2xl mx-auto break-words whitespace-normal`}>
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 break-normal">{t('contactSubtitle2')}</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-item flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-br ${theme.gradientCard} border ${theme.borderCard} ${theme.hoverBorder} transition-all duration-300 group shadow-lg`}
                >
                  <div className={`p-4 rounded-xl bg-white/10 ${theme.accent} group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className={`text-sm ${theme.textSecondary} font-medium uppercase tracking-wider`}>{item.label}</p>
                    <p className="text-lg md:text-xl font-semibold break-all sm:break-normal">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className={`p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br ${theme.gradientCard} border ${theme.borderCard} shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl -mr-32 -mt-32"></div>

            <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${theme.gradientAccent} flex items-center justify-center mb-8 shadow-xl`}>
              <Mail className="w-10 h-10 text-white" />
            </div>

            <h4 className="text-2xl font-bold mb-4 break-normal">Let's build something great!</h4>
            <p className={`${theme.textSecondary} mb-10 max-w-md mx-auto text-lg leading-relaxed break-words`}>
              Ready for internships or software engineering roles. Drop me a message and let's talk about how I can contribute to your team.
            </p>

            <a
              href="mailto:dalibe2003@gmail.com"
              className={`px-10 py-4 bg-gradient-to-r ${theme.gradientAccent} text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg`}
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;