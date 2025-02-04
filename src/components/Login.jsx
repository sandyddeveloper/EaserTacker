import React, { useState } from 'react'
import SubFooter from './SubFooter'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
  const [logindata, setLoginData] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const handleOnChange = (e) => {
    setLoginData({...logindata, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    setIsLoading(true);
    
    const { email, password } = logindata;
    if (!email || !password) {
      setError("Please fill in your email and password");
      setIsLoading(false);
      return;
    }
  
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/v1/auth/login/", logindata)
      const response = res.data;
      console.log(response)
      setIsLoading(false);
      const user ={
        "email":response.email ,
        "names":response.full_name
      }
      toast.success("Login successful");
  
      // Store tokens in localStorage
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("access_token", JSON.stringify(response.access_token));
      localStorage.setItem("refresh_token", JSON.stringify(response.refresh_token));
  
      // Navigate after successful login
      navigate("/dashboard");
    } catch (error) {
      setIsLoading(false);
      setError(error.response?.data?.detail || "Something went wrong");
      toast.error(error.response?.data?.detail || "Login failed");
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
          {isLoading && (
            <p>Loading...</p>
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
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
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

          <button className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-100">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="h-5 w-5 mr-2"
              alt="Google"
            />
            Sign in with Google
          </button>
          <button className="flex w-full items-center justify-center mt-3 rounded-md border border-gray-300 bg-gray-900 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800">
            <img
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              className="h-5 w-5 mr-2 filter invert"
              alt="GitHub"
            />
            Sign in with GitHub
          </button>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Didn't have an account?{' '}
          <a href="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Sign up.
          </a>
        </p>
      </div>
    </div>
    <div  className="py-12">
      <SubFooter/>
    </div>
  </div>
  )
}

export default Login