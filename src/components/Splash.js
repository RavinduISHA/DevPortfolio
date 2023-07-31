import React, { useEffect } from "react";
import splashImage from "../Assets/Home/animates.gif";
import './splash.css';

function Splash({ hideSplash }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      hideSplash();
    }, 5000); // Hide the splash screen after 5 seconds

    return () => clearTimeout(timer);
  }, [hideSplash]);

  return (
    <div className="splash">
      <img src={splashImage} alt="Splash Screen" />
    </div>
  );
}

export default Splash;
