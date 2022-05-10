import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

const useAuthProvider = () => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    setUser({ email, password });
  };

  return {
    user,
    login,
  };
};
