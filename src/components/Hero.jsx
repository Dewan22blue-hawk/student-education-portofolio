import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, Instagram, ArrowDown } from 'lucide-react';
import { profileData, socialLinks } from '../data/cvData';
import profilePhoto from '../assets/denny.png';
import cvFile from '../assets/cvdenny.pdf';

/**
 * Hero Component
 * Features: Large animated typography, gradient text effects, 
 * floating animations, CTA buttons, particle background
 */
const Hero = () => {
    const roles = [
        "Student Affairs Professional",
        "IT Support Specialist",
        "Content Creator",
        "System Administrator"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const getSocialIcon = (iconName) => {
        switch (iconName) {
            case 'linkedin': return <Linkedin size={20} />;
            case 'instagram': return <Instagram size={20} />;
            case 'mail': return <Mail size={20} />;
            default: return null;
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24 pb-24">
            {/* Animated gradient background */}
            <div className="absolute inset-0 gradient-bg opacity-30"></div>
            <div className="absolute inset-0 grid-pattern"></div>

            {/* Floating elements */}
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5],
                }}
                transition={{ duration: 10, repeat: Infinity }}
            />

            {/* Content */}
            <div className="container-custom px-4 md:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Greeting */}
                    <motion.p
                        variants={itemVariants}
                        className="text-primary-400 font-medium text-lg md:text-xl mb-4"
                    >
                        Hi, I'm
                    </motion.p>

                    {/* Profile Photo */}
                    <motion.div
                        variants={itemVariants}
                        className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8"
                    >
                        {/* Gradient border effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-full blur-md opacity-75 animate-pulse"></div>

                        {/* Photo container */}
                        <motion.div
                            className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 glass-strong"
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={profilePhoto}
                                alt={profileData.name}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6"
                    >
                        <span className="gradient-text">{profileData.name}</span>
                    </motion.h1>

                    {/* Title with animated rotation */}
                    <motion.div
                        variants={itemVariants}
                        className="h-16 md:h-20 mb-6 md:mb-8"
                    >
                        <motion.h2
                            className="text-2xl md:text-4xl font-semibold text-gray-300"
                            animate={{ opacity: [1, 1, 0, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            {profileData.title}
                        </motion.h2>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto"
                    >
                        {profileData.subtitle} • {profileData.tagline}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <motion.a
                            href="#contact"
                            className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail size={20} />
                            Get In Touch
                        </motion.a>

                        <motion.a
                            href={cvFile}
                            download="Denny_Irawan_CV.pdf"
                            className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download size={20} />
                            Download CV
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-center gap-4 mb-16"
                    >
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 glass-strong rounded-full hover:bg-white/20 transition-all"
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={social.name}
                            >
                                {getSocialIcon(social.icon)}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ArrowDown size={28} className="text-gray-500 hover:text-primary-400 transition-colors cursor-pointer" />
            </motion.div>
        </section>
    );
};

export default Hero;
