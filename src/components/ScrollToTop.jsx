import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This forces the window to scroll to the top-left corner
    window.scrollTo(0, 0);
  }, [pathname]); // Runs every time the route (pathname) changes

  return null; // This component doesn't render anything visible
};

export default ScrollToTop;
