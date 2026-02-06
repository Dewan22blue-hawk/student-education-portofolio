import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    Server, Cloud, Globe, FileText, Users, MessageCircle,
    Trophy, Zap, Award, CheckCircle
} from 'lucide-react';
import { skillsData, certificationsData } from '../data/cvData';

/**
 * Skills Component
 * Features: Categorized skill tags with icons, animated progress bars,
 * certifications display, interactive hover effects
 */
const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const getSkillIcon = (skillName) => {
        if (skillName.includes('Sistem') || skillName.includes('Administrasi')) return <Server size={18} />;
        if (skillName.includes('Cloud')) return <Cloud size={18} />;
        if (skillName.includes('Website') || skillName.includes('CMS')) return <Globe size={18} />;
        if (skillName.includes('Office') || skillName.includes('Digital')) return <FileText size={18} />;
        if (skillName.includes('Speaking') || skillName.includes('Komunikasi')) return <MessageCircle size={18} />;
        if (skillName.includes('Pelayanan') || skillName.includes('Mahasiswa')) return <Users size={18} />;
        return <CheckCircle size={18} />;
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const getCategoryIcon = (title) => {
        if (title === "Teknis") return <Server size={24} />;
        if (title === "Interpersonal") return <Users size={24} />;
        return <Zap size={24} />;
    };

    return (
        <section id="skills" className="section-padding relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>

            <div className="container-custom relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Skills & <span className="gradient-text">Expertise</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Technical and interpersonal competencies</p>
                </motion.div>

                {/* Skills Categories */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {skillsData.categories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: catIndex * 0.2 }}
                            className="glass-card"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg">
                                    {getCategoryIcon(category.title)}
                                </div>
                                <h3 className="text-2xl font-bold">{category.title}</h3>
                            </div>

                            <div className="space-y-3">
                                {category.skills.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                                        transition={{ delay: catIndex * 0.2 + idx * 0.1 }}
                                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
                                    >
                                        <div className="text-primary-400 group-hover:scale-110 transition-transform">
                                            {getSkillIcon(skill)}
                                        </div>
                                        <span className="text-gray-300 text-sm flex-1">{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Skills with Progress Bars */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="glass-card mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-gradient-to-br from-secondary-500 to-accent-600 rounded-lg">
                            <Trophy size={24} />
                        </div>
                        <h3 className="text-2xl font-bold">Technical Proficiency</h3>
                    </div>

                    <div className="grid gap-6">
                        {skillsData.technical.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.5 + index * 0.1 }}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-gray-300 font-medium">{skill.name}</span>
                                    <span className="text-primary-400 font-semibold">{skill.level}%</span>
                                </div>
                                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={isInView ? { width: `${skill.level}%` } : {}}
                                        transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-gradient-to-br from-accent-500 to-primary-600 rounded-lg">
                            <Award size={24} />
                        </div>
                        <h3 className="text-2xl font-bold">Certifications & Credentials</h3>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        {certificationsData.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                variants={itemVariants}
                                className="glass-card card-hover group"
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="p-2 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg group-hover:scale-110 transition-transform">
                                        <Award size={20} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-white text-sm mb-1 line-clamp-2">
                                            {cert.title}
                                        </h4>
                                        <p className="text-xs text-gray-400 mb-1">{cert.issuer}</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs px-2 py-1 bg-primary-500/20 text-primary-400 rounded">
                                                {cert.year}
                                            </span>
                                            <span className="text-xs text-gray-500">{cert.category}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
