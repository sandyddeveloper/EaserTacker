import React, { useState } from 'react';
import SubFooter from './SubFooter';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Signup = () => {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirm: '',
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const { email, first_name, last_name, password, password_confirm } = formdata;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!email || !first_name || !last_name || !password || !password_confirm) {
      setError("Fill in all details");
      return;
    }
    
    if (password !== password_confirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/register/", formdata);
      
      if (res.status === 201) {
        toast.success("Account created successfully! Verify your email.");
        navigate('/otp/verify');
      }
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong. Try again.");
      toast.error("Signup failed!");
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
            Sign up to new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {error && (
            <p className="text-red-600 font-semibold text-sm p-2 border border-red-300 bg-red-50 rounded-md">
              {error}
            </p>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col w-1/2">
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-900">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  value={first_name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md px-3 py-1.5 text-gray-900 border border-gray-300 focus:border-indigo-600"
                  required
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-900">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  value={last_name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md px-3 py-1.5 text-gray-900 border border-gray-300 focus:border-indigo-600"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md px-3 py-1.5 text-gray-900 border border-gray-300 focus:border-indigo-600"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md px-3 py-1.5 text-gray-900 border border-gray-300 focus:border-indigo-600"
                required
              />
            </div>

            <div>
              <label htmlFor="password_confirm" className="block text-sm font-medium text-gray-900">
                Confirm Password
              </label>
              <input
                type="password"
                name="password_confirm"
                id="password_confirm"
                value={password_confirm}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md px-3 py-1.5 text-gray-900 border border-gray-300 focus:border-indigo-600"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-white font-semibold hover:bg-indigo-500"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <a href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Sign in.
            </a>
          </p>
        </div>
      </div>
      <div className="py-12">
        <SubFooter />
      </div>
    </div>
  );
};

export default Signup;
