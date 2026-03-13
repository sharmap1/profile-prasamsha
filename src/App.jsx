import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Expertise from "./pages/Expertise";
import Journey from "./pages/Journey";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const loaderRef = useRef();

  // State to track where we want to go while the loader is playing
  const [pendingPath, setPendingPath] = useState(null);

  // 1. GITHUB PAGES REFRESH FIX
  // Catches the redirect from 404.html and moves to the correct React route
  useEffect(() => {
    const query = window.location.search;
    if (query && query.startsWith("?/")) {
      const route = query.slice(2).replace(/~and~/g, "&");
      navigate(route, { replace: true });
    }
  }, [navigate]);

  // 2. TRIGGER LOADER ON NAVIGATION
  const handleNavigation = (path) => {
    if (path === location.pathname) return;

    if (loaderRef.current) {
      // Pass the path directly to the loader to avoid state lag
      loaderRef.current.startLoading(path);
    } else {
      navigate(path);
    }
  };
  const finalizeNavigation = (path) => {
  if (path) {
    navigate(path);
    // Use a zero-timeout to push the scroll to the end of the execution queue
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" // Instant is usually better for page jumps
      });
    }, 0);
  }
};

  return (
    <div className="app-container">
      {/* Custom Loader Component */}
      <Loader ref={loaderRef} onComplete={finalizeNavigation} />
      <ScrollToTop />
      {/* Persistent Navbar */}
      <Navbar onNavigate={handleNavigation} />

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
