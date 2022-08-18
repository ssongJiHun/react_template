import React, { useEffect, useState } from "react";
// import { useNavigate, Navigate } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import api from "../utils/axios_api";

const LoginGuard = () => {
  const [Auth, setAuth] = useState(true);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .post("/refresh")
      .then(() => {
        setAuth(false);
      })
      .catch(() => {
        setAuth(true);
      });
  });

  return Auth ? <Outlet /> : <Navigate to="/home" />;
};

export default LoginGuard;
