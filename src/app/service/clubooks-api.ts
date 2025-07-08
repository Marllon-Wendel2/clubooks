import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import axios from "axios";
import Cookies from "js-cookie";
import { UpdateUserDto } from "../interfaces/User";

class ClubooksApi {
  private api: AxiosInstance;
  private isLoggingOut = false;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.api.interceptors.request.use(
      (config) => {
        const token = Cookies.get("token");
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

  async getTop5Books(): Promise<AxiosResponse> {
    try {
      return await this.api.get("/books/top-5");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error.response?.data || "Erro ao buscar os livros";
      }
      throw error;
    }
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

  async login(email: string, password: string): Promise<AxiosResponse> {
    try {
      const response = await this.api.post("auth/signin", {
        email,
        password,
      });
      if (response.status === 201) {
        Cookies.set("token", response.data, { expires: 1 });
      }
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error.response?.data || "Erro ao fazer login";
      }
      throw error;
    }
  }

  async getUserProfile(id: string): Promise<AxiosResponse> {
    try {
      const result = await this.api.get(`users/${id}`);

      if (result.status === 200) {
        return result;
      } else {
        throw new Error("Erro ao buscar o perfil do usuário");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error.response?.data || "Erro ao buscar o perfil do usuário";
      }
      throw error;
    }
  }

  async updateUserProfile(id: string, data: UpdateUserDto): Promise<AxiosResponse> {
    try {
      const result = await this.api.patch(`users/${id}`, data)

      if (result.status === 200) {
        return result;
      } else {
        throw new Error("Erro ao buscar o perfil do usuário");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error.response?.data || "Erro ao buscar o perfil do usuário";
      }
      throw error;
    }
  }
}

export const clubooksApi = new ClubooksApi();

export function logout() {
  Cookies.remove("token");
  window.location.href = "/login";
}
