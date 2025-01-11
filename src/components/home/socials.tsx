import React from "react";

function socials() {
  return (
    <>
      <div className="text-primary mt-8 flex items-center justify-center space-x-8">
        <div className="md:hover:text-darker-primary 150 transition ease-out">
          <span className="text-xl">&#x2197;</span>
          <a
            href="https://www.linkedin.com/in/lvmolemi/"
            target="_blank"
            className="ml-2"
          >
            LinkedIn
          </a>
        </div>
        <div className="md:hover:text-darker-primary 150 transition ease-out">
          <span className="text-xl">&#x2197;</span>
          <a href="https://github.com/Lesmol" target="_blank" className="ml-2">
            GitHub
          </a>
        </div>
        <div className="md:hover:text-darker-primary 150 transition ease-out">
          <span className="text-xl">&#x2197;</span>
          <a href="mailto:molemilesedi@gmail.com" className="ml-2">
            Email
          </a>
        </div>
      </div>
    </>
  );
}

export default socials;
