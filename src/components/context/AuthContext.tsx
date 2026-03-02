import { createContext, useState, type ReactNode } from "react";

interface AuthContextType {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  // const Test=({})=>
  const [isAuth, setAuth] = useState(false);

  function login() {
    setAuth(true);
  }

  function logout() {
    setAuth(false);
  }

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
