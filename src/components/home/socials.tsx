"use client";
import React from "react";

function socials() {
  return (
    <>
      <div className="mb-12 mt-6 flex items-center space-x-4 text-primary md:justify-center md:space-x-8">
        <div className="150 transition ease-out md:hover:text-darker-primary">
          <span className="text-xs">&#x2197;</span>
          <a
            href="https://www.linkedin.com/in/lvmolemi/"
            target="_blank"
            className="ml-2"
          >
            LinkedIn
          </a>
        </div>
        <div className="150 transition ease-out md:hover:text-darker-primary">
          <span className="text-xs">&#x2197;</span>
          <a href="https://github.com/Lesmol" target="_blank" className="ml-2">
            GitHub
          </a>
        </div>
        <div className="150 transition ease-out md:hover:text-darker-primary">
          <span className="text-xs">&#x2197;</span>
          <a href="mailto:molemilesedi@gmail.com" className="ml-2">
            Email
          </a>
        </div>
      </div>
    </>
  );
}

export default socials;
