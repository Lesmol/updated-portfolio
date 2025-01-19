import React from "react";
import MarkdownIt from "markdown-it";
import { getAllPosts } from "@/lib/posts";
import { html } from "framer-motion/m";
import Navbar from "@/components/navbar";

const md = new MarkdownIt();

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function fetchPost(slug) {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

async function page({ params }) {
  const post = await fetchPost(params.slug);

  if (!post) {
    notFound();
  }

  const htmlContent = md.render(post.content);

  return (
    <div className="mx-auto max-w-3xl p-4">
      <Navbar />
      <article className="mt-8">
        <img src={post.imgUrl} alt={post.alt} className="w-full" />
        <h1 className="mt-5 text-3xl md:text-4xl">{post.title}</h1>
        <p className="mt-1 text-custom-light-grey">{post.summary}</p>
        <div className="my-4 flex items-center space-x-4">
          <div className="aspect-square w-14 rounded-2xl bg-primary object-cover">
            <img
              src="https://cloudresumeresources.blob.core.windows.net/resumeimages/nomad-transparent.png"
              alt="An image of Lesedi Molemi"
              className="h-full w-full"
            />
          </div>
          <div>
            <h5 className="text-lg">{post.author}</h5>
            <h6 className="text-sm text-custom-light-grey">{post.date}</h6>
          </div>
        </div>
        <hr className="border-neutral-800" />
        <div
          className="post-content text-custom-light-grey"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    </div>
  );
}

export default page;
