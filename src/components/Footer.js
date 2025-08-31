import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <p>&copy; 2024 Rishita Prajapati. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;