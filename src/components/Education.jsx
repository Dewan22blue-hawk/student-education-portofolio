import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { educationData } from '../data/cvData';

/**
 * Education Component
 * Features: Education timeline, degree details, achievements,
 * institution information with animations
 */
const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6 }
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

                <div className="max-w-4xl mx-auto">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            variants={itemVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            transition={{ delay: index * 0.3 }}
                            className="relative pl-8 md:pl-12 pb-12 last:pb-0"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-secondary-500 to-accent-600 ring-4 ring-gray-950"></div>

                            {/* Timeline line */}
                            <div className="absolute left-2 top-4 bottom-0 w-px bg-gradient-to-b from-secondary-500/50 to-transparent"></div>

                            {/* Content */}
                            <div className="glass-card card-hover">
                                {/* Header */}
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-3 bg-gradient-to-br from-secondary-500 to-accent-600 rounded-lg">
                                                <GraduationCap size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-bold text-white">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-primary-400 font-semibold">{edu.institution}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 text-sm text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            <span>{edu.period}</span>
                                        </div>
                                        {edu.location && (
                                            <div className="flex items-center gap-2">
                                                <MapPin size={16} />
                                                <span>{edu.location}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {edu.description}
                                </p>

                                {/* Achievements */}
                                {edu.achievements && edu.achievements.length > 0 && (
                                    <div className="pt-4 border-t border-white/10">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Award size={20} className="text-accent-400" />
                                            <h4 className="font-semibold text-accent-400">Achievements:</h4>
                                        </div>
                                        <ul className="space-y-2">
                                            {edu.achievements.map((achievement, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <span className="text-accent-400 mt-1">✓</span>
                                                    <span className="text-gray-300 text-sm">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
