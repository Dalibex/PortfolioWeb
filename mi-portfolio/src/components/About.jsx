import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
      id="sobremi"
      className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4 py-16"
    >
      <div
        ref={textRef}
        className="bg-gray-800/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl max-w-3xl w-full text-center border border-gray-700"
      >
        <h2 className="text-4xl font-bold mb-6">About</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Developer who loves creating. I enjoy working on projects that challenge my skills
          and allow me to learn new stuff. I have experience in front-end and back-end
          development, as well as some knowledge about game development and modding.
        </p>
      </div>
    </section>
  );
};

export default About;