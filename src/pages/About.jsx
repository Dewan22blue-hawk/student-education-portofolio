import { motion } from 'framer-motion';
import { profileData, educationData, volunteeringData, experienceData } from '../data/cvData';
import { Award, MapPin, Mail, Phone, Linkedin, Instagram } from 'lucide-react';

/**
 * About Page - Detailed biography and professional information
 */
const About = () => {
    return (
        <div className="min-h-screen py-20 px-4 md:px-8">
            <div className="container-custom max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="gradient-text">About Me</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto">
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
                    <h2 className="text-3xl font-bold mb-6">Professional Summary</h2>
                    <p className="text-slate-700 dark:text-gray-300 leading-relaxed text-lg">
                        {profileData.summary}
                    </p>
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
                                <p className="font-medium">{profileData.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="text-primary-400" size={20} />
                            <div>
                                <p className="text-sm text-slate-500 dark:text-gray-400">Phone</p>
                                <p className="font-medium">{profileData.phone}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="text-primary-400" size={20} />
                            <div>
                                <p className="text-sm text-slate-500 dark:text-gray-400">Location</p>
                                <p className="font-medium">{profileData.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Linkedin className="text-primary-400" size={20} />
                            <div>
                                <p className="text-sm text-slate-500 dark:text-gray-400">LinkedIn</p>
                                <p className="font-medium">{profileData.linkedin}</p>
                            </div>
                        </div>
                    </div >
                </motion.section >

                {/* Core Competencies */}
                < motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold mb-8">Core Competencies</h2>
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
                                <p>{competency}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section >

                {/* Education */}
                < motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold mb-8">Education</h2>
                    <div className="space-y-6">
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                className="glass-strong p-6 rounded-xl border-l-4 border-primary-500"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                            >
                                <div className="flex flex-wrap justify-between items-start mb-3">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                                        <p className="text-primary-400 font-medium">{edu.institution}</p>
                                    </div>
                                    <span className="text-sm text-gray-400 glass px-3 py-1 rounded-full">
                                        {edu.period}
                                    </span>
                                </div>
                                <p className="text-slate-600 dark:text-gray-400 mb-3">{edu.location}</p>
                                <p className="text-slate-700 dark:text-gray-300 leading-relaxed mb-4">{edu.description}</p>
                                {edu.achievements && edu.achievements.length > 0 && (
                                    <div className="space-y-2">
                                        {edu.achievements.map((achievement, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <Award className="text-accent-400 flex-shrink-0 mt-1" size={16} />
                                                <p className="text-sm text-accent-400">{achievement}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.section >

                {/* Experience */}
                < motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
                    <div className="space-y-6">
                        {experienceData.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                className="glass-strong p-6 rounded-xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 + index * 0.1 }}
                            >
                                <div className="flex flex-wrap justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                                        <p className="text-primary-400">{exp.company}</p>
                                        <p className="text-sm text-gray-400">{exp.location}</p>
                                    </div>
                                    <span className="text-sm text-gray-400 glass px-3 py-1 rounded-full">
                                        {exp.period}
                                    </span>
                                </div>
                                <ul className="space-y-2">
                                    {exp.responsibilities.map((resp, i) => (
                                        <li key={i} className="text-slate-700 dark:text-gray-300 flex items-start gap-2">
                                            <span className="text-primary-400 mt-1.5">•</span>
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.section >

                {/* Volunteering */}
                < motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <h2 className="text-3xl font-bold mb-8">Volunteering & Activities</h2>
                    <div className="space-y-6">
                        {volunteeringData.map((vol, index) => (
                            <motion.div
                                key={vol.id}
                                className="glass p-6 rounded-xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.1 + index * 0.1 }}
                            >
                                <div className="flex flex-wrap justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">{vol.role}</h3>
                                        <p className="text-secondary-400">{vol.organization}</p>
                                    </div>
                                    <span className="text-sm text-gray-400 glass px-3 py-1 rounded-full">
                                        {vol.period}
                                    </span>
                                </div>
                                <ul className="space-y-2">
                                    {vol.activities.map((activity, i) => (
                                        <li key={i} className="text-slate-700 dark:text-gray-300 flex items-start gap-2">
                                            <span className="text-secondary-400 mt-1.5">•</span>
                                            <span>{activity}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.section >
            </div >
        </div >
    );
};

export default About;
