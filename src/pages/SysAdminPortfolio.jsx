import { motion } from 'framer-motion';
import { Server, Network, Shield, Cloud, HardDrive, BookOpen } from 'lucide-react';
import { certificationsData } from '../data/cvData';

/**
 * SysAdminPortfolio - Showcase of Network Engineering / System Administration work
 */
const SysAdminPortfolio = () => {
    const sysadminCerts = certificationsData.filter(cert =>
        ['Network Administration', 'Networking', 'Cybersecurity', 'Cloud Computing'].includes(cert.category)
    );

    const infrastructureSkills = [
        { name: 'Network Administration', level: 90, icon: Network },
        { name: 'System Administration', level: 90, icon: Server },
        { name: 'Cloud Infrastructure', level: 75, icon: Cloud },
        { name: 'Cybersecurity', level: 80, icon: Shield },
        { name: 'Server Management', level: 85, icon: HardDrive },
        { name: 'MikroTik RouterOS', level: 85, icon: Network },
    ];

    const infrastructureProjects = [
        {
            title: 'Campus Network Infrastructure',
            description: 'Mengelola dan mendukung infrastruktur jaringan kampus, termasuk konfigurasi router, switch, dan troubleshooting konektivitas',
            technologies: ['Network Configuration', 'Router Management', 'Troubleshooting'],
            role: 'Network Support Engineer',
        },
        {
            title: 'System Administration & Maintenance',
            description: 'Administrasi sistem digital kampus, pengelolaan server, backup data, dan pemeliharaan infrastruktur IT',
            technologies: ['Server Administration', 'System Maintenance', 'Data Backup'],
            role: 'System Administrator',
        },
        {
            title: 'Cloud Infrastructure Setup',
            description: 'Implementasi dan konfigurasi cloud computing infrastructure untuk kebutuhan akademik dan administratif',
            technologies: ['Google Cloud', 'Alibaba Cloud', 'Cloud Management'],
            role: 'Cloud Infrastructure Specialist',
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
                    SYSADMIN
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
                        className="inline-block p-4 bg-secondary-500/10 rounded-2xl mb-6 backdrop-blur-sm border border-secondary-500/20"
                    >
                        <Server className="w-12 h-12 md:w-16 md:h-16 text-secondary-500" />
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-tight uppercase">
                        Network & <span className="bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">SysAdmin</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
                        Architecting robust network infrastructure and managing enterprise-level systems with security and reliability
                    </p>
                </motion.div>

                {/* Infrastructure Skills */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold mb-8">Infrastructure Expertise</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {infrastructureSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className="glass-strong p-6 rounded-xl border border-secondary-500/20 hover:border-secondary-500/50 transition-all"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <skill.icon className="w-10 h-10 text-secondary-400 mb-4" />
                                <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
                                <div className="mb-2 flex justify-between text-sm">
                                    <span className="text-gray-400">Expertise</span>
                                    <span className="text-secondary-400">{skill.level}%</span>
                                </div>
                                <div className="h-2 bg-gray-800 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-secondary-500 to-accent-500"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Infrastructure Projects */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold mb-8">Infrastructure Projects</h2>
                    <div className="space-y-6">
                        {infrastructureProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="glass-strong p-8 rounded-xl border-l-4 border-secondary-500"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 + index * 0.15 }}
                                whileHover={{ x: 5 }}
                            >
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-secondary-400 font-medium mb-3">{project.role}</p>
                                </div>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-secondary-500/10 text-secondary-400 rounded-lg text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Network Diagram Visualization (Placeholder) */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold mb-8">Network Architecture</h2>
                    <div className="glass-strong p-12 rounded-xl text-center">
                        <Network className="w-24 h-24 text-secondary-400 mx-auto mb-6 opacity-50" />
                        <p className="text-gray-400 text-lg">
                            Network topology diagrams and infrastructure visualizations showcase complex system architectures
                        </p>
                        <p className="text-sm text-gray-500 mt-4">
                            Contact for detailed network architecture documentation
                        </p>
                    </div>
                </motion.section>

                {/* Certifications */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <h2 className="text-3xl font-bold mb-8">Network & Security Certifications</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {sysadminCerts.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                className="glass p-6 rounded-xl flex items-start gap-4 border border-accent-500/20"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.1 + index * 0.1 }}
                                whileHover={{ scale: 1.02, borderColor: 'rgba(52, 211, 153, 0.5)' }}
                            >
                                <BookOpen className="w-8 h-8 text-accent-400 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold mb-1">{cert.title}</h3>
                                    <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
                                    <span className="inline-block px-2 py-1 bg-accent-500/10 text-accent-400 rounded text-xs">
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

export default SysAdminPortfolio;
