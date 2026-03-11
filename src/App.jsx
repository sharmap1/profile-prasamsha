import React, { useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Expertise from "./pages/Expertise";
import Journey from "./pages/Journey";
import Loader from "./components/Loader";
import "./App.css";

function App() {
  const loaderRef = useRef();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    // Check if loaderRef exists before calling start to prevent crashes
    if (loaderRef.current) {
      loaderRef.current.start(path);
    } else {
      navigate(path);
    }
  };

  const finalizeNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="app-container">
      {/* 1. Loader sits at the top level */}
      <Loader ref={loaderRef} onComplete={finalizeNavigation} />

      {/* 2. Navbar MUST be here to be visible on all pages */}
      <Navbar onNavigate={handleNavigation} />

      {/* 3. Routes handle the changing page content */}
      <main className="content-area">
        <Routes>
          <Route path="/" element={<Home onNavigate={handleNavigation} />} />
          <Route
            path="/expertise"
            element={<Expertise onNavigate={handleNavigation} />}
          />
          <Route
            path="/journey"
            element={<Journey onNavigate={handleNavigation} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
