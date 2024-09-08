import { React, useContext } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Auth";
import Loading from "./Loading";

export default function Private({ children }) {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

Private.propTypes = {
  children: PropTypes.element.isRequired,
};
