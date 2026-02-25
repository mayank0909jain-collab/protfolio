import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactItems = [
    { id: 1, text: "Email: mayank0909jain@gmail.com" },
    { id: 2, text: "Phone: +91 9685363384" },
    { id: 3, text: "LinkedIn: linkedin.com/in/mayank" },
    { id: 4, text: "GitHub: github.com/mayank0909jain-collab" },
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
      transition: { type: "spring", stiffness: 120, damping: 12 }
    }
  };

  return (
    <motion.div
      className="bg-black min-h-screen w-full flex flex-col items-center justify-center gap-6 px-4 md:px-10 py-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Title */}
      <motion.h1
        className="text-3xl md:text-5xl text-center font-extrabold text-white mb-6 tracking-wide neon-text"
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1 } }}
      >
        Contact Me Without Hesitation
      </motion.h1>

      {/* Contact Items */}
      {contactItems.map((item) => (
        <motion.p
          key={item.id}
          className="text-base sm:text-lg md:text-2xl text-white font-semibold cursor-pointer neon-text px-4 md:px-6 py-2 md:py-3 rounded-lg border shadow-neon hover:shadow-neon-glow transition-all duration-200 text-center break-words"
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            rotate: 1,
            textShadow: "0 0 20px #8b5cf6",
            color: "#8b5cf6"
          }}
        >
          {item.text}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default Contact;