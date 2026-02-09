import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Instagram, ArrowDown } from 'lucide-react';
import { profileData, socialLinks } from '../data/cvData';
import profilePhoto from '../assets/denny.png';
import cvFile from '../assets/cvdenny.pdf';
import useTypingAnimation from '../hooks/useTypingAnimation';
import gsap from 'gsap';

const Hero = () => {
    const roles = [
        "Tech-Savvy Student Affairs Professional",
        "IT Support Specialist",
        "Content Creator",
        "System Administrator"
    ];

    const { textRef, cursorRef } = useTypingAnimation(roles, {
        typingSpeed: 0.08,
        deletingSpeed: 0.04,
        pauseDuration: 2.5,
        loop: true
    });

    const heroRef = useRef(null);

    useEffect(() => {
        if (!heroRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.from('.hero-greeting', { opacity: 0, y: 20, duration: 0.8 })
                .from('.hero-photo', { opacity: 0, scale: 0.8, duration: 1 }, '-=0.4')
                .from('.hero-name', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
                .from('.hero-typing', { opacity: 0, duration: 0.6 }, '-=0.3')
                .from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.8 }, '-=0.4')
                .from('.hero-cta', { opacity: 0, y: 20, stagger: 0.15, duration: 0.6 }, '-=0.4')
                .from('.hero-social', {
                    opacity: 0,
                    scale: 0,
                    stagger: 0.1,
                    duration: 0.5,
                    ease: 'back.out(1.7)',
                }, '-=0.3');
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const getSocialIcon = (iconName) => {
        switch (iconName) {
            case 'linkedin': return <Linkedin size={20} />;
            case 'instagram': return <Instagram size={20} />;
            case 'mail': return <Mail size={20} />;
            case 'github': return <Github size={20} />;
            default: return null;
        }
    };

    return (
        <section
            ref={heroRef}
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24"
        >
            {/* Premium Multi-Layer Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 
                      dark:from-gray-950 dark:via-indigo-950/40 dark:to-purple-950/30"></div>

            {/* Mesh Gradient Overlay for Depth */}
            <div className="absolute inset-0 opacity-40 dark:opacity-60 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.25) 0px, transparent 50%),
                               radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 0.15) 0px, transparent 50%),
                               radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 0.2) 0px, transparent 50%),
                               radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 0.25) 0px, transparent 50%),
                               radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 0.15) 0px, transparent 50%),
                               radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 0.25) 0px, transparent 50%),
                               radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 0.2) 0px, transparent 50%)`
                }}></div>

            {/* Animated Grid */}
            <div className="absolute inset-0 hero-grid pointer-events-none z-0"></div>

            {/* Premium Floating Orbs with Advanced Animations */}
            <motion.div
                className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-50"
                style={{
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.5) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 100%)'
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-50"
                style={{
                    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 100%)'
                }}
                animate={{
                    scale: [1.2, 1, 1.2],
                    x: [0, -50, 0],
                    y: [0, -30, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-30"
                style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 100%)'
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            />

            {/* MAIN CONTENT */}
            <div className="relative z-10 px-6 max-w-5xl mx-auto text-center">

                {/* Greeting Badge with Premium Design */}
                <motion.div
                    className="hero-greeting inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                     bg-white/90 dark:bg-white/10 backdrop-blur-lg 
                     border border-primary-200/60 dark:border-primary-400/30
                     shadow-lg shadow-primary-500/10 dark:shadow-primary-500/20 mb-10"
                    whileHover={{ scale: 1.05, y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    <span className="text-2xl">👋</span>
                    <span className="text-sm font-bold bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Hi, I'm
                    </span>
                </motion.div>

                {/* Profile Photo with Animated Gradient Ring */}
                <motion.div
                    className="hero-photo relative w-44 h-44 md:w-52 md:h-52 mx-auto mb-10"
                    whileHover={{ scale: 1.08, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    {/* Animated Rainbow Ring */}
                    <motion.div
                        className="absolute inset-0 rounded-full p-1"
                        style={{
                            background: 'linear-gradient(45deg, #6366f1, #a855f7, #ec4899, #f59e0b, #6366f1)',
                            backgroundSize: '400% 400%',
                        }}
                        animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    >
                        <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-950"></div>
                    </motion.div>

                    {/* Photo Container */}
                    <div className="relative w-full h-full rounded-full overflow-hidden border-[5px] border-white dark:border-gray-900 
                          shadow-2xl shadow-primary-500/30">
                        <img src={profilePhoto} alt={profileData.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Outer Glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/40 via-purple-500/40 to-pink-500/40 blur-3xl -z-10 animate-pulse"></div>
                </motion.div>

                {/* Name with Ultra Premium Gradient */}
                <h1 className="hero-name text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
                    <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 
                         dark:from-primary-400 dark:via-purple-400 dark:to-pink-400
                         bg-clip-text text-transparent
                         filter drop-shadow-lg">
                        {profileData.name}
                    </span>
                </h1>

                {/* Typing Animation with Glassmorphism Card */}
                <div className="hero-typing h-20 md:h-24 mb-10 flex items-center justify-center">
                    <motion.div
                        className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl 
                       bg-white/80 dark:bg-white/5 backdrop-blur-2xl
                       border-2 border-white/60 dark:border-white/10
                       shadow-2xl shadow-black/10"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                            <span ref={textRef}></span>
                            <motion.span
                                ref={cursorRef}
                                className="inline-block w-0.5 h-7 md:h-10 bg-gradient-to-b from-primary-500 to-purple-500 ml-1"
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            />
                        </h2>
                    </motion.div>
                </div>

                {/* Subtitle with Icons */}
                <p className="hero-subtitle text-base md:text-lg text-slate-700 dark:text-gray-200 mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
                    <span className="inline-flex items-center gap-2 flex-wrap justify-center">
                        <span className="inline-flex items-center gap-1.5">
                            {/* <span className="text-primary-500 text-xl"></span> */}
                            <span>{profileData.subtitle}</span>
                        </span>
                        <span className="text-primary-400 font-bold">•</span>
                        <span>{profileData.tagline}</span>
                    </span>
                </p>

                {/* Ultra Premium CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                    <motion.a
                        href="/contact"
                        className="hero-cta group relative px-10 py-4 rounded-xl font-bold text-base
                     bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600
                     text-white
                     shadow-2xl shadow-primary-500/40
                     overflow-hidden
                     transition-all duration-300
                     flex items-center justify-center gap-3"
                        whileHover={{ scale: 1.05, y: -3, shadow: "0 25px 50px -12px rgba(99, 102, 241, 0.5)" }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <Mail size={22} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="relative z-10">Get In Touch</span>

                        {/* Animated Background Shine */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.6 }}
                        />
                    </motion.a>

                    <motion.a
                        href={cvFile}
                        download="Denny_Irawan_CV.pdf"
                        className="hero-cta group relative px-10 py-4 rounded-xl font-bold text-base
                     bg-white/90 dark:bg-white/10 backdrop-blur-xl
                     text-slate-800 dark:text-white
                     border-2 border-primary-300/60 dark:border-primary-400/40
                     shadow-xl shadow-black/10
                     hover:border-primary-500 dark:hover:border-primary-400
                     transition-all duration-300
                     flex items-center justify-center gap-3
                     overflow-hidden"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <Download size={22} className="relative z-10 group-hover:translate-y-1 transition-transform duration-300" />
                        <span className="relative z-10">Download CV</span>

                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.a>
                </div>

                {/* Premium Social Links with Stagger Animation */}
                <div className="flex z-20 justify-center gap-3 flex-wrap">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-social group relative p-4 rounded-xl
                       bg-white/90 dark:bg-white/10 backdrop-blur-xl
                       text-slate-700 dark:text-white
                       border-2 border-white/60 dark:border-white/10
                       shadow-lg shadow-black/5
                       hover:shadow-2xl hover:shadow-primary-500/30
                       transition-all duration-300
                       overflow-hidden"
                            whileHover={{ y: -8, scale: 1.15, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.15 * index,
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                        >
                            <div className="relative z-10">
                                {getSocialIcon(social.icon)}
                            </div>

                            {/* Gradient Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-pink-500/20 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator with Animation */}
            <motion.div
                className="z-20 absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                    Scroll
                </span>
                <div className="p-2 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20">
                    <ArrowDown size={20} className="text-primary-500 dark:text-primary-400" />
                </div>
            </motion.div>

            {/* Enhanced Grid Pattern CSS */}
            <style>{`
        .hero-grid {
          background-size: 42px 42px;
          background-image:
            linear-gradient(to right, rgba(99, 102, 241, 0.09) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.09) 1px, transparent 1px);
          mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%);
        }

        .dark .hero-grid {
          background-image:
            linear-gradient(to right, rgba(168, 85, 247, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168, 85, 247, 0.12) 1px, transparent 1px);
        }
      `}</style>
        </section>
    );
};

export default Hero;
