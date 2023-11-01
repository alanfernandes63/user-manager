import { baseUrl } from "@/app/constants";
import axios from "axios";

export function save(value) {
  //Mock de consulta à api
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ status: 201, data: value });
    }, 500)
  );
}

export function listAll() {
  return axios.get(`${baseUrl}/users`);
}
