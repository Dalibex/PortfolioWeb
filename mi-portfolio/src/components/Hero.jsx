import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { ArrowDown } from 'lucide-react';

const Hero = ({ isAppLoading }) => {
    const canvasRef = useRef(null);
    const { t } = useLanguage();
    const { theme } = useTheme();
    const textRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const particles = [];
        const particleCount = 100;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = theme.name === 'light' ? `rgba(100, 100, 100, ${this.opacity})` : `rgba(200, 200, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        // ONLY play text animations once the preloader is done
        if (!isAppLoading && textRef.current) {
            gsap.fromTo(textRef.current.children, 
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out", clearProps: "all" }
            );

            gsap.fromTo(buttonRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 1, delay: 1, ease: "back.out(1.7)", clearProps: "all" }
            );
        }

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme.name, isAppLoading]);

    const scrollToAbout = () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className={`relative h-screen w-full flex items-center justify-center overflow-hidden ${theme.bg} transition-colors duration-500`}>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none opacity-40"
            />
            
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <div ref={textRef} className="space-y-4">
                    <p className={`text-xl md:text-2xl font-medium ${theme.accent} tracking-wide uppercase`}>
                        {t('heroGreeting')}
                    </p>
                    <h1 className={`text-5xl md:text-7xl font-bold ${theme.text} leading-tight tracking-tight`}>
                        {t('heroName')}
                    </h1>
                    <p className={`text-2xl md:text-3xl font-semibold bg-gradient-to-r ${theme.gradientAccent} bg-clip-text text-transparent`}>
                        {t('heroRole')}
                    </p>
                    <p className={`max-w-2xl mx-auto text-lg md:text-xl ${theme.textSecondary} mt-6 leading-relaxed`}>
                        {t('heroDescription')}
                    </p>
                </div>

                <div ref={buttonRef} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={scrollToAbout}
                        className={`px-8 py-4 bg-gradient-to-r ${theme.gradientAccent} text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95`}
                    >
                        {t('heroCta')}
                    </button>
                    <a
                        href="#contact"
                        className={`px-8 py-4 border-2 ${theme.border} ${theme.text} font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transfrom hover:scale-105 active:scale-95`}
                    >
                        {t('heroContact')}
                    </a>
                </div>
            </div>

            <div 
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
                onClick={scrollToAbout}
            >
                <ArrowDown className={`w-8 h-8 ${theme.textMuted}`} />
            </div>
        </section>
    );
};

export default Hero;