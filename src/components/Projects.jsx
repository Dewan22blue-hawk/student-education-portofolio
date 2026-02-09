import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight, GraduationCap, PartyPopper, Smartphone, Bot, Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/cvData';

const ProjectItem = ({ project, isActive, onActivate }) => {
    return (
        <motion.div
            layout
            onClick={onActivate}
            onMouseEnter={onActivate}
            className={`relative overflow-hidden cursor-pointer border-b border-white/10 group transition-colors duration-500 ${isActive ? 'bg-primary-900/10' : 'bg-transparent hover:bg-white/5'
                }`}
            initial={false}
            animate={{ height: isActive ? 400 : 100 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        >
            {/* Background Image/Gradient (Active Only) */}
            <motion.div
                className="absolute inset-0 z-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Abstract Pattern / Icon Background */}
                <div className="absolute inset-0 opacity-10 flex items-center justify-center scale-150 transform translate-x-1/4">
                    {project.category === "Academic System" && <GraduationCap size={400} />}
                    {project.category === "Event Coordination" && <PartyPopper size={400} />}
                    {project.category === "Digital Marketing" && <Smartphone size={400} />}
                    {project.category === "Educational Support" && <Bot size={400} />}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
            </motion.div>

            {/* Content Container */}
            <div className={`relative z-10 w-full h-full p-6 md:p-8 flex flex-col justify-between ${isActive ? 'items-start' : 'items-center flex-row'}`}>

                {/* Header Section (Title & Category) */}
                <div className="flex flex-col gap-1 w-full relative">
                    <div className="flex justify-between items-center w-full">
                        <motion.h3
                            layout="position"
                            className={`font-bold transition-all duration-500 ${isActive
                                ? 'text-4xl md:text-5xl text-white mb-2'
                                : 'text-2xl text-gray-300 group-hover:text-white'
                                }`}
                        >
                            {project.title}
                        </motion.h3>

                        {/* Mobile Arrow (or Desktop Inactive Arrow) */}
                        <motion.div
                            layout="position"
                            className={`transition-transform duration-500 ${isActive ? 'opacity-0 hidden' : 'opacity-100'}`}
                        >
                            <ArrowUpRight className="text-gray-500 group-hover:text-white" size={28} />
                        </motion.div>
                    </div>

                    <motion.p
                        layout="position"
                        className={`text-lg transition-colors duration-500 ${isActive ? 'text-primary-300' : 'text-gray-500 group-hover:text-gray-400'}`}
                    >
                        {project.category}
                    </motion.p>
                </div>

                {/* Expanded Content (Description & Tags) */}
                <AnimatePresence>
                    {isActive && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="w-full mt-auto"
                        >
                            <p className="text-gray-300 max-w-2xl text-lg leading-relaxed mb-6">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap items-center justify-between gap-6 w-full">
                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 4).map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-sm bg-white/10 text-white rounded-full border border-white/10 backdrop-blur-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Call to Action Links */}
                                <div className="flex items-center gap-4">
                                    <button className="flex items-center gap-2 px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                                        View Project <ArrowUpRight size={18} />
                                    </button>
                                    <button className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
                                        <Github size={20} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Active State Details Button/Icon (Desktop) */}
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute top-8 right-8"
                    >
                        <ArrowUpRight className="text-white opacity-50" size={48} />
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

/**
 * Projects Component
 * Features: Interactive Accordion/List layout inspired by ifalf.com
 */
const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeId, setActiveId] = useState(projectsData[0]?.id || null);

    return (
        <section id="projects" className="section-padding bg-gray-900/50 relative overflow-hidden">
            {/* Background effect */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-500/5 rounded-full blur-[100px]"></div>

            {/* Massive Background Text - Consistent with Contact.jsx */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none select-none flex justify-center z-0">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-[20vw] md:text-[25vw] leading-none font-black text-slate-200 dark:text-white/5 whitespace-nowrap"
                >
                    PROJECTS
                </motion.h1>
            </div>

            <div className="container-custom relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24 text-center mt-12 md:mt-20"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl font-bold text-gray-400 mb-4 tracking-widest uppercase"
                    >
                        My Portfolio
                    </motion.p>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-tight uppercase">
                        Featured <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Works</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A selection of curated projects showcasing my technical expertise and creative problem-solving.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="border-t border-white/10"
                >
                    {projectsData.map((project) => (
                        <ProjectItem
                            key={project.id}
                            project={project}
                            isActive={activeId === project.id}
                            onActivate={() => setActiveId(project.id)}
                        />
                    ))}
                </motion.div>

                <div className="mt-16 text-center">
                    <button className="text-gray-400 hover:text-white transition-colors underline underline-offset-4 decoration-1">
                        View All Archives
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
