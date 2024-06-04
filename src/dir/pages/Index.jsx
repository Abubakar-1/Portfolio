import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const Index = () => {
  useEffect(() => {
    const adjustPadding = () => {
      const navbar = document.getElementById("navbar");
      //   if (navbar) {
      document.body.style.paddingTop = `1px`;
      //   }
    };

    // Adjust padding when the component mounts
    adjustPadding();

    // Adjust padding when the window is resized
    window.addEventListener("resize", adjustPadding);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", adjustPadding);
    };
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
