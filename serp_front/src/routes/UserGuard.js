import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import api from "../utils/axios_api";

const UserGuard = (props) => {
  const [Auth, setAuth] = useState(true);

  useEffect(() => {
    api
      .post("/refresh")
      .then((data) => {
        if (data.status === 201) {
          console.log(localStorage.getItem("user"));
          localStorage.removeItem("user");
          localStorage.setItem(
            "user",
            JSON.stringify(data.data.data, ["accessToken", "refreshToken"])
          );
          console.log(localStorage.getItem("user"));
        } else if (data.status === 200) {
        }
        setAuth(true);
      })
      .catch((err) => {
        // 400 : 토큰 존재X , 데이버베이스 찾기 X, 모든 토큰 만료, 헤더 존재X
        // 로그인 폼으로
        setAuth(false);
      });
  });

  console.log(Auth);
  return Auth ? <Outlet/> : <Navigate to="/" />;
};

export default UserGuard;
