import axios from "axios";

function useCustomAxios() {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_SERVER,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
}

export default useCustomAxios;
