import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView && !animated) {
      setAnimated(true);
    }
  }, [inView, animated]);

  const skillCategories = [
    {
      title: 'AI/ML Frameworks',
      skills: [
        { name: 'TensorFlow', level: 75 },
        { name: 'PyTorch', level: 70 },
        { name: 'Scikit-learn', level: 80 }
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 70 },
        { name: 'R', level: 65 }
      ]
    },
    {
      title: 'Cloud & Tools',
      skills: [
        { name: 'AWS', level: 60 },
        { name: 'Docker', level: 55 },
        { name: 'Git', level: 75 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
    <section id="skills" className="skills">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-line"></div>
        </motion.div>
        <motion.div 
          ref={ref}
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="skill-category"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={animated ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;