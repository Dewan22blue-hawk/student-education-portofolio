import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Linkedin, Instagram } from 'lucide-react';
import { profileData, socialLinks } from '../data/cvData';

/**
 * Contact Component
 * Features: Contact form with validation, social links,
 * contact information display, animated feedback
 */
const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Simulate form submission
            console.log('Form data:', formData);
            setStatus('success');

            // Reset form after success
            setTimeout(() => {
                setFormData({ name: '', email: '', subject: '', message: '' });
                setStatus(null);
            }, 3000);
        } else {
            setStatus('error');
            setTimeout(() => setStatus(null), 3000);
        }
    };

    const getSocialIcon = (iconName) => {
        switch (iconName) {
            case 'linkedin': return <Linkedin size={24} />;
            case 'instagram': return <Instagram size={24} />;
            case 'mail': return <Mail size={24} />;
            default: return null;
        }
    };

    return (
        <section id="contact" className="section-padding bg-gray-900/50 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>

            <div className="container-custom relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Let's connect and discuss opportunities</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="glass-card">
                            <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Email</p>
                                        <a
                                            href={`mailto:${profileData.email}`}
                                            className="text-white hover:text-primary-400 transition-colors"
                                        >
                                            {profileData.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gradient-to-br from-secondary-500 to-accent-600 rounded-lg">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Phone</p>
                                        <a
                                            href={`tel:${profileData.phone}`}
                                            className="text-white hover:text-primary-400 transition-colors"
                                        >
                                            {profileData.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gradient-to-br from-accent-500 to-primary-600 rounded-lg">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Location</p>
                                        <p className="text-white">{profileData.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="glass-card">
                            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 glass-strong rounded-lg hover:bg-white/20 transition-all flex-1 text-center"
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className="mb-2 flex items-center justify-center">{getSocialIcon(social.icon)}</div>
                                        <p className="text-xs text-gray-400">{social.name}</p>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="glass-card space-y-6">
                            <h3 className="text-2xl font-bold gradient-text">Send a Message</h3>

                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'
                                        } rounded-lg focus:outline-none focus:border-primary-500 transition-all`}
                                    placeholder="John Doe"
                                />
                                {errors.name && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-sm mt-1"
                                    >
                                        {errors.name}
                                    </motion.p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'
                                        } rounded-lg focus:outline-none focus:border-primary-500 transition-all`}
                                    placeholder="john@example.com"
                                />
                                {errors.email && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-sm mt-1"
                                    >
                                        {errors.email}
                                    </motion.p>
                                )}
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-white/5 border ${errors.subject ? 'border-red-500' : 'border-white/10'
                                        } rounded-lg focus:outline-none focus:border-primary-500 transition-all`}
                                    placeholder="Project Inquiry"
                                />
                                {errors.subject && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-sm mt-1"
                                    >
                                        {errors.subject}
                                    </motion.p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className={`w-full px-4 py-3 bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'
                                        } rounded-lg focus:outline-none focus:border-primary-500 transition-all resize-none`}
                                    placeholder="Your message here..."
                                ></textarea>
                                {errors.message && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-sm mt-1"
                                    >
                                        {errors.message}
                                    </motion.p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                className="btn-primary w-full flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Send size={20} />
                                Send Message
                            </motion.button>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 p-4 bg-accent-500/20 border border-accent-500/50 rounded-lg text-accent-400"
                                >
                                    <CheckCircle size={20} />
                                    <span>Message sent successfully!</span>
                                </motion.div>
                            )}

                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400"
                                >
                                    <AlertCircle size={20} />
                                    <span>Please fix the errors above.</span>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
