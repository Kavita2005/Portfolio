import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  // Variants for animation
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

  return (
    <section id="Contact" className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20">
      
      {/* Heading */}
      <motion.h3 
        className="text-3xl font-bold text-[#00eaff]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h3>

      {/* 🔹 Animated Divider */}
      <motion.div
        className="relative mx-auto my-4"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "6rem", opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
<div className="h-1 w-24 bg-[#00eaff] mx-auto my-6"></div>      
</motion.div>

      <motion.p
        className="mt-2 text-gray-300 text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Feel free to reach out to me for any questions or opportunities!
      </motion.p>

      {/* FORM */}
      <motion.div
        className="mt-8 bg-black/80 border border-[#00eaff] rounded-lg p-6 w-full max-w-md shadow-[0_0_20px_#00eaff]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h4 className="text-lg font-semibold mb-4 text-[#00eaff]" variants={itemVariants}>
          Email me
        </motion.h4>

        <motion.form className="grid gap-4" variants={itemVariants}>
          <motion.input
            type="text"
            placeholder="Enter Name"
            className="p-3 rounded border border-[#00eaff] bg-black/30 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00eaff]"
            variants={itemVariants}
          />

          <motion.input
            type="email"
            placeholder="Enter Email"
            className="p-3 rounded border border-[#00eaff] bg-black/30 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00eaff]"
            variants={itemVariants}
          />

          <motion.textarea
            placeholder="Message"
            rows="5"
            className="p-3 rounded border border-[#00eaff] bg-black/30 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00eaff] resize-none"
            variants={itemVariants}
          ></motion.textarea>

          <motion.button
            type="submit"
            className="bg-[#00eaff] text-black font-semibold px-6 py-3 rounded-full hover:bg-transparent hover:text-[#00eaff] border border-[#00eaff] transition"
            variants={itemVariants}
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
