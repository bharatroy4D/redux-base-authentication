import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { user, token } = useSelector((state) => state.auth);

  // যদি user বা token না থাকে, তাহলে login page-এ পাঠানো হবে
  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }

  // login করা থাকলে, children render হবে (যেমন Dashboard)
  return children;
};

export default ProtectedRoute;
