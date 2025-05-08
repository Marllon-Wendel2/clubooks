import { AxiosInstance, AxiosResponse } from "axios";
import axios from "axios";

class ClubooksApi {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8080",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async getPosters(skip: number): Promise<AxiosResponse> {
    if (skip !== 0) {
      return this.api.get("/poster?skip=" + skip);
    }
    return this.api.get("/poster");
  }
}

export const clubooksApi = new ClubooksApi();
