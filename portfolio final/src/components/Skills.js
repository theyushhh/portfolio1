import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaPython, 
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaAws,
  FaDocker,
  FaBrain,
  FaCogs
} from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiPostgresql, SiTensorflow, SiPytorch } from 'react-icons/si';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-4xl text-orange-500" />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt className="text-4xl text-blue-500" />, level: 90 },
        { name: 'JavaScript', icon: <FaJs className="text-4xl text-yellow-500" />, level: 92 },
        { name: 'React', icon: <FaReact className="text-4xl text-blue-400" />, level: 88 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-cyan-500" />, level: 85 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', icon: <FaPython className="text-4xl text-green-500" />, level: 90 },
        { name: 'Django', icon: <SiDjango className="text-4xl text-green-600" />, level: 85 },
        { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-400" />, level: 80 },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-4xl text-blue-600" />, level: 88 },
        { name: 'REST APIs', icon: <FaDatabase className="text-4xl text-gray-600" />, level: 90 },
      ]
    },
    {
      title: 'AI/ML',
      skills: [
        { name: 'TensorFlow', icon: <SiTensorflow className="text-4xl text-orange-600" />, level: 75 },
        { name: 'PyTorch', icon: <SiPytorch className="text-4xl text-red-500" />, level: 70 },
        { name: 'AI Integration', icon: <FaBrain className="text-4xl text-purple-500" />, level: 80 },
        { name: 'Machine Learning', icon: <FaCogs className="text-4xl text-indigo-500" />, level: 75 },
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-4xl text-orange-600" />, level: 90 },
        { name: 'GitHub', icon: <FaGithub className="text-4xl text-gray-800 dark:text-white" />, level: 88 },
        { name: 'Docker', icon: <FaDocker className="text-4xl text-blue-500" />, level: 75 },
        { name: 'AWS', icon: <FaAws className="text-4xl text-orange-500" />, level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
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
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="card p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="group-hover:scale-110 transition-transform duration-200">
                            {skill.icon}
                          </div>
                          <span className="text-lg font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="card p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Additional Expertise
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Responsive Design', 'RESTful APIs', 'Database Design', 'Version Control',
                  'Agile Development', 'Problem Solving', 'Team Collaboration', 'Code Review',
                  'Testing & Debugging', 'Performance Optimization', 'Security Best Practices',
                  'UI/UX Design', 'Cross-browser Compatibility', 'Mobile Development'
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
