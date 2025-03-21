import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import PrescriptionPage from "./components/PrescriptionPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/prescription" element={<PrescriptionPage />} />

       
      </Routes>
    </Router>
  )
}

export default App