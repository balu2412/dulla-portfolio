import React from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import TraceRail from "./components/TraceRail";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Preloader />
      <TraceRail />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Credentials />
      <Contact />
      <Footer />
    </>
  );
}
