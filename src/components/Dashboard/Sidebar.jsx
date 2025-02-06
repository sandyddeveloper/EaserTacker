import { useState, useEffect } from "react";
import { Home, FileText, CreditCard, PieChart, Square, Layers, Table, Menu, X, LogOut } from "lucide-react";
import axiosInstance from "../../utils/Store";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const navigate = useNavigate()
  const handleLogout = async() => {
    const res = await axiosInstance.post("/auth/logout/", {"refresh_token": refresh_token})
    if (res.status === 200) {
      localStorage.removeItem("access_token")
      localStorage.removeItem("refresh_token")
      localStorage.removeItem("user")
      navigate("/login")
      toast.success("Logged out successfully!")
    }
  }


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false); 
      } else {
        setIsOpen(true); 
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex">
  <aside className={`bg-gray-900 shadow-md flex flex-col transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}>
    <div className="flex items-center justify-between p-4">
  <div className="flex items-center gap-x-2">
    <img className="h-6 w-auto" src="https://discordbanners.vercel.app/static/img/logo.svg" alt="Logo" />
    {isOpen && <h2 className="text-lg font-bold text-white">EaserTracker</h2>}
  </div>
  
  <button className="p-2 rounded-lg hover:bg-gray-700 flex-shrink-0" onClick={toggleSidebar}>
    {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
  </button>
</div>

    <nav className="flex-1 mt-4 text-white">
      <ul className="space-y-3 gap-x-3 pl-2">
        <SidebarItem icon={<Home />} text="Dashboard" isOpen={isOpen} />
        <SidebarItem icon={<FileText />} text="Forms" isOpen={isOpen} />
        <SidebarItem icon={<CreditCard />} text="Cards" isOpen={isOpen} />
        <SidebarItem icon={<PieChart />} text="Charts" isOpen={isOpen} />
        <SidebarItem icon={<Square />} text="Buttons" isOpen={isOpen} />
        <SidebarItem icon={<Layers />} text="Modals" isOpen={isOpen} />
        <SidebarItem icon={<Table />} text="Tables" isOpen={isOpen} />
      </ul>
    </nav>

  
    <div className="p-4 mt-auto">
      <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300">
        <LogOut className="w-5 h-5 flex-shrink-0" />
        {isOpen && <span>Logout</span>}
      </button>
    </div>
  </aside>
</div>
  );
};


const SidebarItem = ({ icon, text, isOpen }) => {
  return (
    <li>
      <a href="#" className="flex items-center p-3 space-x-2 rounded-lg hover:bg-purple-500 transition-all">
        {icon}
        {isOpen && <span className="text-sm font-medium">{text}</span>}
      </a>
    </li>
  );
};

export default Sidebar;
