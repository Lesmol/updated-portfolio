import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/blog");
const pinnedPostsDirectory = path.join(process.cwd(), "src/blogPinned");

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...data,
      content,
    };
  });
}

export function getPinnedPosts() {
  const fileNames = fs.readdirSync(pinnedPostsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const filePath = path.join(pinnedPostsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...data,
      content,
    };
  });
}
