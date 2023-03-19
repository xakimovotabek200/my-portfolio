import React from "react";
import About from "./components/About";
import BackToToTop from "./components/BackToToTop";
import Barnds from "./components/Barnds";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skill from "./components/Skill";
import Testimonials from "./components/Testimonials";

// import components

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Barnds />
      <About />
      <Skill />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToToTop />
    </div>
  );
};

export default App;
