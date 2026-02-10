import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ApplyPage from "./pages/ApplyPage";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apply/:id" element={<ApplyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
