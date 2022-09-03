import axios from "axios";
const authApi = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts", //EndPoint de authenticacion de usuarios en firebase
  params: { key: "AIzaSyDZeXQKNub4dEq_OlP3SYBb9ej98JirNGo" }, //Clave de API web en firebase
});
export default authApi;
