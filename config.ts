import axios from "axios";
export const instance = axios.create({
  baseURL: "https://api.xaydungtranle.vn/v2",
  transport: ["http", "https"],
  withCredentials: true,
  insecureHTTPParser: true,
});
