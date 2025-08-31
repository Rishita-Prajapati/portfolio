import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Student Grade Predictor',
      description: 'Machine learning model to predict student performance using academic data.',
      technologies: ['Python', 'Scikit-learn', 'Pandas'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Image Classification Project',
      description: 'Deep learning project for classifying images using CNN architecture.',
      technologies: ['Python', 'TensorFlow', 'CNN'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Data Analysis Dashboard',
      description: 'Interactive dashboard for visualizing and analyzing datasets.',
      technologies: ['Python', 'Streamlit', 'Plotly'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Chatbot Learning Project',
      description: 'Simple chatbot implementation using natural language processing.',
      technologies: ['Python', 'NLTK', 'Flask'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      title: 'Stock Price Prediction',
      description: 'Time series analysis project for predicting stock market trends.',
      technologies: ['Python', 'Pandas', 'LSTM'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'Movie Recommendation System',
      description: 'Collaborative filtering project for movie recommendations.',
      technologies: ['Python', 'Pandas', 'Sklearn'],
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Learning Projects</h2>
          <div className="section-line"></div>
        </motion.div>
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div 
                className="project-image"
                style={{ background: project.gradient }}
              >
                <motion.div 
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="project-links">
                    <motion.a 
                      href="#" 
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fab fa-github"></i>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;