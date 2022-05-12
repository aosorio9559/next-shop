import React, { createContext, useContext, useState } from "react";
import { endpoints } from "@services/api/index";
import axios from "axios";
import Cookies from "js-cookie";

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
    const options = {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      endpoints.auth.login,
      { email, password },
      options
    );
    const { access_token } = data;

    if (access_token) {
      Cookies.set("token", access_token, { expires: 5 });
      axios.defaults.headers.Authorization = `Bearer ${access_token}`;
      const { data: user } = await axios.get(endpoints.auth.profile);
      setUser(user);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    axios.defaults.headers.Authorization = null;
    window.location.href = "/login";
  };

  return {
    user,
    login,
    logout,
  };
};
