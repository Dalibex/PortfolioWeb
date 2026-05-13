import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import EducationExperience from "./EducationExperience";
import Contact from "./Contact";

const MainSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            DLB
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-400" />
            ) : (
              <Menu className="w-6 h-6 text-gray-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-400 hover:text-cyan-400 hover:bg-gray-900/50 transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content - Add padding to avoid overlap with fixed nav */}
      <main className="pt-16">
        <About />
        <Projects />
        <Skills />
        <EducationExperience />
        <Contact />
      </main>
    </>
  );
};

export default MainSection;