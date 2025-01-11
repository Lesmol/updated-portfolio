import React from "react";

function about() {
  return (
    <>
      <h1 className="mt-6 text-6xl font-bold md:mt-12">I'm Lesedi</h1>
      <p className="mt-2 text-left text-custom-light-grey">
        A developer pursuing a BSc in Informatics, learning to build, manage and
        maintain complex cloud application on AWS/Azure, and I write to document
        my progress.
      </p>
      <div className="md:flex md:space-x-6">
        <a href="/about">
          <div className="mt-4 w-fit rounded-md border border-gray-700 px-4 py-2 font-light transition duration-150 ease-in-out hover:border-blue-950">
            More about me
          </div>
        </a>
        <div className="mt-4 hidden w-fit rounded-md bg-gradient-to-r from-blue-900 to-transparent px-4 py-2 font-light md:block">
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
