import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Daniel Linares</h3>
            <p className="text-sm">Software Engineer & Developer</p>
            <p className="text-sm text-gray-500 mt-2">📍 Malaga, Spain</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-gray-900 rounded-lg text-gray-400 transition-all duration-300 ${social.color} hover:bg-gray-800`}
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
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="flex items-center gap-2">
              © {currentYear} Daniel Linares Bernal. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-gray-500">
              Crafted with
              <Heart className="w-4 h-4 text-red-500" />
              using React, Tailwind & GSAP
            </p>
          </div>
        </div>

        {/* Fun Quote */}
        <div className="mt-8 p-4 bg-gray-900/50 border border-gray-800 rounded-lg text-center text-sm italic text-gray-500">
          "Code is read much more often than it is written" - Guido van Rossum
        </div>
      </div>
    </footer>
  );
};

export default Footer;