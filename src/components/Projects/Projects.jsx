import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">

        {/* 1st Project */}
        <ProjectCard
          title="Amazon Clone"
          main="Built using HTML and CSS, featuring a responsive homepage with navigation bar, product listings, and footer."
          demo="https://shaluyadav1231.github.io/AMAZON_PROJECT/"
          source="https://github.com/shaluyadav1231/AMAZON_PROJECT"
        />

        {/* 2nd Project */}
        <ProjectCard
          title="Ecommerce website"
          main="A responsive eCommerce website built with React and Tailwind CSS, featuring smooth animations, interactive UI, and modern design for an engaging user experience."
          demo=" https://shaluyadav1231.github.io/ecommerce_website/"
          source="https://github.com/shaluyadav1231/ecommerce_website"
        />

        {/* 3rd Project */}
        <ProjectCard
          title="Rock Paper Scissors Game"
          main="Interactive Rock Paper Scissors game built with HTML, CSS, and JavaScript."
          demo="https://shaluyadav1231.github.io/Rock_paper_scissor/"
          source="https://github.com/shaluyadav1231/Rock_paper_scissor"
        />

      </div>
    </div>
  );
};

export default Projects;
