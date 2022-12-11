import axios from "axios";
import { UpdateUserView, UserView } from "../types/user.types";

export class UserModule {
  private static instance: UserModule;
  private constructor() {}

  public static getInstance() {
    if (!UserModule.instance) {
      UserModule.instance = new UserModule();
    }
    return UserModule.instance;
  }

  async fetchCurrentUser() {
    const response = await axios.get<UserView>(`profile`);
    return response.data;
  }

  async updateUser(userData: UpdateUserView) {
    return axios.patch<UserView>(`profile`, userData);
  }

  async loginUser(credential?: string) {
    return axios.post<{ user: UserView; jwt: string }>(`login`, { credential });
  }
}
