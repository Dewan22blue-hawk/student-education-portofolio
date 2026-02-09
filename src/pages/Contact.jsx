import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Calendar } from 'lucide-react';
import { useState } from 'react';
import { profileData } from '../data/cvData';

/**
 * Contact Page - Bold Typography Design
 */
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:${profileData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Dari: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-white dark:bg-gray-950 text-slate-900 dark:text-white pt-24 pb-12">

            {/* Massive Background Text */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none select-none flex justify-center z-0">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-[25vw] leading-none font-black text-slate-100 dark:text-white/5 whitespace-nowrap"
                >
                    KONTAK
                </motion.h1>
            </div>

            <div className="container-custom max-w-6xl mx-auto px-4 md:px-8 relative z-10">

                {/* Hero Typography */}
                <div className="text-center mb-16 md:mb-24 mt-8 md:mt-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl font-bold text-gray-400 mb-4 tracking-widest uppercase"
                    >
                        Denny Irawan
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-tight uppercase"
                    >
                        Mari Ciptakan <br className="hidden md:block" /> Sesuatu yang Hebat
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        {/* Clickable Cal.com Link */}
                        <a
                            href="https://cal.com/dewan22"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 group cursor-pointer transition-transform hover:scale-105"
                            title="Booking Google Meet"
                        >
                            <h3 className="text-4xl md:text-6xl font-bold text-gray-300 dark:text-gray-700 uppercase mb-8 group-hover:text-primary-500 transition-colors">
                                Hubungi Saya
                            </h3>
                            <div className="mb-8 p-2 bg-primary-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                <Calendar size={32} />
                            </div>
                        </a>

                        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Saya selalu terbuka untuk peluang baru, kolaborasi, dan koneksi.
                            Punya proyek untuk didiskusikan atau hanya ingin menyapa? Jangan ragu untuk menghubungi!
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Social & Contact Details Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-col justify-center space-y-10"
                    >
                        <div className="space-y-8">
                            <div className="group">
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Email Saya</h4>
                                <a
                                    href={`mailto:${profileData.email}`}
                                    className="text-2xl md:text-3xl font-bold hover:text-primary-500 transition-colors flex items-center gap-2"
                                >
                                    {profileData.email}
                                </a>
                            </div>

                            <div className="group">
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Telepon Saya</h4>
                                <a
                                    href={`tel:${profileData.phone}`}
                                    className="text-2xl md:text-3xl font-bold hover:text-primary-500 transition-colors"
                                >
                                    {profileData.phone}
                                </a>
                            </div>

                            <div className="group">
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Sosial Media</h4>
                                <div className="flex gap-4">
                                    <a
                                        href={`https://linkedin.com/in/${profileData.linkedin}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-slate-100 dark:bg-white/5 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300"
                                    >
                                        <Linkedin size={24} />
                                    </a>
                                    <a
                                        href={`https://instagram.com/${profileData.instagram}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-slate-100 dark:bg-white/5 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300"
                                    >
                                        <Instagram size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Minimalist Form Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="border-b border-gray-300 dark:border-gray-700/50 p-2 focus-within:border-black dark:focus-within:border-white transition-colors">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="What's your name?"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent text-xl md:text-2xl p-2 outline-none placeholder:text-gray-400"
                                />
                            </div>
                            <div className="border-b border-gray-300 dark:border-gray-700/50 p-2 focus-within:border-black dark:focus-within:border-white transition-colors">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent text-xl md:text-2xl p-2 outline-none placeholder:text-gray-400"
                                />
                            </div>
                            <div className="border-b border-gray-300 dark:border-gray-700/50 p-2 focus-within:border-black dark:focus-within:border-white transition-colors">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent text-xl md:text-2xl p-2 outline-none placeholder:text-gray-400"
                                />
                            </div>
                            <div className="border-b border-gray-300 dark:border-gray-700/50 p-2 focus-within:border-black dark:focus-within:border-white transition-colors">
                                <textarea
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full bg-transparent text-xl md:text-2xl p-2 outline-none resize-none placeholder:text-gray-400"
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-black dark:bg-white text-white dark:text-black text-xl font-bold rounded-lg flex items-center justify-center gap-3 hover:opacity-90 transition-opacity mt-8"
                            >
                                Send Message <Send size={20} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
