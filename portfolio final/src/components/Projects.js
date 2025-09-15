import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket, FaBrain, FaShoppingCart } from 'react-icons/fa';

const Projects = () => {
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

  const projects = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Platform',
      description: 'A full-stack e-commerce platform with AI-powered product recommendations, intelligent search, and automated customer support chatbot.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Django', 'PostgreSQL', 'TensorFlow', 'Tailwind CSS'],
      github: 'https://github.com/ayushraj/ai-ecommerce',
      live: 'https://ai-ecommerce-demo.vercel.app',
      icon: <FaShoppingCart className="text-3xl text-primary-600 dark:text-primary-400" />,
      featured: true
    },
    {
      id: 2,
      title: 'Smart Task Management System',
      description: 'An intelligent task management application with AI-powered priority suggestions, deadline predictions, and productivity analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'Framer Motion'],
      github: 'https://github.com/ayushraj/smart-tasks',
      live: 'https://smart-tasks.vercel.app',
      icon: <FaRocket className="text-3xl text-accent-600 dark:text-accent-400" />,
      featured: true
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      description: 'A modern real-time chat application with file sharing, emoji reactions, and group management features built with WebSocket technology.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/ayushraj/realtime-chat',
      live: 'https://realtime-chat-demo.vercel.app',
      icon: <FaCode className="text-3xl text-primary-600 dark:text-primary-400" />,
      featured: false
    },
    {
      id: 4,
      title: 'Machine Learning Dashboard',
      description: 'An interactive dashboard for visualizing machine learning model performance, training data, and predictions with real-time updates.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Python', 'FastAPI', 'Plotly', 'Docker'],
      github: 'https://github.com/ayushraj/ml-dashboard',
      live: 'https://ml-dashboard.vercel.app',
      icon: <FaBrain className="text-3xl text-accent-600 dark:text-accent-400" />,
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work, featuring full-stack applications and AI-powered solutions
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`card overflow-hidden group ${project.featured ? 'lg:col-span-2' : ''}`}
              >
                <div className={`relative ${project.featured ? 'lg:flex' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${project.featured ? 'lg:w-1/2' : ''}`}>
                    <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                      <div className="text-center">
                        {project.icon}
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Project Preview</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full text-gray-800 hover:bg-primary-600 hover:text-white transition-colors duration-200"
                        >
                          <FaGithub size={20} />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full text-gray-800 hover:bg-primary-600 hover:text-white transition-colors duration-200"
                        >
                          <FaExternalLinkAlt size={20} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className={`p-8 ${project.featured ? 'lg:w-1/2 lg:flex lg:flex-col lg:justify-center' : ''}`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        <FaGithub size={16} />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                      >
                        <FaExternalLinkAlt size={16} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="https://github.com/ayushraj"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <FaGithub size={20} />
              <span>View More on GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
