import React, { useState, useImperativeHandle, forwardRef } from "react";
import "./Loader.css";

const Loader = forwardRef(({ onComplete }, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    // Accept path here
    startLoading(targetPath) {
      setIsVisible(true);

      // 1. Entry Animation (e.g., 600ms)
      setTimeout(() => {
        // 2. Change page exactly when the screen is covered
        onComplete(targetPath);

        // 3. Exit Animation
        setTimeout(() => {
          setIsVisible(false);
        }, 500);
      }, 600);
    },
  }));

  if (!isVisible) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <div className="pastel-spinner"></div>
        <p>Moving to next section...</p>
      </div>
    </div>
  );
});

export default Loader;
