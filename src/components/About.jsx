import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Target, Award, Briefcase } from 'lucide-react';
import { profileData } from '../data/cvData';

/**
 * About Component
 * Features: Professional summary, core competencies display,
 * quick stats with counter animations, glassmorphism cards
 */
const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
        { icon: <Briefcase size={32} />, value: "3+", label: "Years Experience" },
        { icon: <Award size={32} />, value: "9+", label: "Certifications" },
        { icon: <Target size={32} />, value: "4.00", label: "GPA (Cum Laude)" },
        { icon: <User size={32} />, value: "50+", label: "Events Organized" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="about" className="section-padding relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>

            <div className="container-custom relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Get to know more about my background and expertise</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                    {/* Professional Summary */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="glass-card card-hover"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg">
                                <User size={28} />
                            </div>
                            <h3 className="text-2xl font-bold">Professional Summary</h3>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-6">
                            {profileData.summary}
                        </p>

                        {/* Quick Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="text-primary-400 font-semibold min-w-[120px]">Location:</span>
                                <span className="text-gray-300">{profileData.location}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-primary-400 font-semibold min-w-[120px]">Email:</span>
                                <a href={`mailto:${profileData.email}`} className="text-gray-300 hover:text-primary-400 transition-colors">
                                    {profileData.email}
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-primary-400 font-semibold min-w-[120px]">Phone:</span>
                                <span className="text-gray-300">{profileData.phone}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Core Competencies */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-6"
                    >
                        <div className="glass-card">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-gradient-to-br from-secondary-500 to-accent-600 rounded-lg">
                                    <Target size={28} />
                                </div>
                                <h3 className="text-2xl font-bold">Core Competencies</h3>
                            </div>

                            <div className="grid gap-3">
                                {profileData.coreCompetencies.map((competency, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-300 text-sm leading-relaxed">{competency}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="glass-card text-center card-hover"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="flex justify-center mb-4 text-primary-400">
                                {stat.icon}
                            </div>
                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
