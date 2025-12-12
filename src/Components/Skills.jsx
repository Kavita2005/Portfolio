import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaHtml5, FaCss3, FaJs, FaBootstrap,
  FaNodeJs, FaPython, FaPhp, FaJava
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiExpress, SiC, SiCplusplus } from "react-icons/si";

const skillsData = [
  {
    type: "Frontend",
    skills: [
      { name: "React JS", icon: <FaReact /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3 /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Tailwind", icon: <SiTailwindcss /> }
    ]
  },
  {
    type: "Backend",
    skills: [
      { name: "Node JS", icon: <FaNodeJs /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Python", icon: <FaPython /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Express JS", icon: <SiExpress /> },
      { name: "PHP", icon: <FaPhp /> }
    ]
  },
  {
    type: "Language",
    skills: [
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJs /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="Skills" className="py-20 bg-black text-white px-6 md:px-24">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-[#00eaff]"
      >
        Skills
      </motion.h2>
      <div className="h-1 w-24 bg-[#00eaff] mx-auto my-6"></div>

      {/* SKILL BOXES */}
      <div className="flex flex-col items-center gap-10 mt-10">

        {/* Frontend + Backend */}
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {skillsData.slice(0, 2).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-[340px] border border-[#00eaff] bg-black/40 rounded-xl p-6 
                         shadow-[0_0_15px_#00eaff] hover:bg-[#00eaff]/10 transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-center text-[#00eaff]">
                {item.type}
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border border-[#00eaff] rounded-lg text-sm 
                               flex items-center gap-2 hover:scale-110 transition-all duration-300"
                  >
                    <span className="text-[#00eaff] text-lg">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-[340px] border border-[#00eaff] bg-black/40 rounded-xl p-6 
                     shadow-[0_0_15px_#00eaff] hover:bg-[#00eaff]/10 transition"
        >
          <h3 className="text-xl font-semibold mb-4 text-center text-[#00eaff]">
            {skillsData[2].type}
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {skillsData[2].skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 border border-[#00eaff] rounded-lg text-sm 
                           flex items-center gap-2 hover:scale-110 transition-all duration-300"
              >
                <span className="text-[#00eaff] text-lg">{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
