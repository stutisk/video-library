import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
const RequiresAuth = ({ children }) => {
    
  const location = useLocation();
   const { isLogin } = useAuth();
  console.log(location);
  return isLogin ? children : <Navigate to="/login" state={{ from: location }} replace />;
};
export { RequiresAuth };
