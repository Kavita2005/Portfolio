import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    type: "BTech",
    course: "Computer Engineering",
    college: "A. G. Patil Institude of Technology, Solapur",
    duration: "2023 – 2026",
    desc: "Currently pursuing BTech Final year (CE) from DBATU University."
  },
  {
    type: "Diploma",
    course: "Information Technology",
    college: "Government Polytechnic Solapur",
    duration: "2020 – 2023",
    desc: "Completed Diploma with 83.63% from MSBTE University."
  },
  {
    type: "SSC",
    course: "Netaji Subhashchandra Bose High School, Solapur",
    college: "",
    duration: "2019 – 2020",
    desc: "Completed SSC with 87.00%."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-black text-white px-6 md:px-24">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center text-[#00eaff]"
      >
        Educations
      </motion.h2>
      <div className="h-1 w-24 bg-[#00eaff] mx-auto my-6"></div>

      {/* Timeline */}
      <div className="relative border-l-2 border-gray-700 ml-5 md:ml-16 pl-6 mt-10">

        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            {/* Neon Dot */}
            <div className="absolute -left-[13px] top-5 h-3 w-3 bg-[#00eaff] rounded-full shadow-[0_0_10px_#00eaff]"></div>

            {/* Card */}
            <div className="border border-[#00eaff] p-6 rounded-xl bg-black/40 
               shadow-[0_0_15px_#00eaff] hover:bg-[#00eaff]/10 transition duration-300">

              {/* Tag */}
              <span className="text-xs px-3 py-1 rounded-full bg-[#00eaff] text-black font-semibold">
                {item.type}
              </span>

              {/* Text */}
              <h3 className="text-xl font-semibold mt-3 text-[#00eaff]">
                {item.course}
              </h3>

              <p className="text-yellow-400">{item.college}</p>
              <p className="text-sm text-gray-400 mb-3">{item.duration}</p>

              <p className="text-gray-300">{item.desc}</p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Education;
