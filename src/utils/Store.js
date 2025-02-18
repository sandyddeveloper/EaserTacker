import axios from "axios";

const token = localStorage.getItem("access") ? JSON.parse(localStorage.getItem("acess")) : "";
const refresh_token = localStorage.getItem("refresh") ? JSON.parse(localStorage.getItem("refresh")) : "";


const baseUrl = "http://localhost:8000/api/v1";
const axiosInstance = axios.create({
  baseURL:baseUrl,
  'Content-type': 'application/json',
  headers: { 'Authorization': `Bearer${token}` }
})

console.log("axiosInstance: ")

export default axiosInstance;