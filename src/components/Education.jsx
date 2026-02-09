import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award, ChevronDown } from 'lucide-react';
import { educationData } from '../data/cvData';

const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const EducationAccordionItem = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            variants={itemVariants}
            className="relative pl-8 md:pl-12 pb-8 last:pb-0"
        >
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-secondary-500 to-accent-600 ring-4 ring-gray-950 z-10"></div>

            {/* Timeline line */}
            <div className="absolute left-2 top-4 bottom-0 w-px bg-gradient-to-b from-secondary-500/50 to-transparent"></div>

            {/* Accordion Card */}
            <div
                className={`glass-card card-hover cursor-pointer transition-all duration-300 ${isOpen ? 'ring-2 ring-secondary-500/30 bg-white/5' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-gradient-to-br from-secondary-500 to-accent-600 rounded-lg shadow-lg shadow-secondary-500/20">
                                <GraduationCap size={20} className="text-white" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-secondary-400 transition-colors">
                                {data.degree}
                            </h3>
                        </div>
                        <p className="text-primary-400 font-semibold pl-12 lg:pl-0 lg:ml-14">{data.institution}</p>
                    </div>

                    <div className="flex items-center justify-between lg:justify-end gap-4 text-sm text-gray-400 lg:text-right pl-12 lg:pl-0">
                        <div className="flex flex-col gap-1 items-start lg:items-end">
                            <div className="flex items-center gap-2">
                                <Calendar size={14} />
                                <span>{data.period}</span>
                            </div>
                            {data.location && (
                                <div className="flex items-center gap-2">
                                    <MapPin size={14} />
                                    <span>{data.location}</span>
                                </div>
                            )}
                        </div>
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-secondary-400 p-1 rounded-full bg-white/5"
                        >
                            <ChevronDown size={20} />
                        </motion.div>
                    </div>
                </div>

                {/* Expandable Body */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="pt-4 mt-4 border-t border-white/10 lg:ml-14">
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {data.description}
                                </p>

                                {/* Achievements */}
                                {data.achievements && data.achievements.length > 0 && (
                                    <div className="pt-4 border-t border-white/5 bg-white/5 rounded-lg p-3">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Award size={18} className="text-accent-400" />
                                            <h4 className="font-semibold text-accent-400">Key Achievements:</h4>
                                        </div>
                                        <ul className="space-y-2">
                                            {data.achievements.map((achievement, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <span className="text-accent-400 mt-1 text-xs">●</span>
                                                    <span className="text-gray-300 text-sm">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

/**
 * Education Component
 * Feature: Vertical timeline with staggered animations,
 * interactive accordion-style expandable details.
 */
const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <section id="education" className="section-padding relative overflow-hidden">
            {/* Background effect */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>

            <div className="container-custom relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Education</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Academic journey and achievements</p>
                </motion.div>

                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {educationData.map((edu) => (
                        <EducationAccordionItem key={edu.id} data={edu} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
