import React from "react";

function about() {
  return (
    <>
      <div className="mt-10 w-fit rounded-full bg-gradient-to-r from-blue-950 to-transparent px-4 py-3 text-sm md:hidden">
        Supporting operations at{" "}
        <a href="/about/#experience" className="underline decoration-blue-800">
          Capitec Business Bank
        </a>
      </div>
      <h2 className="mt-6 text-6xl font-bold md:mt-12">I'm Lesedi</h2>
      <p className="text-custom-light-grey mt-2 text-left">
        I'm a developer pursuing a BSc in Informatics, learning to build, manage
        and maintain complex cloud infrastructure on AWS/Azure, and write to
        keep track of my progress.
      </p>
      <div className="md:flex md:space-x-6">
        <a href="/about">
          <div className="mt-4 w-fit rounded-md border border-gray-700 px-4 py-2 font-light transition duration-150 ease-in-out hover:border-blue-950">
            More about me
          </div>
        </a>
        <div className="mt-4 hidden w-fit rounded-md bg-gradient-to-r from-blue-950 to-transparent px-4 py-2 font-light md:block">
          Supporting operations at{" "}
          <a
            href="/about/#experience"
            className="underline decoration-blue-800"
          >
            Capitec Business Bank
          </a>
        </div>
      </div>
    </>
  );
}

export default about;
