import React from "react";
import { getAllPosts } from "@/lib/posts";

function articles() {
  const posts = getAllPosts();
  return (
    <>
      {posts.map((post) => (
        <a href={`/blog/${post.slug}`} key={post.slug} className="group">
          <div className="mb-12 w-fit justify-between sm:mx-auto md:flex md:flex-row-reverse">
            <div className="w-full max-w-lg overflow-clip rounded md:ml-2 md:max-w-40">
              <img
                src={post.imgUrl}
                alt=""
                className="mb-2 h-full object-cover transition duration-300 ease-in-out group-hover:scale-110 md:mb-0"
              />
            </div>
            <div className="md:w-[500px]">
              <h4 className="mb-1 text-sm text-custom-light-grey">
                {post.date}
              </h4>
              <h2 className="text-xl">{post.title}</h2>
              <h4 className="text-sm text-custom-light-grey">{post.summary}</h4>
            </div>
          </div>
        </a>
      ))}
    </>
  );
}

export default articles;
