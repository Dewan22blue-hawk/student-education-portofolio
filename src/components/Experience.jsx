import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experienceData, volunteeringData } from '../data/cvData';

/**
 * Experience Component
 * Features: Vertical timeline with staggered animations,
 * expandable job descriptions, company info, achievements
 */
const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    const TimelineItem = ({ data, index }) => (
        <motion.div
            variants={itemVariants}
            className="relative pl-8 md:pl-12 pb-12 last:pb-0"
        >
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 ring-4 ring-gray-900"></div>

            {/* Timeline line */}
            <div className="absolute left-2 top-4 bottom-0 w-px bg-gradient-to-b from-primary-500/50 to-transparent"></div>

            {/* Content */}
            <div className="glass-card card-hover">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                            {data.position || data.role}
                        </h3>
                        <div className="flex items-center gap-2 text-primary-400 font-semibold mb-2">
                            <Briefcase size={18} />
                            <span>{data.company || data.organization}</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{data.period}</span>
                        </div>
                        {data.location && (
                            <div className="flex items-center gap-2">
                                <MapPin size={16} />
                                <span>{data.location}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Responsibilities */}
                {data.responsibilities && data.responsibilities.length > 0 && (
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Responsibilities:</h4>
                        <ul className="space-y-2">
                            {data.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-300 text-sm leading-relaxed">{resp}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Activities (for volunteering) */}
                {data.activities && data.activities.length > 0 && (
                    <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-3">Activities:</h4>
                        <ul className="space-y-2">
                            {data.activities.map((activity, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-secondary-400 mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-300 text-sm leading-relaxed">{activity}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Achievements */}
                {data.achievements && data.achievements.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                        <h4 className="text-sm font-semibold text-accent-400 mb-2">Achievements:</h4>
                        <ul className="space-y-1">
                            {data.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="text-accent-400">✓</span>
                                    <span className="text-gray-300 text-sm">{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </motion.div>
    );

    return (
        <section id="experience" className="section-padding bg-gray-900/50 relative overflow-hidden">
            {/* Background effect */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>

            <div className="container-custom relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Professional <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-gray-400 text-lg">My journey in technology and education</p>
                </motion.div>

                {/* Professional Experience */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView && "visible"}
                    className="mb-16"
                >
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <div className="w-1 h-8 bg-gradient-to-b from-primary-500 to-secondary-600 rounded-full"></div>
                        Work Experience
                    </h3>
                    <div className="max-w-4xl">
                        {experienceData.map((exp, index) => (
                            <TimelineItem key={exp.id} data={exp} index={index} />
                        ))}
                    </div>
                </motion.div>

                {/* Volunteering & Institutional Contributions */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView && "visible"}
                >
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <div className="w-1 h-8 bg-gradient-to-b from-secondary-500 to-accent-600 rounded-full"></div>
                        Volunteering & Institutional Contributions
                    </h3>
                    <div className="max-w-4xl">
                        {volunteeringData.map((vol, index) => (
                            <TimelineItem key={vol.id} data={vol} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
