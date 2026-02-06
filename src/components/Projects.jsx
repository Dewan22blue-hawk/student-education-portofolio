import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, X, GraduationCap, PartyPopper, Smartphone, Bot } from 'lucide-react';
import { projectsData } from '../data/cvData';

/**
 * Projects Component
 * Features: Grid layout with project cards, hover effects,
 * detail modal, technology badges
 */
const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedProject, setSelectedProject] = useState(null);

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
        <section id="projects" className="section-padding bg-gray-900/50 relative overflow-hidden">
            {/* Background effect */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>

            <div className="container-custom relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Notable contributions and initiatives</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"
                >
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="glass-card card-hover group cursor-pointer overflow-hidden"
                            onClick={() => setSelectedProject(project)}
                            whileHover={{ y: -10 }}
                        >
                            {/* Project Image Placeholder */}
                            <div className="relative h-48 mb-6 -mx-6 -mt-6 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-white/20">
                                        {project.category === "Academic System" && <GraduationCap size={80} strokeWidth={1.5} />}
                                        {project.category === "Event Coordination" && <PartyPopper size={80} strokeWidth={1.5} />}
                                        {project.category === "Digital Marketing" && <Smartphone size={80} strokeWidth={1.5} />}
                                        {project.category === "Educational Support" && <Bot size={80} strokeWidth={1.5} />}
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-80"></div>
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 text-xs font-semibold bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Role */}
                                <div className="mb-4">
                                    <span className="text-xs text-secondary-400 font-semibold">Role: </span>
                                    <span className="text-xs text-gray-300">{project.role}</span>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 3).map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 text-xs bg-primary-500/10 text-primary-300 rounded border border-primary-500/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-2 py-1 text-xs text-gray-400">
                                            +{project.technologies.length - 3} more
                                        </span>
                                    )}
                                </div>

                                {/* View Details */}
                                <div className="flex items-center gap-2 text-primary-400 text-sm font-semibold group-hover:gap-3 transition-all">
                                    <span>View Details</span>
                                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Project Detail Modal */}
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={() => setSelectedProject(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className="glass-strong rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 p-2 glass-strong rounded-full hover:bg-white/20 transition-all"
                        >
                            <X size={20} />
                        </button>

                        {/* Modal content */}
                        <div className="mb-4">
                            <span className="px-3 py-1 text-xs font-semibold bg-primary-500/20 text-primary-400 rounded-full border border-primary-500/30">
                                {selectedProject.category}
                            </span>
                        </div>

                        <h3 className="text-3xl font-bold mb-4 gradient-text">
                            {selectedProject.title}
                        </h3>

                        <div className="mb-6">
                            <span className="text-sm text-secondary-400 font-semibold">Role: </span>
                            <span className="text-sm text-gray-300">{selectedProject.role}</span>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-6">
                            {selectedProject.description}
                        </p>

                        <div className="mb-6">
                            <h4 className="text-lg font-semibold mb-3">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-2 text-sm bg-primary-500/10 text-primary-300 rounded-lg border border-primary-500/30"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

export default Projects;
