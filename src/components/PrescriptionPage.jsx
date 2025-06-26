import React, { useState } from "react";
import { Upload, RefreshCw, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrescriptionPage = () => {
    const navigate = useNavigate();
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    setPreviewURL("");
  };

  return (
<div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-6">
  {/* Page Title */}
  <div className="w-full max-w-5xl flex justify-between items-center py-4">
    <h2 className="text-3xl font-bold text-gray-900">Prescription Text Generator</h2>
    <button 
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      onClick={() => navigate("/dashboard")}
    >
      Back to Dashboard
    </button>
  </div>

  {/* Main Content */}
  <div className="w-full max-w-7xl h-[500px] grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
    
    {/* Left Section - Upload & Preview */}
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Upload Prescription</h2>

      {/* Upload Box */}
      <div className="border border-dashed border-gray-400 rounded-lg p-6 bg-gray-200 hover:bg-gray-300 cursor-pointer transition">
        <label className="flex flex-col items-center cursor-pointer w-full">
          <Upload className="h-12 w-12 text-blue-600 mb-2" />
          <span className="text-blue-700 font-medium">Select Image</span>
          <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
        </label>
      </div>

      {/* Image Preview */}
      {previewURL && (
        <div className="mt-4">
          <img src={previewURL} alt="Prescription Preview" className="w-full h-60 object-contain rounded-lg shadow-md" />
          
          {/* Action Buttons */}
          <div className="flex justify-between mt-3">
            <button 
              onClick={handleRemoveImage} 
              className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
            >
              <Trash2 className="h-5 w-5 mr-2" /> Delete
            </button>
          </div>
        </div>
      )}
    </div>

    {/* Right Section - Extracted Text */}
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Extracted Text</h2>
      <div className="h-60 bg-gray-200 p-4 rounded-lg text-gray-700 overflow-y-auto">
        <p className="text-gray-600 italic">Converted text will appear here...</p>
      </div>
    </div>

  </div>
</div>

  );
};

export default PrescriptionPage;
