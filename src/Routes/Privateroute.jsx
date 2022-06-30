import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const Privateroute = ({ children }) => {
  const state = useSelector((state) => state.authData.auth);
  console.log("state", state);
  if (state) {
    return children;
  }

  return <Navigate to="/login" />;
};
