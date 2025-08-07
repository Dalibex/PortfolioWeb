import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2.5,
        ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 100%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4 py-16"
    >
      <div
        ref={textRef}
        className="bg-gray-800/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl max-w-3xl w-full text-center border border-gray-700"
      >
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <div className="grid gap-4">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold">Proyecto 1</h3>
            <p>Descripción del proyecto 1.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold">Proyecto 2</h3>
            <p>Descripción del proyecto 2.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
