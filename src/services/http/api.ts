import axios from "axios";

const token = JSON.parse(localStorage.getItem("token") ?? "null");

export const api = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
});
