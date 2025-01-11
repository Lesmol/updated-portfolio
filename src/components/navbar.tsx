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
    <div className="flex max-w-lg justify-end md:mx-auto md:block">
      <nav className="bg-primary mt-4 hidden items-center justify-between rounded-3xl px-6 py-4 md:flex">
        <Link href="/">
          <img
            src="https://cloudresumeresources.blob.core.windows.net/resumeimages/logo.svg"
            alt="The letters LM written in a stylish font."
            className="md: w-14"
          />
        </Link>

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

      <button
        onClick={onToggle}
        className="bg-primary text-primary right-0 mt-4 flex w-fit items-center rounded-xl px-4 py-2 text-lg md:hidden"
      >
        Menu{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-down"
          viewBox="0 0 16 16"
        >
          <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
        </svg>
      </button>

      <AnimatePresence>
        {mobileNav ? (
          <motion.div
            className="fixed right-5 mt-1 w-36 rounded-lg bg-black backdrop-blur-sm sm:hidden"
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{ duration: 0.2 }}
          ></motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default navbar;
