import { base_url } from "@/constants/baseUrl";
import { SingInProps, SingUpProps } from "@/types";
import axios from "axios"
const options = {
  method : 'POST',
  url : `${base_url}/account/singup/`, 
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  data : {name : "" ,email :"",password : ""}
}
export const singInApi = async(payload : SingInProps) => {
    try {
    const res =  await axios.request(options)
    return res.data
    }
    catch(err : any) {
        console.log(err)
    }
}
export const singUpApi = async (payload : SingUpProps) => {
      try {
        const res = await axios.post(`${base_url}/account/singup/`,payload);
        return res.data
      }
      catch(err  :any) {
        console.log(err)
      }
}

