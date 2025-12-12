import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Online Voting System",
    desc: "The Online Voting System is a secure, web-based application that enables administrators to create and manage elections while allowing registered voters to cast their votes online. Making it ideal for colleges, organizations, and small-scale governance.",
    img: "./src/assets/online.png",
    demo: "https://github.com/Kavita2005/Online-voting-system-deploy",
    github: "https://github.com/Kavita2005/Online-voting-system-deploy",
  },
  {
    title: "Driver Drowsiness Detection System",
    desc: "The Driver Drowsiness Detection System uses computer vision to monitor a driver’s eyes and detect fatigue, triggering alerts to prevent accidents. It’s ideal for long-distance drivers, transport companies, and vehicle safety applications.",
    img: "./src/assets/dd.jpeg",
    demo: "https://github.com/Kavita2005/Driver-Drowsiness-Detection",
    github: "https://github.com/Kavita2005/Driver-Drowsiness-Detection",
  },
  {
    title: "Code Club AGPIT",
    desc: "Code Club AGPIT showcases innovative coding projects and learning resources for students. It emphasizes hands-on practice, collaborative learning, and building full-stack and algorithmic projects to strengthen programming expertise.",
    img: "./src/assets/cc.jpg",
    demo: "https://codeclubagpit.vercel.app/",
    github: "https://github.com/Kavita2005/Code_Club_AGPIT",
  },
];

const Projects = () => {
  return (
    <section
      id="Projects"
      className="min-h-screen bg-black text-white px-10 pt-[100px] pb-16"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold text-[#00eaff]"
      >
        Projects
      </motion.h2>

      <div className="h-1 w-24 bg-[#00eaff] mx-auto my-6"></div>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="border border-[#00eaff] rounded-xl 
                       shadow-[0_0_15px_#00eaff] bg-black/40 
                       hover:bg-[#00eaff]/10 transition duration-300 
                       overflow-hidden"
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Text Content */}
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-[#00eaff]">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-300">{project.desc}</p>

              {/* Buttons */}
              <div className="mt-5 flex justify-between items-center">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00eaff] text-black font-semibold 
                             px-4 py-2 rounded-md hover:bg-transparent 
                             hover:text-[#00eaff] border border-[#00eaff] 
                             transition"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-3xl hover:text-[#00eaff] transition" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
