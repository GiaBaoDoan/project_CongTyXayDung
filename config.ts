import axios from "axios";

export const instance = axios.create({
  // baseURL: "http://server.elainateam.io:1112",
  baseURL: "https://api.xaydungtranle.vn",
  // baseURL: "https://localhost:1112",
  transport: ["http", "https"],
  withCredentials: true,
  insecureHTTPParser: true,
});
