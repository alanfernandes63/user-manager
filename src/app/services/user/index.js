import { baseUrl } from "@/app/constants";
import axios from "axios";

export function save(value) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ status: 200, data: value });
    }, 500)
  );
}

export function listAll() {
  return axios.get(`${baseUrl}/users`);
}
