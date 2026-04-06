import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/blog" style={{ marginRight: "1rem" }}>Blog</Link>
      {isAuthenticated ? (
        <>
          <Link to="/admin" style={{ marginRight: "1rem" }}>Admin</Link>
          <button onClick={logout}>Log Out</button>
        </>
      ) : (
        <Link to="/login">Log In</Link>
      )}
    </nav>
  );
};