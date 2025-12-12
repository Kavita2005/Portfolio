import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { staggerChildren: 0.2, duration: 0.6 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const iconHover = { scale: 1.2, color: "#14b8a6", transition: { duration: 0.3 } };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black"
    >
      <motion.footer
        className="text-white py-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto text-center">
          {/* Name */}
          <motion.h2 className="text-teal-400 font-bold mb-4" variants={itemVariants}>
            Kavita Chimman
          </motion.h2>

          {/* Navigation Links */}
          <motion.div className="flex justify-center gap-6 mb-4" variants={itemVariants}>
            <a href="#Home" className="hover:text-teal-400">Home</a>
            <a href="#Projects" className="hover:text-teal-400">Project</a>
            <a href="#Experience" className="hover:text-teal-400">Experience</a>
            <a href="#Skills" className="hover:text-teal-400">Skills</a>
            <a href="#Contact" className="hover:text-teal-400">Contact</a>
          </motion.div>

          {/* Social Icons */}
          <motion.div className="flex justify-center gap-5 mb-4 text-xl" variants={itemVariants}>
            <motion.a
              href="https://www.linkedin.com/in/kavita-chimman-469737323/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={iconHover}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/Kavita2005"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={iconHover}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/kavita_24005/?next=%2F&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={iconHover}
            >
              <FaInstagram />
            </motion.a>
            
          </motion.div>

          {/* Contact Info */}
          <motion.div className="text-sm mb-4" variants={itemVariants}>
            <p>Email: kavitachimman4@gmail.com</p>
            <p>Phone: 9284588808</p>
          </motion.div>

          {/* Copyright */}
          <motion.p className="text-xs text-gray-400" variants={itemVariants}>
            © 2025 Kavita Chimman. All rights reserved.
          </motion.p>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default Footer;
