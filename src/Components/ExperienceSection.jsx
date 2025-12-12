import React from "react";
import { motion } from "framer-motion";

const data = [

  {
    type: "Experience",
    role: "TNP Coordinator",
    company: "Training & Placement Cell",
    duration: "2024 – 2025",
    desc: "Managed schedules and communications for placement-related events, improving participation and efficiency."
  },
  {
    type: "Experience",
    role: "Code Club Mentor",
    company: "College Coding Club",
    duration: "2024 – 2025",
    desc: "Supported students in learning programming fundamentals and building real-world projects."
  },{
    type: "Internship",
    role: "WordPress Development Intern",
    company: "DK Techno's",
    duration: "2022 – 2022",
    desc: "Developed and customized responsive WordPress themes and plugins using PHP, JavaScript, HTML, and CSS, ensuring optimized performance and modern UI/UX."
  }
];

const ExperienceSection = () => {
  return (
    <section id="Experience" className="py-20 bg-black text-white px-6 md:px-24">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-[#00eaff]"
      >
        Experience & Internships
      </motion.h2>
      <div className="h-1 w-24 bg-[#00eaff] mx-auto my-6"></div>

      {/* Timeline */}
      <div className="relative border-l-2 border-gray-700 ml-5 md:ml-16 pl-6 mt-10">

        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            {/* Neon Dot */}
            <div className="absolute -left-[13px] top-5 h-3 w-3 bg-[#00eaff] 
            rounded-full shadow-[0_0_10px_#00eaff]"></div>

            {/* Card */}
            <div className="border border-[#00eaff] p-6 rounded-xl bg-black/40 
              shadow-[0_0_15px_#00eaff] hover:bg-[#00eaff]/10 transition duration-300">

              {/* Tag */}
              <span className="text-xs px-3 py-1 rounded-full bg-[#00eaff] 
              text-black font-semibold">
                {item.type}
              </span>

              {/* Text */}
              <h3 className="text-xl font-semibold mt-3 text-[#00eaff]">
                {item.role}
              </h3>
              <p className="text-yellow-400">{item.company}</p>
              <p className="text-sm text-gray-400 mb-3">{item.duration}</p>

              <p className="text-gray-300">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
