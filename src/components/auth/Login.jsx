import React, { useState } from "react";
import SubFooter from "../SubFooter";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [logindata, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setLoginData({ ...logindata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Reset errors

    const { email, password } = logindata;
    if (!email || !password) {
      setError("Please fill in your email and password.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/login/", logindata,);
      const response = res.data;
      console.log(response);
      const user = {
        "email": response.email,
        "name": response.full_name
      }
      if (res.status === 200) {
        // ✅ Save tokens to localStorage
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("access", JSON.stringify(response.access_token));
        localStorage.setItem("refresh", JSON.stringify(response.refresh_token));
        navigate("/dashboard");
        toast.success("Login successful");
        
      }
    } catch (err) {
      console.error("Login error:", err);

      // ❌ Handle error responses
      if (err.response?.status === 401) {
        setError("Invalid credentials. Please try again.");
        toast.error("Invalid email or password.");
      } else {
        setError("Something went wrong. Please try again later.");
        toast.error("Login failed. Try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

return (
  <div className="h-full">
    <div className="flex min-h-full flex-col justify-center px-6 pt-[1rem] lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://discordbanners.vercel.app/static/img/logo.svg"
          alt="EaserTrack"
        />
        <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                value={logindata.email}
                autoComplete="email"
                required
                onChange={handleOnChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                id="password"
                value={logindata.password}
                autoComplete="current-password"
                onChange={handleOnChange}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-full border-t border-gray-300"></div>
            <p className="text-black text-sm">OR</p>
            <div className="w-full border-t border-gray-300"></div>
          </div>

          <button
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-md transition-all hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="h-6 w-6"
              alt="Google"
            />
            <span>Continue with Google</span>
          </button>


          <button
            className="flex w-full items-center justify-center gap-2 mt-3 rounded-lg border border-gray-300 bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-gray-800 active:scale-95"
          >
            <img
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              className="h-6 w-6 filter invert"
              alt="GitHub"
            />
            Continue with GitHub
          </button>


          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 
                ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <a href="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Sign up.
          </a>
        </p>
      </div>
    </div>

    <div className="py-12">
      <SubFooter />
    </div>
  </div>
)
}

export default Login
