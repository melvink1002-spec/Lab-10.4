import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type Props = { children: JSX.Element };

export const ProtectedRoute = ({ children }: Props) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
};