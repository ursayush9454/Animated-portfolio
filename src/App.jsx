import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import HeartCursor from "./components/HeartCursor";
import LoadingScreen from "./components/LoadingScreen";
const App = () => {
  const [loading,setLoading]=useState(true)
  return (
    <>
    {loading && (
        <LoadingScreen
          onComplete={() => setLoading(false)}
        />
      )}
    <HeartCursor/>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
