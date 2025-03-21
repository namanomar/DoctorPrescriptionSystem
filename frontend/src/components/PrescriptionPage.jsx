import React, { useState } from "react";
import { Upload, RefreshCw, Trash2 } from "lucide-react";

const PrescriptionPage = () => {
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
<div className="bg-gray-100 h-screen">
    <h2 className="text-2xl font-bold  text-gray-900 mb-4 text-center">Prescription Text Generator</h2>


    <div className="flex  bg-gray-100 px-6 ">
      {/* Left Section - Upload & Preview */}
      
      <div className="w-1/2 bg-gray-200 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Upload Prescription</h2>

        {/* Upload Box */}
        <div className="flex items-center justify-center border border-dashed border-gray-500 rounded-lg p-6 bg-gray-300 cursor-pointer">
          <label className="flex flex-col items-center cursor-pointer w-full">
            <Upload className="h-10 w-10 text-blue-500 mb-2" />
            <span className="text-blue-600 font-medium">Select Image</span>
            <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          </label>
        </div>

        {/* Image Preview */}
        {previewURL && (
          <div className="mt-4">
            <img src={previewURL} alt="Prescription Preview" className="w-full h-[420px] object-contain rounded-lg shadow-md" />
            
            {/* Action Buttons */}
            <div className="flex justify-between mt-3">
              
              <button onClick={handleRemoveImage} className="flex items-center bg-red-700/80 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                <Trash2 className="h-5 w-5 mr-2" /> Delete
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right Section - Converted Text (OCR Output) */}
      <div className="w-1/2 bg-gray-200 p-6 ml-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Extracted Text</h2>
        <div className="h-[590px] bg-gray-300 p-4 rounded-lg text-gray-600">
          {/* Placeholder for OCR output */}
          <p className="text-gray-500 italic">Converted text will appear here...</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PrescriptionPage;
