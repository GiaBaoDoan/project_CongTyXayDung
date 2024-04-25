export const base_url = 'https://api.xaydungtranle.vn'
import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://api.xaydungtranle.vn",

});
export default newRequest;