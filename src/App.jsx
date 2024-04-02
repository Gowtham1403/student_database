import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Certificate from "./pages/Certificate";
import Marks from "./pages/Marks";
import Personal_Details from "./pages/Personal_Details";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/Certificate" element={<Certificate/>} />
          <Route path="/Marks" element={<Marks />} />
          <Route path="/Personal" element={<Personal_Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;