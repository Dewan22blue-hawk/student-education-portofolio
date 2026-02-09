import { motion } from 'framer-motion';
import { Code, Database, Globe, Terminal, Github, BookOpen } from 'lucide-react';
import { certificationsData, techStackSkills } from '../data/cvData';
import SkillsTicker from '../components/SkillsTicker';

/**
 * DeveloperPortfolio - Showcase of IT Development / Fullstack work
 */
const DeveloperPortfolio = () => {
    const developerCerts = certificationsData.filter(cert =>
        ['Programming', 'Cloud Computing', 'Quality Assurance', 'System Analysis'].includes(cert.category)
    );

    const techStack = [
        { name: 'React JS', level: 85, icon: Code },
        { name: 'Node.js', level: 80, icon: Terminal },
        { name: 'Database Management', level: 90, icon: Database },
        { name: 'Cloud Computing', level: 75, icon: Globe },
        { name: 'Python', level: 75, icon: Code },
        { name: 'JavaScript/TypeScript', level: 85, icon: Code },
    ];

    const developerProjects = [
        {
            title: 'Portfolio Website System',
            description: 'Modern portfolio platform dengan React, GSAP animations, dan responsive design',
            technologies: ['React', 'GSAP', 'Tailwind CSS', 'Vite'],
            role: 'Fullstack Developer',
        },
        {
            title: 'Academic Management System',
            description: 'Sistem manajemen akademik digital untuk administrasi kampus dan database mahasiswa',
            technologies: ['Database', 'Web Development', 'System Integration'],
            role: 'System Developer & Support',
        },
        {
            title: 'Content Management Platform',
            description: 'Platform untuk mengelola konten media sosial dan dokumentasi kegiatan kampus',
            technologies: ['CMS', 'Digital Media', 'Automation'],
            role: 'Developer & Content Manager',
        },
    ];

    return (
        <div className="min-h-screen py-20 px-4 md:px-8 relative overflow-hidden">
            {/* Massive Background Text */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none select-none flex justify-center z-0">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-[18vw] md:text-[22vw] leading-none font-black text-slate-200 dark:text-white/5 whitespace-nowrap"
                >
                    DEVELOPER
                </motion.h1>
            </div>

            <div className="container-custom max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16 md:mb-24 mt-8 md:mt-12"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="inline-block p-4 bg-primary-500/10 rounded-2xl mb-6 backdrop-blur-sm border border-primary-500/20"
                    >
                        <Code className="w-12 h-12 md:w-16 md:h-16 text-primary-500" />
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-tight uppercase">
                        Fullstack <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 dark:from-primary-400 dark:via-purple-400 dark:to-pink-400">Developer</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
                        Building modern web applications with clean code, innovative solutions, and scalable architecture
                    </p>
                </motion.div>

                {/* Tech Stack Ticker - Horizontal Auto-scroll */}
                <SkillsTicker skills={techStackSkills} />

                {/* Tech Stack */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16 mt-16"
                >
                    <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-white">Tech Stack & Expertise</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                className="glass-strong p-6 rounded-xl"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <tech.icon className="w-10 h-10 text-primary-400 mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{tech.name}</h3>
                                <div className="mb-2 flex justify-between text-sm">
                                    <span className="text-slate-600 dark:text-gray-400">Proficiency</span>
                                    <span className="text-primary-400">{tech.level}%</span>
                                </div>
                                <div className="h-2 bg-slate-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${tech.level}%` }}
                                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Featured Projects */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-white">Featured Development Projects</h2>
                    <div className="space-y-6">
                        {developerProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="glass-strong p-8 rounded-xl border-l-4 border-primary-500"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 + index * 0.15 }}
                                whileHover={{ x: 5 }}
                            >
                                <div className="flex flex-wrap justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">{project.title}</h3>
                                        <p className="text-primary-500 dark:text-primary-400 font-medium mb-3">{project.role}</p>
                                    </div>
                                    <Github className="w-6 h-6 text-slate-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 cursor-pointer transition-colors" />
                                </div>
                                <p className="text-slate-700 dark:text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-lg text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Certifications */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-white">Developer Certifications</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {developerCerts.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                className="glass p-6 rounded-xl flex items-start gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <BookOpen className="w-8 h-8 text-accent-500 dark:text-accent-400 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold mb-1 text-slate-800 dark:text-white">{cert.title}</h3>
                                    <p className="text-sm text-slate-600 dark:text-gray-400 mb-1">{cert.issuer}</p>
                                    <span className="inline-block px-2 py-1 bg-accent-500/10 text-accent-600 dark:text-accent-400 rounded text-xs">
                                        {cert.year}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default DeveloperPortfolio;
