import { Route, Routes } from "react-router";

import "./App.css";
import Blog from "./components/blog/Blog";
import BlogDetail from "./components/blog/BlogDetail";

function App() {
  return (
    <Routes>
      <Route path="blog" element={<Blog />} />{" "}
      <Route path="blog/:slug" element={<BlogDetail />} />
    </Routes>
  );
}

export default App;
