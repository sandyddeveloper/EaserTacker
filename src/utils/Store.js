import axios from "axios";


const token = localStorage.getItem('access_token') ? localStorage.getItem('access_token') :"";
const refresh_token = localStorage.getItem('refresh_token') ? localStorage.getItem('refresh_token') :"";


const baseUrl = "http://localhost:8000/api/v1"
const axiosInstance = axios.create({
  baseURL: baseUrl,
  'Content-type' : 'application/json',
  headers:{Authorization : localStorage.getItem('access_token') ? `Bearer ${token}` : null }
})

export default axiosInstance;