import axios from "axios";
import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";

const baseUrl = "http://localhost:8000/api/v1";

// Create axios instance
const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to refresh the access token
const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refresh_token")
      ? JSON.parse(localStorage.getItem("refresh_token"))
      : "";

    console.log("🔄 Refresh Token Before Request:", refreshToken);

    if (!refreshToken) {
      console.error("❌ No refresh token found. Logging out...");
      handleLogout();
      return null;
    }

    const response = await axios.post(`${baseUrl}/auth/token/refresh/`, {
      refresh_token: refreshToken,
    });

    if (response.status === 200) {
      const newToken = response.data.access_token;
      const newRefreshToken = response.data.refresh_token;

      console.log("✅ New Access Token:", newToken);
      console.log("✅ New Refresh Token:", newRefreshToken);

      // Store new tokens
      localStorage.setItem("access_token", JSON.stringify(newToken));
      localStorage.setItem("refresh_token", JSON.stringify(newRefreshToken));

      // Update axios default headers
      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;

      return newToken;
    }
  } catch (error) {
    console.error("❌ Error refreshing token:", error.response?.data || error.message);
    handleLogout();
    return null;
  }
};

// Logout function (clears storage & redirects)
const handleLogout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("user");
  window.location.href = "/login"; // Redirect to login page
};

// Request interceptor
axiosInstance.interceptors.request.use(
  async (req) => {
    let token = localStorage.getItem("access_token")
      ? JSON.parse(localStorage.getItem("access_token"))
      : "";

    console.log("🔍 Current Access Token:", token);

    if (token) {
      const user = jwtDecode(token);
      const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

      if (isExpired) {
        console.log("⚠️ Token expired, attempting refresh...");
        token = await refreshAccessToken();
      } else {
        console.log("✅ Token is still valid.");
      }

      if (token) {
        req.headers.Authorization = `Bearer ${token}`;
        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        console.log("🔗 Request Header Updated with New Token:", token);
      } else {
        console.log("❌ No valid token found after refresh.");
      }
    }

    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
