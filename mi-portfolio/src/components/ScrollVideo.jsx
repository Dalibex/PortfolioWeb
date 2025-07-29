import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollVideo = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const scrollPos = useRef(0);
  const targetTime = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
  const video = videoRef.current;

  const onLoadedMetadata = () => {
    const duration = video.duration;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom+=2000 top",
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        video.currentTime = duration * self.progress;
      },
    });
  };

  video.addEventListener("loadedmetadata", onLoadedMetadata);

  return () => {
    video.removeEventListener("loadedmetadata", onLoadedMetadata);
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);


  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        src="/videos/fondo.mp4"
        className="w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
      />
    </section>
  );
};

export default ScrollVideo;
