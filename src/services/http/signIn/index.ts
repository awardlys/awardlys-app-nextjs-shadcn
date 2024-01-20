import { User } from "@/types/login";
import { api } from "../api";

const acessToken = process.env.NEXT_PUBLIC_ACESSTOKEN;
const headers = {
  headers: { Authorization: `Bearer ${acessToken}` },
};

export async function login(user: Omit<User, "username">) {
  try {
    const data = await api.post("/accounts/login", user, headers);
    return data;
  } catch (error) {
    console.error(error);
  }
}
