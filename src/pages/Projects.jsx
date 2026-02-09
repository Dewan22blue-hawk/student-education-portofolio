import { motion } from 'framer-motion';
import { projectsData } from '../data/cvData';
import { Briefcase, ExternalLink } from 'lucide-react';

/**
 * Projects Page - Showcase all projects
 */
const Projects = () => {
    return (
        <div className="min-h-screen py-20 px-4 md:px-8">
            <div className="container-custom max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="gradient-text">My Projects</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto">
                        A collection of my work, contributions, and achievements across various domains
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="glass-strong p-8 rounded-xl hover:border-primary-500/50 border border-white/10 transition-all group"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                        >
                            {/* Project Header */}
                            <div className="flex items-start justify-between mb-4">
                                <Briefcase className="w-12 h-12 text-primary-400 group-hover:scale-110 transition-transform" />
                                <span className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm">
                                    {project.category}
                                </span>
                            </div>

                            {/* Title & Role */}
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-secondary-400 font-medium mb-4">{project.role}</p>

                            {/* Description */}
                            <p className="text-slate-700 dark:text-gray-300 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-white dark:bg-gray-700/50 text-slate-700 dark:text-gray-300 rounded-lg text-sm border border-slate-300 dark:border-gray-700/50"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Link placeholder */}
                            <div className="flex items-center gap-2 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-sm font-medium">View Details</span>
                                <ExternalLink size={16} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 text-center glass p-8 rounded-xl"
                >
                    <p className="text-slate-600 dark:text-gray-400 mb-4">
                        Want to see more? Check out my specialized portfolios:
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="/developer" className="btn-secondary">Developer Portfolio</a>
                        <a href="/sysadmin" className="btn-secondary">SysAdmin Portfolio</a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
