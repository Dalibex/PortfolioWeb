import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GitHub = () => {
  const githubRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      githubRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2.5,
        ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: githubRef.current,
          start: 'top 100%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section
      id="github"
      className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4 py-16"
    >
      <div
        ref={githubRef}
        className="bg-gray-800/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl max-w-3xl w-full text-center border border-gray-700"
      >
        <h2 className="text-4xl font-bold mb-6">🚀 My GitHub</h2>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Here I have all my projects, contributions, and repositories. Feel free to explore my work and see what I've been up to!
        </p>
        <a
          href="https://github.com/dalibex"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
        >
          Visit
        </a>
      </div>
    </section>
  );
};

export default GitHub;