// About.jsx
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    
    <div className="min-h-screen bg-black text-white px-10 py-20 flex items-center justify-center">
       
      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-12">

        {/* Left Side - Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="https://i.pinimg.com/736x/64/fc/4d/64fc4dc8aa05356cd1c572335bb9b6aa.jpg"
            alt="Profile"
            className="w-60 h-60 rounded-full border-4 border-blue-500 shadow-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-2/3 space-y-6">
          <h1 className="text-4xl font-bold text-blue-500">About Me</h1>

          <p className="text-lg text-gray-300">
  Hi, I'm <span className="text-white font-semibold">Mayank Jain</span>, 
  a Computer Science student and Full Stack Web Developer. I build responsive
  and modern websites using React, Tailwind CSS, Node.js, and MongoDB.
</p>

<p className="text-gray-400">
  I am also exploring Generative AI and working with AI tools, prompts, and 
  learning how to build AI-powered applications.
</p>

<p className="text-gray-400">
  I have interest in Machine Learning and Deep Learning and I am learning data 
  science concepts, algorithms, and neural networks to build intelligent systems.
</p>
          {/* Skills */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js", "MongoDB", "Python","Langchain","ML","DL"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-600/20 border border-blue-500 rounded-full text-sm hover:bg-blue-500 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
           
            <Link to='/contact'><button className="px-6 py-2 border border-blue-500 rounded-lg hover:bg-blue-500 transition">
              Contact Me
            </button></Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;