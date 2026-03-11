import React, { useState, useImperativeHandle, forwardRef } from "react";
import "./Loader.css";

const Loader = forwardRef(({ onComplete }, ref) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // This allows parent components to call loaderRef.current.start()
  useImperativeHandle(ref, () => ({
    start: (toPath) => {
      setIsVisible(true);
      setWidth(0);

      let currentWidth = 0;
      const interval = setInterval(() => {
        currentWidth += 10; // Smoother increments
        setWidth(currentWidth);

        if (currentWidth >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onComplete(toPath); // Navigates after bar hits 100%
          }, 300);
        }
      }, 50);
    },
  }));

  if (!isVisible) return null;

  return (
    <div id="loader-overlay" className="loader-wrapper">
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
});

export default Loader;
