import { useLenis } from '../context/LenisContext';

const Sidebar = ({ selected, setSelected }) => {
  const lenis = useLenis();

  const handleClick = (section, contentKey = null) => {
    const id = `#${section}`;
    if (lenis) {
      lenis.scrollTo(id);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (contentKey) {
      setSelected(contentKey);
    }
  };

  return (
    <nav className="fixed top-0 left-0 h-screen w-48 bg-gray-900 bg-gray-800 text-white shadow-lg flex flex-col justify-center px-4 py-8 z-50">
      <div className="flex flex-col gap-6">
        <button
          onClick={() => handleClick('inicio')}
          className="text-lg font-semibold relative group transition-all duration-300 text-left text-gray-300 hover:text-white"
        >
          Home
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
        </button>

        <button
          onClick={() => handleClick('infosection', 'about')}
          className={`text-lg font-semibold relative group transition-all duration-300 text-left ${
            selected === 'about' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
          }`}
        >
          About
          <span
            className={`absolute left-0 bottom-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
              selected === 'about' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
          />
        </button>

        <button
          onClick={() => handleClick('infosection', 'projects')}
          className={`text-lg font-semibold relative group transition-all duration-300 text-left ${
            selected === 'projects' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
          }`}
        >
          Projects
          <span
            className={`absolute left-0 bottom-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
              selected === 'projects' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
          />
        </button>

        <button
          onClick={() => handleClick('infosection', 'github')}
          className={`text-lg font-semibold relative group transition-all duration-300 text-left ${
            selected === 'github' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
          }`}
        >
          GitHub
          <span
            className={`absolute left-0 bottom-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
              selected === 'github' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
          />
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
