import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const client = axios.create(
  {
    baseURL : 'http://127.0.0.1:3001',
    timeout: 1000,
  }
);

client.interceptors.request.use(
  function (config) {
    const user = localStorage.getItem('user');
    if (!user) {
      config.headers["Authorization"] = null;
      config.headers["refreshToken"] = null;
      return config
    }
    const { accessToken, refreshToken } = JSON.parse(user)
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    config.headers["refreshToken"] = refreshToken;
    return config
  }
)


const Interceptor = ({children}) => {
  const navigate = useNavigate();

  useEffect(() => {
    client.interceptors.response.use(
      function (response) {
        return response
      },
      async function (error) {
        if (error.response && error.response.status === 401) {
          try {
            //  엑세스 토큰 만료
            const originalRequest = error.config;
            const data = await client.post('/refresh')
    
            if (data.status === 201) { // 엑세스만 재발행
              const { accessToken, refreshToken } = data.data.data
              localStorage.removeItem('user')
              localStorage.setItem('user', JSON.stringify(data.data.data, ['accessToken', 'refreshToken']))
              originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
              originalRequest.headers['refreshToken'] = refreshToken;
              return await client.request(originalRequest); // 재설정 및 원래 리퀘스트 
            }
          } catch (error) {
            // [/refresh] 토큰 만료 또는 토큰 비정상 또는 헤더 없음
            localStorage.removeItem('user');
            navigate("/login", { replace: true })
            return;
           // return Promise.reject(error)
          }
        }
        //  [/api (jwt_verify)]에서 오는 에러 코드  or 기존 요청 에러 코드
        return Promise.reject(error) 
      }
    )
  })
  return children;
}


export default client;
export {Interceptor};