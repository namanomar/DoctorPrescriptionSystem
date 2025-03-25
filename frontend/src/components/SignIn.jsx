import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signin_bg from "../assets/signin_bg.webp";

const SignIn = () => {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    scopeUpID: "",
    aadhaarCard: null,
  });

  // State for errors
  const [errors, setErrors] = useState({});

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, aadhaarCard: e.target.files[0] }));
  };

  // Form validation
  const validateForm = () => {
    let newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.scopeUpID.trim()) newErrors.scopeUpID = "ScopeUP ID is required";
    if (!formData.aadhaarCard) newErrors.aadhaarCard = "Aadhaar card image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
   
    if (validateForm()) {
      navigate("/dashboard"); // Navigate to prescription page if valid
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${signin_bg})` }}>
      <div className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Username Field */}
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Username"
            />
            {errors.username && <p className="text-red-700/80 text-sm">{errors.username}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Email"
            />
            {errors.email && <p className="text-red-700/80 text-sm">{errors.email}</p>}
          </div>

          {/* ScopeUP ID Field */}
          <div>
            <label className="block text-gray-700">ScopeUP ID</label>
            <input
              type="text"
              name="scopeUpID"
              value={formData.scopeUpID}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter ScopeUP ID"
            />
            {errors.scopeUpID && <p className="text-red-700/80 text-sm">{errors.scopeUpID}</p>}
          </div>

          {/* Aadhaar Card Upload */}
          <div>
            <label className="block text-gray-700">Upload Aadhaar Card</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
            {errors.aadhaarCard && <p className="text-red-700/80 text-sm">{errors.aadhaarCard}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
