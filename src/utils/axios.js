import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const client = axios.create(
  {
    baseURL : 'http://localhost:3001',
    timeout: 1000,
  }
);
// 200 : 성공, 201 : 토큰 재발행, 400 : 인증 X(여러가지 이유),
client.interceptors.request.use(
  function (config) {
    const authorization = localStorage.getItem('Authorization');
    if (!authorization) {
      config.headers["Authorization"] = null;
      return config
    }
    config.headers["Authorization"] = authorization;
    return config
  }
)

// 응답
const Interceptor = ({children}) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Authorization 헤더가 비어있다면 갱신 안해도되는 거임
    client.interceptors.response.use(
      function (response) {
        console.log(response.status);
        if(response.headers.authorization) {
          localStorage.setItem('Authorization', response.headers.authorization);
        }
        return response
      },
      function (error) {
        // 백엔드에서 jwt(검증+갱신) 후 토큰 만료(액세스+리프레쉬)
        console.log(error.response.status);
        if (error.response && error.response.status === 400) 
            navigate("/login", { replace: true })
        
        return Promise.reject(error) 
      }
    )
  }, [])
  return children;
}


export default client;
export {Interceptor};