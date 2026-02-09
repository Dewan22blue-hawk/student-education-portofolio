import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Server, Briefcase } from 'lucide-react';
import { skillsData, projectsData } from '../data/cvData';

/**
 * Home Page - Overview with Hero and preview sections
 */
const Home = () => {
    const featuredProjects = projectsData.slice(0, 3);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Hero />

            {/* About Preview */}
            <section className="py-20 px-4 md:px-8">
                <div className="container-custom max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                            Multi-Faceted Professional
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                            Tech-Savvy Student Affairs Professional with expertise in IT Development, System Administration,
                            and Network Engineering
                        </p>
                        <Link to="/about">
                            <motion.button
                                className="btn-secondary inline-flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More About Me
                                <ArrowRight size={18} />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Specializations */}
            <section className="py-20 px-4 md:px-8 bg-blue-50/30 dark:bg-gray-900/30">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        My Specializations
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Developer Card */}
                        <Link to="/developer">
                            <motion.div
                                className="glass-strong p-8 rounded-2xl border border-white/10 hover:border-primary-500/50 transition-all group"
                                whileHover={{ scale: 1.02, y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <Code className="w-12 h-12 text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl font-bold mb-3">Fullstack Developer</h3>
                                <p className="text-slate-600 dark:text-gray-400 mb-4">
                                    Modern web applications, system development, and software engineering
                                </p>
                                <div className="flex items-center gap-2 text-primary-400 font-medium">
                                    View Portfolio <ArrowRight size={16} />
                                </div>
                            </motion.div>
                        </Link>

                        {/* SysAdmin Card */}
                        <Link to="/sysadmin">
                            <motion.div
                                className="glass-strong p-8 rounded-2xl border border-white/10 hover:border-secondary-500/50 transition-all group"
                                whileHover={{ scale: 1.02, y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <Server className="w-12 h-12 text-secondary-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl font-bold mb-3">Network & SysAdmin</h3>
                                <p className="text-slate-600 dark:text-gray-400 mb-4">
                                    Network architecture, system administration, and infrastructure management
                                </p>
                                <div className="flex items-center gap-2 text-secondary-400 font-medium">
                                    View Portfolio <ArrowRight size={16} />
                                </div>
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Skills Preview */}
            <section className="py-20 px-4 md:px-8">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Core Competencies
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {skillsData.technical.slice(0, 6).map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className="glass p-4 rounded-xl"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-medium">{skill.name}</span>
                                    <span className="text-primary-400 text-sm">{skill.level}%</span>
                                </div>
                                <div className="h-2 bg-slate-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: index * 0.1 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-20 px-4 md:px-8 bg-slate-50 dark:bg-gray-900/30">
                <div className="container-custom max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-slate-600 dark:text-gray-400">Showcase of my recent work and contributions</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="glass-strong p-6 rounded-xl hover:border-primary-500/50 border border-white/10 transition-all"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{ y: -5 }}
                            >
                                <Briefcase className="w-10 h-10 text-primary-400 mb-4" />
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-sm text-primary-400 mb-3">{project.category}</p>
                                <p className="text-slate-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 2).map((tech, i) => (
                                        <span key={i} className="text-xs px-2 py-1 bg-primary-500/10 text-primary-400 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Link to="/projects">
                            <motion.button
                                className="btn-primary inline-flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View All Projects
                                <ArrowRight size={18} />
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-8">
                <div className="container-custom max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-strong p-12 rounded-2xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
                        <p className="text-xl text-slate-600 dark:text-gray-400 mb-8">
                            Ready to start your next project? Let's discuss how I can help.
                        </p>
                        <Link to="/contact">
                            <motion.button
                                className="btn-primary px-8 py-4 text-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get In Touch
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
