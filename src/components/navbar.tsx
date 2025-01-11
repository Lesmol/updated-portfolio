"use client";
import { useState } from "react";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  function onToggle() {
    setMobileNav(!mobileNav);
  }

  return (
    <div className="mx-auto max-w-lg">
      <nav className="bg-primary mt-4 flex items-center justify-between rounded-3xl px-6 py-4">
        <Link href="/">
          <img
            src="https://cloudresumeresources.blob.core.windows.net/resumeimages/logo.svg"
            alt="The letters LM written in a stylish font."
            className="md: w-14"
          />
        </Link>

        <button onClick={onToggle} className="text-primary text-xl sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="white"
            className="bi bi-grid"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
          </svg>
        </button>

        <ul className="hidden text-lg sm:flex">
          <li>
            <Link
              href="/about"
              className="text-primary 150 ml-8 font-medium transition ease-in-out hover:text-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-primary 150 ml-8 font-medium transition ease-in-out hover:text-white"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-primary 150 ml-8 font-medium transition ease-in-out hover:text-white"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-primary 150 ml-8 font-medium transition ease-in-out hover:text-white"
            >
              More
            </Link>
          </li>
        </ul>
      </nav>

      <AnimatePresence>
        {mobileNav ? (
          <motion.div
            className="fixed right-5 mt-1 w-36 rounded-lg bg-black backdrop-blur-sm sm:hidden"
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/">
              <div className="px-4 py-2">Home</div>
            </Link>

            <Link href="/about">
              <div className="px-4 py-1">About</div>
            </Link>
            <Link href="/blog">
              <div className="px-4 py-2">Blog</div>
            </Link>
            <Link href="/blog">
              <div className="px-4 py-2">Projects</div>
            </Link>
            <Link href="/blog">
              <div className="px-4 py-2">More</div>
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default navbar;
