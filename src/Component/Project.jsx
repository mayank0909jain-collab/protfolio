// Projects.jsx
import React from "react";

const projects = [
  {
    title: "Blood Report Analyzer",
    desc: "Gen AI project to predict Disease using Langchain ,RAG and Python.",
    tech: ["Python", "Lagchain", "RAG"],
    link: "#",
  },
  {
    title: "Genrate Pepar",
    desc: "Gen AI project to Genrate Pepar from Previous Year Pepar.",
    tech: ["Python", "Lagchain", "RAG"],
    link: "#",
  },
  {
    title: "MERN Bookstore App",
    desc: "Full Stack MERN project with authentication, CRUD operations and MongoDB database.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio website built with React and Tailwind CSS.",
    tech: ["React", "Tailwind", "CSS"],
    link: "#",
  },
  {
     title: "House Price Prediction",
    desc: "Machine Learning project to predict house prices using Python and Scikit-learn.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    link: "#",
  },
  {
     title: "Fake News Detectiom",
    desc: "NLP project to predict Fake News using Python and Scikit-learn.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    link: "#",
  },
];

const Project = () => {
  return (
    <div className="min-h-screen bg-black text-white px-10 py-20">
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-12">
        My Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 hover:scale-105 transition duration-300 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
            <p className="text-gray-400 mb-4">{project.desc}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-blue-600/20 border border-blue-500 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              
              <a
                href="https://github.com/mayank0909jain-collab" target="blank"
                className="px-4 py-2 border border-blue-500 rounded-lg hover:bg-blue-500 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;