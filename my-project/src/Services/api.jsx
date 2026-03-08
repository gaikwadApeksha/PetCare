import axios from "Axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  (config) => {
    console.log(
      `[API Request] ${config.method.toUpperCase()} ${config.url}`,
      config.data
    );
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => {
    console.log(`[API Response]`, response.data);
    return response;
  },
  (error) => {
    console.error(`[API error]`, error.response?.data || error.message);
    return Promise.reject(error);
  }
);
