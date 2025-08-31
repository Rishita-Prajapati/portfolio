import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [counters, setCounters] = useState({ projects: 0, experience: 0, technologies: 0 });

  useEffect(() => {
    if (inView) {
      const targets = { projects: 50, experience: 3, technologies: 15 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      Object.keys(targets).forEach(key => {
        const increment = targets[key] / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= targets[key]) {
            current = targets[key];
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, stepTime);
      });
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </motion.div>
        <motion.div 
          ref={ref}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <p className="about-intro">
              I'm currently pursuing specialization in AI/ML with a passion for learning and developing 
              artificial intelligence solutions that can solve real-world problems.
            </p>
            <div className="about-details">
              {[
                {
                  icon: 'fas fa-brain',
                  title: 'Machine Learning Studies',
                  desc: 'Learning deep learning, neural networks, and ML algorithms'
                },
                {
                  icon: 'fas fa-code',
                  title: 'AI Application Development',
                  desc: 'Building AI applications and learning deployment techniques'
                },
                {
                  icon: 'fas fa-chart-line',
                  title: 'Data Science',
                  desc: 'Advanced analytics, visualization, and predictive modeling'
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="detail-item"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <i className={item.icon}></i>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div className="about-stats" variants={itemVariants}>
            {[
              { key: 'projects', label: 'Projects Built', suffix: '+' },
              { key: 'experience', label: 'Years Learning', suffix: '+' },
              { key: 'technologies', label: 'Technologies', suffix: '+' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number">{counters[stat.key]}{stat.suffix}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;