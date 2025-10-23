import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useVerifyOtpMutation,
} from "../redux/feature/auth/authApi";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const [verifyOtp] = useVerifyOtpMutation();



  // ইনপুটে সংখ্যা টাইপ করলে
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // ব্যাকস্পেসে আগের ঘরে ফোকাস
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Verify Button
  const handleVerify = async (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");

    try {
      await verifyOtp({ email, otp: fullOtp }).unwrap();
      alert("✅ OTP Verified Successfully!");
      navigate("/dashboard");
    } catch (error) {
      alert("❌ Invalid OTP!");
      console.log(error);
    }
  };



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleVerify}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Verify OTP
        </h2>

        <p className="text-gray-600 text-center mb-4">
          We sent an OTP to your email: <br />
          <span className="font-medium">{email}</span>
        </p>

        {/* OTP Boxes */}
        <div className="flex justify-between mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center text-xl text-gray-500 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl transition duration-300"
        >
          Verify OTP
        </button>

        <p className="text-sm text-center text-gray-500 mt-4">
          Didn’t get the code?{" "}
          <button
            type="button"
            // onClick={handleResend}
            className="text-indigo-600 font-medium hover:underline"
          >
            Resend OTP
          </button>
        </p>
      </form>
    </div>
  );
};

export default VerifyOtp;
