import X from "/src/assets/x.png";
import YT from "/src/assets/youtube-white-logo.svg";
import GitHub from "/src/assets/github-white-logo.svg";
import LinkedIn from "/src/assets/linkedin-white-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Daniel Linares Bernal. All rights reserved.</p>

        <div className="flex gap-6 text-gray-300">
          <a
            href="https://github.com/dalibex"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <div className="relative group">
              <img
                src={GitHub}
                alt="GitHub-Icon"
                className="w-8 h-8 transition-transform duration-300 transform group-hover:scale-80"
              />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                GitHub
              </span>
            </div>
          </a>
          <a
            href="https://twitter.com/dalibex"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Twitter"
          >
            <div className="relative group">
              <img
                src={X}
                alt="Twitter-Icon"
                className="w-8 h-8 transition-transform duration-300 transform group-hover:scale-80"
              />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Twitter
              </span>
            </div>
          </a>
          <a
            href="https://youtube.com/@dalibex"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="YouTube"
          >
            <div className="relative group">
              <img
                src={YT}
                alt="YouTube-Icon"
                className="w-10 h-10 -mt-1 transition-transform duration-300 transform group-hover:scale-80"
              />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Youtube
              </span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-l-a349a52a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <div className="relative group">
              <img
                src={LinkedIn}
                alt="LinkedIn-Icon"
                className="w-10 h-10 -mt-1 transition-transform duration-300 transform group-hover:scale-80"
              />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                LinkedIn
              </span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
