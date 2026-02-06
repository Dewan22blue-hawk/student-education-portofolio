import { motion } from 'framer-motion';
import { Heart, ArrowUp, Linkedin, Instagram, Mail } from 'lucide-react';
import { profileData, socialLinks, navItems } from '../data/cvData';

/**
 * Footer Component
 * Features: Copyright info, social links, quick navigation,
 * back to top button
 */
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const getSocialIcon = (iconName) => {
        switch (iconName) {
            case 'linkedin': return <Linkedin size={20} />;
            case 'instagram': return <Instagram size={20} />;
            case 'mail': return <Mail size={20} />;
            default: return null;
        }
    };

    return (
        <footer className="relative bg-gray-950 border-t border-white/10">
            {/* Main Footer Content */}
            <div className="container-custom px-4 md:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-2xl font-bold gradient-text mb-4">
                            {profileData.name.split(',')[0]}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            {profileData.tagline}
                        </p>
                        <p className="text-gray-500 text-xs">
                            Building bridges between technology and education
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(item.href);
                                        }}
                                        className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
                        <div className="flex gap-3 mb-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 glass-strong rounded-lg hover:bg-white/20 transition-all"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={social.name}
                                >
                                    {getSocialIcon(social.icon)}
                                </motion.a>
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm">
                            <a
                                href={`mailto:${profileData.email}`}
                                className="hover:text-primary-400 transition-colors"
                            >
                                {profileData.email}
                            </a>
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} {profileData.name}. Made with{' '}
                        <Heart size={14} className="inline text-red-500" /> using React & Tailwind
                    </p>

                    <p className="text-gray-500 text-sm">
                        All rights reserved.
                    </p>
                </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 p-4 glass-strong rounded-full shadow-lg hover:bg-white/20 transition-all z-40"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Back to top"
            >
                <ArrowUp size={24} />
            </motion.button>
        </footer>
    );
};

export default Footer;
