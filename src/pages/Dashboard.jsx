import { useNavigate } from "react-router-dom";
import { Sidebar, Header, Ads, StatsCards, ErrorTable } from "../components/Dashboard";
import { useEffect } from "react";
import axiosInstance from "../utils/Store";


const Dashboard = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  const jwt_access = JSON.parse(localStorage.getItem('access_token'))

  useEffect(() => {
    if (!jwt_access ||!user) {
      navigate('/login')
    }else {
      getSomeData()
    }
  }, [jwt_access, user])

  const getSomeData = async () => {
    try {
      const resp = await axiosInstance.get("/auth/profile/")
      if (resp.status === 200) {
        console.log(resp.data)
      }
    } catch (error) {
      console.error("Error fetching data:", error);
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