import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 600);

      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div className="loader-screen">
      
      {/* Stars */}
      <div className="loader-stars"></div>

      {/* Planet */}
      <div className="loader-system">
        <div className="loader-orbit orbit-one"></div>
        <div className="loader-orbit orbit-two"></div>

        <div className="loader-planet">
          <div className="planet-glow"></div>
        </div>
      </div>

      {/* Text */}
      <div className="loader-content">
        <h1>AYUSH</h1>

        <p>
          {progress < 100
            ? "INITIALIZING PORTFOLIO..."
            : "WELCOME TO MY PORTFOLIO♥♥♥"}
        </p>

        <div className="loader-progress">
          <div
            className="loader-progress-bar"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>

        <div className="loader-number">
          {Math.min(progress, 100)}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;