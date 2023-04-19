import React from "react";
import { Navigate } from "react-router-dom";

const Protectedroute = ({ children }) => {
  const user = localStorage.getItem('user');
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default Protectedroute;
