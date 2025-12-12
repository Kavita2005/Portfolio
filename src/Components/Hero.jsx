import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="Home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-10 gap-10 bg-black text-white pt-28"
    >
      {/* LEFT TEXT */}
      <motion.div
        className="text-center md:text-left max-w-xl"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          Hi, I'm <span className="text-white">Kavita Chimman</span>
        </h1>

        <h2 className="ext-4xl md:text-5xl font-bold leading-snug text-[#00eaff]">Web Developer</h2>

        <p className="mt-4 text-white">
I am a dedicated web developer passionate about creating innovative, user-focused projects. With a commitment to continuous learning, I specialize in building responsive and intuitive websites that solve real-world challenges. I am eager to collaborate on meaningful projects and deliver solutions that make a lasting impact.        </p>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center md:justify-start gap-6 text-3xl">
          <a
            href="https://www.linkedin.com/in/kavita-chimman-469737323/"
            className="hover:text-[#00eaff] transition"
            target="_blank"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Kavita2005"
            className="hover:text-[#00eaff] transition"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/kavita_24005/?next=%2F&hl=en"
            className="hover:text-[#00eaff] transition"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1yaI5jwhQYodussTH6-cpRjGVpTG2W9lB/view?usp=drivesdk"
          target="_blank"
          className="inline-block mt-6 bg-[#00eaff] text-black font-bold py-2 px-6 rounded-lg hover:bg-transparent hover:text-[#00eaff] border border-[#00eaff] transition duration-300"
        >
          Download Resume
        </a>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/src/assets/kc.png"
          alt="Profile"
          className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#00eaff] shadow-[0_0_25px_#00eaff]"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
