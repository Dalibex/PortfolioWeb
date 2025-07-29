import About from './About';
import Github from './GitHub';

const MainSection = () => {
  return (
    <section
      id="infosection"
      className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4 py-16"
    >
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full justify-center items-stretch">
        <About />
        <Github />
      </div>
    </section>
  );
};

export default MainSection;