import React from "react";
import { getAllPosts } from "@/lib/posts";

function articles() {
  const posts = getAllPosts();
  return (
    <>
      {posts.map((post) => (
        <a href={`/blog/${post.slug}`} key={post.slug} className="">
          <div className="mb-12 w-fit justify-between md:flex md:flex-row-reverse">
            <div className="w-full max-w-xl md:max-w-40 md:ml-2">
              <img
                src={post.imgUrl}
                alt=""
                className="mb-2 h-full object-cover md:mb-0"
              />
            </div>
            <div className="max-w-lg">
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
