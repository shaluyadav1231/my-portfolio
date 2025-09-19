import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import {IoArrowForward} from "react-icons/io5"
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
              
                <p className="text-sm md:text-md leading-tight">
          Passionate Frontend Developer building responsive and interactive websites.
I enjoy turning creative ideas into real web applications using modern technologies.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
              
                <p className="text-sm md:text-md leading-tight">
                  Eager to learn new technologies and contribute to meaningful projects.
Always excited to explore and implement new ideas in web development
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
               
                <p className="text-sm md:text-md leading-tight">
                Creating user-friendly web experiences with creativity and clean code.
Driven by curiosity, dedication, and a love for coding.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;