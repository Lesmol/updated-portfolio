import Description from "@/components/about/description";
import Experience from "@/components/about/experience";
import Images from "@/components/about/images";
import ReachOut from "@/components/about/reachOut";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Lesedi Molemi | About",
  description:
    "Welcome to my about about page, where I'll give you a sneak peek into Lesedi Molemi, how to reach me and my professional work experience.",
};

function about() {
  return (
    <div className="container mx-auto max-w-2xl items-center">
      <Navbar />
      <Images />
      <Description />
      <ReachOut />
      <Experience />
      {/* <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Images />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Description />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ReachOut />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Experience />
      </motion.div> */}
    </div>
  );
}

export default about;
