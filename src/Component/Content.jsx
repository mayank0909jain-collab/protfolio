import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Content = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [text, setText] = useState("About me");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const chalo = () => setText("Check it out 🚀");
  const back = () => setText("About me");

  return (
    <div className="relative w-full text-white mt-6 px-6 md:px-16 py-10 flex flex-col md:flex-row justify-between items-center bg-black overflow-hidden">

      {/* Mouse Glow Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 400px at ${pos.x}px ${pos.y}px, rgba(40,58,138,0.4), transparent 70%)`,
          transition: "0.1s",
        }}
      ></div>

      {/* Text Section */}
      <div className="w-full md:w-[45%] relative z-10 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold hover:scale-110 transition duration-300 origin-left">
          Hello welcome to my portfolio..
        </h1>

        <p className="py-6 text-base md:text-xl font-medium hover:scale-105 transition duration-300 origin-left">
          Hello, I’m Mayank Jain, an AI/ML Engineer and Full-Stack Web Developer passionate about building intelligent and scalable applications.
        </p>

        <Link to="/about">
          <button
            onMouseEnter={chalo}
            onMouseLeave={back}
            className="border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
          >
            {text}
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[45%] flex justify-center md:justify-end relative z-10 mt-8 md:mt-0">
        <img
          src="https://i.pinimg.com/1200x/c9/dd/60/c9dd60385fbc56f676ebcd7c5369eb5e.jpg"
          alt="Book"
          className="w-[80%] md:w-[70%] h-auto rounded-lg shadow-lg hover:scale-110 transition duration-500"
        />
      </div>
    </div>
  );
};

export default Content;