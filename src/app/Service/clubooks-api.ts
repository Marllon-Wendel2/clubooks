import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import axios from "axios";
import { toast } from "react-toastify";

class ClubooksApi {
  private api: AxiosInstance;
  private isLoggingOut = false;

  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8080",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.api.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        if (error.response?.status === 401) {
          logout();
        }
        return Promise.reject(error);
      }
    );
  }

  async getPosters(skip: number): Promise<AxiosResponse> {
    const url = skip !== 0 ? `/poster?skip=${skip}` : "/poster";
    return this.api.get(url);
  }

  async verifyToken(token: string): Promise<AxiosResponse> {
    return this.api.post("auth/verify-token", {
      token,
    });
  }
}

export const clubooksApi = new ClubooksApi();
function logout() {
  localStorage.removeItem("token");

  toast.error("Você está deslogado, por favor realize o login novamente!", {
    onClose: () => {
      window.location.href = "/Login";
    },
  });
}
