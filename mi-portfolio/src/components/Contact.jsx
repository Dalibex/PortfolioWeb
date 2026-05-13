import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            contentRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);

    const contactMethods = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: "Email",
            value: "dalibe2003@gmail.com",
            href: "mailto:dalibe2003@gmail.com",
            color: "from-red-500/20 to-orange-500/20 border-red-500/30"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            label: "Phone",
            value: "+34 722 87 57 37",
            href: "tel:+34722875737",
            color: "from-green-500/20 to-emerald-500/20 border-green-500/30"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            label: "Location",
            value: "Malaga, Spain",
            color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30"
        }
    ];

    const socialLinks = [
        {
            name: "GitHub",
            icon: <Github className="w-5 h-5" />,
            url: "https://github.com/dalibex",
            color: "hover:bg-gray-700 hover:text-white"
        },
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-5 h-5" />,
            url: "https://www.linkedin.com/in/daniel-l-a349a52a8/",
            color: "hover:bg-blue-600 hover:text-white"
        },
        {
            name: "Twitter",
            icon: <Twitter className="w-5 h-5" />,
            url: "https://twitter.com/dalibex",
            color: "hover:bg-sky-500 hover:text-white"
        }
    ];

    return (
        <section ref={containerRef} className="min-h-screen bg-gray-900 text-white px-4 py-20">
            <div className="max-w-4xl mx-auto">
                <div
                    ref={contentRef}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Busco oportunidades para prácticas o posiciones como desarrollador.
                        <br />
                        ¡No dudes en contactarme!
                    </p>

                    {/* Contact Methods */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                        {contactMethods.map((method, index) => (
                            <a
                                key={index}
                                href={method.href}
                                className={`p-6 bg-gradient-to-br ${method.color} border rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group`}
                            >
                                <div className="flex flex-col items-center gap-3">
                                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                                        {method.icon}
                                    </div>
                                    <p className="text-sm text-gray-400">{method.label}</p>
                                    <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                        {method.value}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={() => window.location.href = 'mailto:dalibe2003@gmail.com?subject=Interés en tu perfil como desarrollador'}
                        className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 mb-12"
                    >
                        Send Me An Email
                    </button>

                    {/* Languages Section */}
                    <div className="p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl mb-12">
                        <h3 className="text-2xl font-bold mb-4">Languages</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="text-left">
                                <p className="font-semibold text-cyan-400">Spanish</p>
                                <p className="text-gray-400">Native</p>
                            </div>
                            <div className="text-left">
                                <p className="font-semibold text-cyan-400">English</p>
                                <p className="text-gray-400">C1 Cambridge</p>
                            </div>
                            <div className="text-left">
                                <p className="font-semibold text-cyan-400">Japanese</p>
                                <p className="text-gray-400">Beginner (EOI Malaga)</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 bg-gray-800 text-gray-300 rounded-lg transition-all duration-300 ${social.color}`}
                                title={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;