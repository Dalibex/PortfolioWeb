import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const { theme } = useTheme();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/dalibex",
      color: "hover:text-gray-300"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/daniel-l-a349a52a8/",
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/dalibex",
      color: "hover:text-sky-400"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:dalibe2003@gmail.com",
      color: "hover:text-red-400"
    }
  ];

  return (
    <footer className={`${theme.footerBg} border-t ${theme.border} ${theme.textSecondary} py-12 px-4 transition-colors duration-500`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className={`text-xl font-bold ${theme.text} mb-2`}>Daniel Linares Bernal</h3>
            <p className="text-sm">{t('footerRole')}</p>
            <p className={`text-sm ${theme.textMuted} mt-2`}>📍 Malaga, Spain</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold ${theme.text} mb-4`}>{t('footerQuickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className={`hover:${theme.accent} transition-colors`}>
                  {t('navAbout')}
                </a>
              </li>
              <li>
                <a href="#projects" className={`hover:${theme.accent} transition-colors`}>
                  {t('navProjects')}
                </a>
              </li>
              <li>
                <a href="#skills" className={`hover:${theme.accent} transition-colors`}>
                  {t('navSkills')}
                </a>
              </li>
              <li>
                <a href="#contact" className={`hover:${theme.accent} transition-colors`}>
                  {t('navContact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className={`font-semibold ${theme.text} mb-4`}>{t('footerConnect')}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 ${theme.bgCard} rounded-lg ${theme.textSecondary} transition-all duration-300 ${social.color} hover:bg-opacity-80`}
                    title={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t ${theme.border} pt-8`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="flex items-center gap-2">
              © {currentYear} Daniel Linares Bernal. {t('footerRights')}
            </p>
            <p className={`flex items-center gap-2 ${theme.textMuted}`}>
              {t('footerCrafted')}
              {t('footerUsing')}
            </p>
          </div>
        </div>

        {/* Fun Quote */}
        <div className={`mt-8 p-4 ${theme.bgCard} border ${theme.borderCard} rounded-lg text-center text-sm italic ${theme.textMuted}`}>
          {t('footerQuote')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;