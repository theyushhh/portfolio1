import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      name: 'GitHub',
      url: 'https://github.com/ayushraj',
      color: 'hover:text-gray-800 dark:hover:text-white'
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ayushraj',
      color: 'hover:text-blue-600'
    },
    {
      icon: <FaTwitter className="text-xl" />,
      name: 'Twitter',
      url: 'https://twitter.com/ayushraj',
      color: 'hover:text-blue-400'
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      name: 'Email',
      url: 'mailto:ayushraj@example.com',
      color: 'hover:text-primary-600 dark:hover:text-primary-400'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-primary-400 mb-4">
                  Ayush Raj
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Full Stack Developer & AI Enthusiast passionate about building 
                  innovative web applications and intelligent solutions that make a difference.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target={social.name !== 'Email' ? '_blank' : '_self'}
                    rel={social.name !== 'Email' ? 'noopener noreferrer' : ''}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-gray-800 rounded-lg text-gray-400 ${social.color} transition-colors duration-200`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">
                Get In Touch
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a
                    href="mailto:ayushraj@example.com"
                    className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                  >
                    ayushraj@example.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Location</p>
                  <p className="text-gray-300">San Francisco, CA</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Available for</p>
                  <p className="text-gray-300">Freelance & Full-time</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-gray-800 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <span>© {currentYear} Ayush Raj. Made with</span>
                <FaHeart className="text-red-500 animate-pulse" />
                <span>and lots of coffee.</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Built with React & Tailwind CSS</span>
                <span>•</span>
                <span>Deployed on Vercel</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
