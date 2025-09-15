import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaRocket, FaHeart } from 'react-icons/fa';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const features = [
    {
      icon: <FaCode className="text-3xl text-primary-600 dark:text-primary-400" />,
      title: 'Full Stack Development',
      description: 'Building end-to-end web applications with modern technologies and best practices.',
    },
    {
      icon: <FaBrain className="text-3xl text-accent-600 dark:text-accent-400" />,
      title: 'AI Integration',
      description: 'Implementing AI and machine learning solutions to enhance user experiences.',
    },
    {
      icon: <FaRocket className="text-3xl text-primary-600 dark:text-primary-400" />,
      title: 'Performance Focused',
      description: 'Creating fast, scalable, and efficient applications that deliver exceptional performance.',
    },
    {
      icon: <FaHeart className="text-3xl text-accent-600 dark:text-accent-400" />,
      title: 'User-Centric Design',
      description: 'Designing intuitive interfaces that prioritize user experience and accessibility.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer and AI enthusiast with a deep love for creating 
                innovative web applications and intelligent solutions. With expertise in modern web 
                technologies, I specialize in building scalable applications that bridge the gap 
                between cutting-edge AI technology and practical user needs.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in tech started with curiosity about how things work, and it has evolved 
                into a passion for building solutions that make a real difference. I believe in 
                clean code, user-centered design, and the power of technology to solve complex problems.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest AI developments, contributing 
                to open-source projects, or working on creative tech experiments that push the boundaries 
                of what's possible.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">
                    3+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Years Experience
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="card p-6 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
