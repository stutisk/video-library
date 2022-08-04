import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
const RequiresAuth = ({ children }) => {
    
  const location = useLocation();
   const { isLogin } = useAuth();
  return isLogin ? children : <Navigate to="/login" state={{ from: location }} replace />;
};
export { RequiresAuth };
