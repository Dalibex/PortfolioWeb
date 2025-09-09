import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import About from "./About";
import Github from "./GitHub";
import Projects from "./Projects";
import Sidebar from "./Sidebar";

const MainSection = () => {
  const [selected, setSelected] = useState("about");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const renderContent = () => {
    switch (selected) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "github":
        return <Github />;
      default:
        return null;
    }
  };

  return (
    <section
      id="infosection"
      className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4 py-16"
    >
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full relative">
        <button
          className="md:hidden absolute top-4 left-4 z-20 p-2 rounded-md bg-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 bg-gray-900 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out w-64 z-20 md:relative md:translate-x-0 md:w-1/4`}
        >
          <Sidebar
            selected={selected}
            setSelected={(value) => {
              setSelected(value);
              setIsOpen(false);
            }}
          />
        </div>

        {/* Contenido */}
        <div className="w-full md:w-3/4">{renderContent()}</div>
      </div>
    </section>
  );
};

export default MainSection;
