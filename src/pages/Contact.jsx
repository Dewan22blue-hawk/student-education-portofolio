import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';
import { profileData } from '../data/cvData';

/**
 * Contact Page - Contact form and information
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
        // Create mailto link
        const mailtoLink = `mailto:${profileData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

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
                        <span className="gradient-text">Get In Touch</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Have a project in mind or just want to connect? I'd love to hear from you!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

                        {/* Contact Details */}
                        <div className="space-y-6 mb-12">
                            <div className="flex items-start gap-4 glass p-4 rounded-xl">
                                <Mail className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold mb-1">Email</h3>
                                    <a
                                        href={`mailto:${profileData.email}`}
                                        className="text-gray-400 hover:text-primary-400 transition-colors"
                                    >
                                        {profileData.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 glass p-4 rounded-xl">
                                <Phone className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold mb-1">Phone</h3>
                                    <a
                                        href={`tel:${profileData.phone}`}
                                        className="text-gray-400 hover:text-primary-400 transition-colors"
                                    >
                                        {profileData.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 glass p-4 rounded-xl">
                                <MapPin className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold mb-1">Location</h3>
                                    <p className="text-gray-400">{profileData.location}</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                            <div className="flex gap-4">
                                <motion.a
                                    href={`https://linkedin.com/in/${profileData.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 glass-strong rounded-xl hover:bg-primary-500/10 transition-all"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Linkedin className="w-6 h-6 text-primary-400" />
                                </motion.a>
                                <motion.a
                                    href={`https://instagram.com/${profileData.instagram}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 glass-strong rounded-xl hover:bg-secondary-500/10 transition-all"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Instagram className="w-6 h-6 text-secondary-400" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="glass-strong p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                            <div className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white dark:bg-gray-900/50 border border-slate-300 dark:border-gray-700/50 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white dark:bg-gray-900/50 border border-slate-300 dark:border-gray-700/50 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white dark:bg-gray-900/50 border border-slate-300 dark:border-gray-700/50 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full px-4 py-3 bg-white dark:bg-gray-900/50 border border-slate-300 dark:border-gray-700/50 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    className="w-full btn-primary flex items-center justify-center gap-2 py-4"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Send size={20} />
                                    Send Message
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
