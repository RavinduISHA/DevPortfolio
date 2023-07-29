import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Project from "./components/Project";
import Service from "./components/Service";
import Splash from "./components/Splash";
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
