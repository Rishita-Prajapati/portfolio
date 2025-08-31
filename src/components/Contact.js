import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
        </motion.div>
        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Let's Connect</h3>
            <p>I'm always interested in discussing new opportunities and innovative AI projects.</p>
            <div className="contact-items">
              {[
                { icon: 'fas fa-envelope', text: 'prajapatirishita220505@gmail.com' },
                { icon: 'fas fa-phone', text: '+91 XXXXX XXXXX' },
                { icon: 'fas fa-map-marker-alt', text: 'India' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="contact-item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <i className={item.icon}></i>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
            <div className="social-links">
              {[
                { icon: 'fab fa-linkedin', href: '#' },
                { icon: 'fab fa-github', href: '#' },
                { icon: 'fab fa-twitter', href: '#' }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href}
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.form 
            className="contact-form" 
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <motion.div 
              className="form-group"
              whileFocus={{ scale: 1.02 }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div 
              className="form-group"
              whileFocus={{ scale: 1.02 }}
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div 
              className="form-group"
              whileFocus={{ scale: 1.02 }}
            >
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.button 
              type="submit" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;