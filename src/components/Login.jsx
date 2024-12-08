import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Predefined credentials
    const predefinedUserId = "123";
    const predefinedPassword = "xyz";

    if (userId === predefinedUserId && password === predefinedPassword) {
      navigate("/service"); // Navigate to the Service page
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Login Page</h2>
      <div className="bg-white p-6 rounded shadow-md w-80">
        <div className="mb-4">
          <label className="block mb-1 font-medium">User ID</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your User ID"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your Password"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
