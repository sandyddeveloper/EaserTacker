import { Sidebar, Header, Ads, StatsCards, ErrorTable } from "../components/Dashboard";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/Store";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  
  const navigate = useNavigate();

  // Safe retrieval from localStorage
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;
  const jwt_access = localStorage.getItem("access_token");
  

  useEffect(() => {
    if (!jwt_access || !user) {
      console.warn("🔴 No authentication data found. Redirecting to login.");
      navigate("/login");
    } else {
      getSomeDate()
    }
  }, [jwt_access, user]);
  


  const getSomeDate = async () => {
    const resp = await axiosInstance.get("/auth/profile/")
    if (resp.status === 200) {
      console.log(resp.data)
    }
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar className="w-64 fixed h-full" />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <main className="h-full overflow-y-auto p-4">
          <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-400">
              Dashboard
            </h2>
            <Ads />
            <StatsCards />
            <ErrorTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
