import axios from "axios";
import { useAuthStore } from "../store/auth";

//nueva instancia de axios
const authApi = axios.create({
    baseURL: "http://localhost:4000",
    withCredentials: true //permite colocar cabeceras
})
// añadimos la cabecera en cada peticion
authApi.interceptors.request.use( config =>{

   const token = useAuthStore.getState().token

   config.headers.authorization = `Bearer ${token}`
   
   return config
})


export default authApi