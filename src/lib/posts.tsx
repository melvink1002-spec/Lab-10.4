export type Post = {
  id: number;
  slug: string;
  title: string;
  content: string;
};

export const posts: Post[] = [
  {
    id: 1,
    slug: "my-first-post",
    title: "My First Post",
    content: "Welcome to my blog! This is the first post."
  },
  {
    id: 2,
    slug: "react-router-tutorial",
    title: "React Router Tutorial",
    content: "Learn about dynamic routing in React with React Router v6."
  },
  {
    id: 3,
    slug: "auth-context",
    title: "Using AuthContext",
    content: "Implementing a simple authentication system in React."
  },
];