import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Content = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [text,changetext] = useState("About me")

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const chalo = ()=>{
        changetext("Check it out 🚀")
    }

    const back = ()=>{
        changetext("About me")
    }


  return (
    <div className="relative w-full text-white mt-6 px-16 py-10 flex justify-between items-center bg-black overflow-hidden fixed">

      {/* Mouse Glow Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 400px at ${pos.x}px ${pos.y}px, rgba(40,58,138,0.4), transparent 70%)`,
          transition: "0.1s",
        }}
      ></div>

      {/* Text Section */}
      <div className="w-[45%] relative z-10">
        <h1 className="text-5xl font-bold hover:scale-110 transition duration-300 origin-left">
          Hello welcome to my portfolio..
        </h1>

        <p className="py-6 text-xl font-medium hover:scale-105 transition duration-300 origin-left">
          Hello, I’m Mayank Jain, an AI/ML Engineer and Full-Stack Web Developer passionate about building intelligent and scalable applications.
        </p>

        <Link to='/about'><button onMouseEnter={chalo} onMouseLeave={back} className="border-2 border-white px-3 py-2 rounded-lg">{text}</button></Link>
        
      </div>

      {/* Image Section */}
      <div className="w-[45%] flex justify-end relative z-10">
        <img
          src="https://i.pinimg.com/1200x/c9/dd/60/c9dd60385fbc56f676ebcd7c5369eb5e.jpg"
          alt="Book"
          className="w-[70%] h-auto rounded-lg shadow-lg mt-8 hover:scale-110 transition duration-500 origin-right"
        />
      </div>
    </div>
  );
};

export default Content;