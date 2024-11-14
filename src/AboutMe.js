import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';
import sabeel1 from './images/sabeel1.png';
import sabeel2 from './images/sabeel2.png';
import sabeel3 from './images/sabeel3.png';

const AboutMe = () => {
  return (
    <>
      <motion.div 
        className="header"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Sabeel Abboushi
      </motion.div>

      <motion.div 
        className="about-me"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          B.S. in Business and Economics at UCSD (Expected 2025)
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Experienced in marketing, youth leadership, and project management, 
          with a strong interest in social justice and community building.
        </motion.p>
        
        <div className="image-gallery">
          {[sabeel1, sabeel2, sabeel3].map((image, index) => (
            <motion.img 
              key={index}
              src={image} 
              alt={`Sabeel ${index + 1}`}
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
        
        <motion.div
          className="contact-info"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p>
            Email: <a href="mailto:sabeel.abboushi@gmail.com">sabeel.abboushi@gmail.com</a>
          </p>
          <p>
            LinkedIn: <a href="https://linkedin.com/in/sabeelabboushi" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/sabeelabboushi
            </a>
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}

export default AboutMe;
