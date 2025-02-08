import React, { useState } from "react";
import SubFooter from "../SubFooter";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const OTPForm = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    } else if (!value && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const submitOTP = async (e) => {
    e.preventDefault();
    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      toast.error("Please enter all 6 digits of the OTP.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/v1/auth/verify-email/", { otp: otpCode });
      if (response.status === 200) {
        toast.success(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to verify OTP.");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
          <img
            className="mx-auto h-10 w-auto"
            src="https://discordbanners.vercel.app/static/img/logo.svg"
            alt="EaserTrack"
          />

          <h2 className="text-2xl font-semibold text-gray-900 mt-4">Enter OTP</h2>
          <p className="text-gray-600 mt-2">
            We've sent a 6-digit OTP to your email.
          </p>

          <form id="otp-form" className="mt-6" onSubmit={submitOTP}>
            <div className="flex justify-center gap-2 sm:gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  maxLength="1"
                  name="otp"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  className="otp-input w-12 h-12 text-center text-xl border rounded-md focus:outline-indigo-500"
                />
              ))}
            </div>

            <button type="submit" className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md text-lg font-medium hover:bg-indigo-700 transition">
              Verify OTP
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-4">
            Didn't receive OTP?{" "}
            <a href="#" className="text-indigo-600 font-medium hover:underline">
              Resend OTP
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

export default OTPForm;
