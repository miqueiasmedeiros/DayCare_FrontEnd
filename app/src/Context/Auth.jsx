import React, { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { setToken, createSession } from "../Services/Api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  const login = async (username, password) => {
    const response = await createSession(username, password);

    const loggedUser = response.data.message.username;
    const { token } = response.data.message;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);

    setToken(token);

    setUser(loggedUser);
    navigate("/account");
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    authenticated: !!user,
    user,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
