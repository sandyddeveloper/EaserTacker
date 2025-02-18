import { useState, useEffect } from "react";
import { Bot } from "lucide-react";
import { Sun, Moon, Bell, User, Settings, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const user = JSON.parse(localStorage.getItem('user'))
  const jwt_access = localStorage.getItem('access');
  useEffect(() => {
     if (jwt_access === null && !user) {
      navigate("/login")
     }
  }, []);

  return (
    <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-900">
  <div className="container flex items-center justify-between  mx-auto text-gray-700 dark:text-gray-300" >
    
    {/* Search Bar - Hidden on Mobile */}
    <div className="relative w-full max-w-md lg:max-w-xl hidden md:block">
      <Search className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-400" size={18} />
      <input
        type="text"
        placeholder="Search for projects"
        className="w-full pl-10 pr-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 dark:text-white rounded-lg focus:ring focus:ring-purple-300 dark:focus:ring-purple-600 focus:outline-none"
      />
    </div>

    <div className="flex items-center space-x-4">
    <button className="hidden md:flex items-center space-x-4">
        <Bot />
      </button>
      
      {/* Timer and Username - Hidden on Mobile */}
      <div className="hidden md:flex items-center space-x-4">
        <span className="text-sm font-semibold">{user.name}</span>
        <span className="text-sm font-semibold"></span>
      </div>

      {/* Notification - Hidden on Mobile */}
      <div className="hidden md:block relative">
        <button
          onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-600 border border-white rounded-full"></span>
        </button>
        {isNotificationsOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">No new notifications</p>
          </motion.div>
        )}
      </div>

      {/* Profile - Always Visible */}
      <div className="relative">
  <button
    onClick={() => setIsProfileOpen(!isProfileOpen)}
    className="p-2 rounded-full  bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
  >
    <img
      src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg"
      alt="Profile"
      className="w-8 h-8 rounded-full object-cover"
    />
  </button>
  {isProfileOpen && (
    <motion.div 
      initial={{ opacity: 0, y: -10 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -10 }}
      className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2"
    >
      <div className="p-3 border-b dark:border-gray-700">
        <p className="text-sm font-semibold"></p>
        <p className="text-sm font-semibold"></p>
        <p className="text-xs text-gray-500 dark:text-gray-400"></p>
      </div>
      <a
        href="#"
        className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
      >
        <User size={18} className="mr-2" /> Profile
      </a>
      <a
        href="#"
        className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
      >
        <Settings size={18} className="mr-2" /> Settings
      </a>
    </motion.div>
  )}
</div>

    </div>
  </div>
</header>

  );
};

export default Header;
