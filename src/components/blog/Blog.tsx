import * as React from "react";
import { Link } from "react-router";
import { posts } from "../mockData/data";

const Blog: React.FC = () => {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <Link key={post.id} to={"/blog/" + post.slug}>
            <li>
              <div>
                <h5>{post.title}</h5>
                <p>{post.content}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Blog;
