import useUserStore from "@zustand/user.mjs";
import axios from "axios";

function useCustomAxios() {
  const { user } = useUserStore();

  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_SERVER,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // 요청 인터셉터(성공, err)
  instance.interceptors.request.use((config) => {
    if (user) {
      let token = user.token.accessToken;

      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  return instance;
}

export default useCustomAxios;
