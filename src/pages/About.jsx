import { motion } from 'framer-motion';
import { profileData } from '../data/cvData';
import { Award, MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import ScrollTextReveal from '../components/ScrollTextReveal';
import Education from '../components/Education';
import Experience from '../components/Experience';

/**
 * About Page - Detailed biography and professional information
 */
const About = () => {
    return (
        <div className="min-h-screen pt-24 md:pt-32 pb-12 relative overflow-hidden">
            {/* Massive Background Text - Consistent with Contact.jsx */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none select-none flex justify-center z-0">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-[25vw] leading-none font-black text-slate-100 dark:text-white/5 whitespace-nowrap"
                >
                    ABOUT
                </motion.h1>
            </div>

            {/* Profile Section */}
            <div className="container-custom max-w-5xl mx-auto px-4 md:px-8 mb-20 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16 md:mb-24 mt-8"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl font-bold text-gray-400 mb-4 tracking-widest uppercase"
                    >
                        Biography
                    </motion.p>
                    <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-tight uppercase">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 dark:from-primary-400 dark:via-purple-400 dark:to-pink-400">Me</span>
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto font-medium">
                        {profileData.tagline}
                    </p>
                </motion.div>

                {/* Profile Summary */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-strong p-8 md:p-12 rounded-2xl mb-12"
                >
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Professional Summary</h2>
                    <ScrollTextReveal
                        content={profileData.summary}
                        className="text-lg font-medium leading-relaxed"
                    />
                </motion.section>

                {/* Contact Info */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass p-6 rounded-xl mb-12"
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-center gap-3">
                            <Mail className="text-primary-400" size={20} />
                            <div>
                                <p className="text-sm text-slate-500 dark:text-gray-400">Email</p>
                                <p className="font-medium text-gray-800 dark:text-gray-200">{profileData.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="text-primary-400" size={20} />
                            <div>
                                <p className="text-sm text-slate-500 dark:text-gray-400">Phone</p>
                                <p className="font-medium text-gray-800 dark:text-gray-200">{profileData.phone}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="text-primary-400" size={20} />
                            <div>
                                <p className="text-sm text-slate-500 dark:text-gray-400">Location</p>
                                <p className="font-medium text-gray-800 dark:text-gray-200">{profileData.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Linkedin className="text-primary-400" size={20} />
                            <div>
                                <p className="text-sm text-slate-500 dark:text-gray-400">LinkedIn</p>
                                <p className="font-medium text-gray-800 dark:text-gray-200">{profileData.linkedin}</p>
                            </div>
                        </div>
                    </div >
                </motion.section >

                {/* Core Competencies */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Core Competencies</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {profileData.coreCompetencies.map((competency, index) => (
                            <motion.div
                                key={index}
                                className="glass p-4 rounded-lg flex items-start gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                            >
                                <Award className="text-primary-400 flex-shrink-0 mt-1" size={20} />
                                <p className="text-gray-700 dark:text-gray-300">{competency}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section >
            </div>

            {/* Timelines Section - Full Width Components */}
            <div className="space-y-0">
                <Education />
                <Experience />
            </div>
        </div>
    );
};

export default About;
