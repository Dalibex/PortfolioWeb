import { useState } from 'react';
import About from './About';
import Github from './GitHub';
import Projects from './Projects';
import Sidebar from './Sidebar';

const MainSection = () => {
  const [selected, setSelected] = useState('about');

  const renderContent = () => {
    switch (selected) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'github':
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
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full">
        <Sidebar selected={selected} setSelected={setSelected} />
        <div className="w-full md:w-3/4">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
