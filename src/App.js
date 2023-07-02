import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Project from "./Project";
import Service from "./Service";
import Splash from "./Splash";
import "./App.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const hideSplash = () => {
    setShowSplash(false);
  };

  return (
    <div className="App">
      {showSplash ? (
        <Splash hideSplash={hideSplash} />
      ) : (
        <>
          <Home />
          <About />
          <Service />
          <Project />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
