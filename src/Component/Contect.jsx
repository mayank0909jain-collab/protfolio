import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactItems = [
    { id: 1, text: "Email: mayank0909jain@gmail.com" },
    { id: 2, text: "Phone: +91 9685363384" },
    { id: 3, text: "LinkedIn: linkedin.com/in/mayank" },
    { id: 4, text: "GitHub: https://github.com/mayank0909jain-collab" },
    { id: 5, text: "Portfolio: www.mayankportfolio.com" }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8, rotate: -5 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotate: 0,
      transition: { type: 'spring', stiffness: 120, damping: 12 } 
    }
  };

  return (
    <motion.div
      className="bg-black min-h-screen w-full flex flex-col items-center justify-center gap-8 p-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-5xl text-center font-extrabold text-white mb-10 tracking-wide neon-text"
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1 } }}
      >
        Contact Me With Out Hesitation
      </motion.h1>

      {contactItems.map((item) => (
        <motion.p
          key={item.id}
          className="text-2xl text-white font-semibold cursor-pointer neon-text px-6 py-3 rounded-lg border  shadow-neon hover:shadow-neon-glow transition-all duration-200"
          variants={itemVariants}
          whileHover={{ scale: 1.1, rotate: 2, textShadow: "0 0 20px #8b5cf6", color: "#8b5cf6" }}
        >
          {item.text}
        </motion.p>
      ))}
    </motion.div>
  )
}

export default Contact;