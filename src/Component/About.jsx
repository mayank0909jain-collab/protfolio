import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 py-12 md:py-20 flex items-center justify-center">

      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-12"
      >

        {/* Image */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="w-full md:w-1/3 flex justify-center"
        >
          <img
            src="/mayank2.jpeg"
            alt="Mayank Jain"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-2xl object-cover border border-gray-700 shadow-xl"
          />
        </motion.div>

        {/* Content */}
        <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">

          <h1 className="text-3xl md:text-4xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h1>

          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Hi, I’m Mayank Jain, a passionate Computer Science student and Full Stack Web Developer. 
            I specialize in building fast, scalable, and modern web applications using React, Tailwind CSS, Node.js, Express, and MongoDB. 
            My focus is on clean UI/UX, performance optimization, and writing maintainable and production-ready code.
          </p>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Currently, I’m exploring Generative AI, LangChain, and LLM-based applications. 
            I’m building AI-powered tools like chatbots, recommendation systems, and smart web apps.
          </p>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            I’m deeply passionate about Machine Learning, Deep Learning, and Data Science. 
            I enjoy working with Python, TensorFlow, PyTorch, and Scikit-learn.
          </p>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Beyond coding, I enjoy playing cricket, traveling, exploring new places, and riding bikes.
          </p>

          <p className="text-gray-500 leading-relaxed text-sm md:text-base">
            I believe in continuous learning, building impactful products, and improving myself every day.
          </p>

          {/* Skills */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-200 mb-2">Skills</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
              {["HTML","CSS","JavaScript","React","Tailwind","Node.js","MongoDB","Python","LangChain","ML","DL"].map(skill => (
                <span
                  key={skill}
                  className="px-2 py-1 text-xs md:text-sm border border-gray-700 rounded-md text-gray-300 hover:bg-white hover:text-black transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Button */}
          <Link to="/contact">
            <button className="mt-4 px-5 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition text-sm md:text-base">
              Contact Me
            </button>
          </Link>

        </div>
      </motion.div>

    </div>
  );
};

export default About;