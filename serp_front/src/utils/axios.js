import axios from 'axios';


const axiosInstance = axios.create(
  {
    baseURL : 'http://127.0.0.1:3001',
    timeout: 1000,
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  // (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
  (error) => Promise.reject((error.response && error.response.data) || console.log("err:", error.response))

);

export default axiosInstance;
