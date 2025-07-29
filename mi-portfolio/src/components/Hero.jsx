import { motion } from "framer-motion";
import miFoto from "/src/assets/vegettabetter.png";
import { useLenis } from "../context/LenisContext";

const Hero = () => {
  const lenis = useLenis();

  const scrollToSection = (e, id) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(id);
    }
  };

  return (
    <section className="min-h-[85vh] bg-black flex items-center justify-center relative px-6 md:px-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-6xl w-full relative z-20"
      >
        <div className="text-center md:text-left flex flex-col gap-6 flex-1">
          <h1 className="text-5xl text-white font-bold">
            Welcome! I'm Daniel Linares Bernal
          </h1>
          <p className="text-lg text-gray-300">
            Programmer | I love modding and software development in general
          </p>

          <div className="flex gap-6">
            <button
              onClick={(e) => scrollToSection(e, "#sobremi")}
              className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
            >
              Know More
            </button>

            <button
              onClick={(e) => scrollToSection(e, "#github")}
              className="px-6 py-3 border border-white text-white font-semibold rounded hover:bg-white hover:text-black transition"
            >
              Github
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        aria-hidden="true"
        className="absolute top-0 right-0 bottom-0 w-1/2 opacity-80 pointer-events-none select-none"
        style={{
          backgroundImage: `url(${miFoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "grayscale(30%)",
          zIndex: 10,
        }}
      />
    </section>
  );
};

export default Hero;