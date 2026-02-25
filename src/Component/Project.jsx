import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Blood Report Analyzer",
    desc: "Gen AI project to predict Disease using Langchain ,RAG and Python.",
    tech: ["Python", "Langchain", "RAG"],
  },
  {
    title: "Generate Paper",
    desc: "Gen AI project to Generate Paper from Previous Year Papers.",
    tech: ["Python", "Langchain", "RAG"],
  },
  {
    title: "MERN Bookstore App",
    desc: "Full Stack MERN project with authentication, CRUD operations and MongoDB database.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio website built with React and Tailwind CSS.",
    tech: ["React", "Tailwind", "CSS"],
  },
  {
    title: "House Price Prediction",
    desc: "Machine Learning project to predict house prices using Python and Scikit-learn.",
    tech: ["Python", "Pandas", "Scikit-learn"],
  },
  {
    title: "Fake News Detection",
    desc: "NLP project to predict Fake News using Python and Scikit-learn.",
    tech: ["Python", "Pandas", "Scikit-learn"],
  },
  
];

// container animation
const container = {
  show: { transition: { staggerChildren: 0.2 } },
};

// cards animation
const card = {
  hidden: { opacity: 0, y: 100, scale: 0.8 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const Project = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://i.pinimg.com/736x/45/ae/55/45ae55f899864d67a24e7b744889dab0.jpg";
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-16 py-20">

      {/* 🔥 HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        My Projects 🚀
      </motion.h1>

      <div className="flex items-center justify-center gap-10">

        {/* LEFT PROJECTS */}
        {loaded && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-10 w-[30%]"
          >
            {projects.slice(0, 3).map((p, i) => (
              <motion.div
                key={i}
                variants={card}
                whileHover={{ scale: 1.1, rotateY: 10 }}
                className="bg-gray-900/60 backdrop-blur-xl p-6 rounded-2xl text-lg shadow-xl border border-blue-500/20 hover:border-blue-500 transition"
              >
                <h2 className="text-2xl font-bold text-blue-400">{p.title}</h2>
                <p className="text-gray-400 mt-2">{p.desc}</p>
                <a href="https://github.com/mayank0909jain-collab"
               target="blank"
               >
                 <button className="m-2 border-2 border-blue-500 px-3 py-1 hover:bg-blue-400" >Git hub
                 
                 </button>
               </a>
               
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* 🔥 CENTER IMAGE WITH FLOAT ANIMATION */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="w-[35%] flex justify-center"
        >
          <img
            src="https://i.pinimg.com/736x/45/ae/55/45ae55f899864d67a24e7b744889dab0.jpg"
            className="w-full rounded-3xl shadow-[0_0_40px_blue]"
          />
        </motion.div>

        {/* RIGHT PROJECTS */}
        {loaded && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-10 w-[30%]"
          >
            {projects.slice(3, 6).map((p, i) => (
              <motion.div
                key={i}
                variants={card}
                whileHover={{ scale: 1.1, rotateY: -10 }}
                className="bg-gray-900/60 backdrop-blur-xl p-6 rounded-2xl text-lg shadow-xl border border-purple-500/20 hover:border-purple-500 transition"
              >
                <h2 className="text-2xl font-bold text-purple-400">{p.title}</h2>
                <p className="text-gray-400 mt-2">{p.desc}</p>
               <a href="https://github.com/mayank0909jain-collab"
               target="blank"
               >
                 <button className="m-2 border-2 border-purple-500 px-3 py-1 hover:bg-black" >Git hub</button>
               </a>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default Project;