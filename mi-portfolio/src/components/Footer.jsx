import { Github, Twitter, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Dalibex. All rights reserved.</p>

        <div className="flex gap-6 text-gray-300">
          <a
            href="https://github.com/dalibex"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <Github />
          </a>
          <a
            href="https://twitter.com/dalibex"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Twitter"
          >
            <Twitter />
          </a>
          <a
            href="https://youtube.com/@dalibex"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="YouTube"
          >
            <Youtube />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-l-a349a52a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
