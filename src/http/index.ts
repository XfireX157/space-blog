import axios, { AxiosHeaders } from "axios";

const http = axios.create({
    baseURL: "https://api-space-blog-production.up.railway.app",
    headers: {
        Accept: 'application/json',
        Content: 'application/json'
    }
})

http.interceptors.request.use(function (config) {
    const token = sessionStorage.getItem('token')
    if(token && config.headers) {
      (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`)
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

export default http