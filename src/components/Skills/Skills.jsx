import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">
        Skills
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        <div className="p-6 bg-zinc-950 rounded-2xl flex flex-col items-center shadow-lg hover:scale-105 transition-transform">
          <FaHtml5 color="#E34F26" size={60} />
          <p className="text-white mt-3 font-semibold">HTML5</p>
        </div>

        <div className="p-6 bg-zinc-950 rounded-2xl flex flex-col items-center shadow-lg hover:scale-105 transition-transform">
          <FaCss3 color="#1572B6" size={60} />
          <p className="text-white mt-3 font-semibold">CSS3</p>
        </div>

        <div className="p-6 bg-zinc-950 rounded-2xl flex flex-col items-center shadow-lg hover:scale-105 transition-transform">
          <SiTailwindcss color="#06B6D4" size={60} />
          <p className="text-white mt-3 font-semibold">Tailwind CSS</p>
        </div>

        <div className="p-6 bg-zinc-950 rounded-2xl flex flex-col items-center shadow-lg hover:scale-105 transition-transform">
          <FaJs color="#F7DF1E" size={60} />
          <p className="text-white mt-3 font-semibold">JavaScript</p>
        </div>

        <div className="p-6 bg-zinc-950 rounded-2xl flex flex-col items-center shadow-lg hover:scale-105 transition-transform">
          <FaReact color="#61DAFB" size={60} />
          <p className="text-white mt-3 font-semibold">React JS</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;