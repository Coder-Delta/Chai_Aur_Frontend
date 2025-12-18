// services/auth.api.ts
import axios from "axios";
import type { LoginPayload, RegisterPayload } from "../types/auth.types";

export const loginUser = (data: LoginPayload) => {
  return axios.post("/api/login", data);
};

export const registerUser = (data: RegisterPayload) => {
  return axios.post("/api/register", data);
};
