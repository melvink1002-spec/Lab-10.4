// src/pages/BlogIndex.tsx
import { Link } from "react-router-dom";
import { posts } from "../lib/posts";

export const BlogIndex = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};