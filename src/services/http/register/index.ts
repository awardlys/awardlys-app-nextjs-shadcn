import { User } from "@/types/login";
import { api } from "../api";

export async function register(user: User) {
  try {
    const data = await api.post("/accounts", user);
    return data;
  } catch (error) {
    console.error(error);
  }
}
