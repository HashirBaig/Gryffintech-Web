import axios from "axios"
import * as apiURLs from "./apiURLs"
import environment from "../config/environment"

const baseConfig = {
  baseURL: `${environment.API_URL}`,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
}

// Basic configuration for HTTP calls
const api = axios.create(baseConfig)

export async function sendMail(data) {
  api.post(`${apiURLs.sendMail}`, data)
}

export default api
