"use client";
import { useEffect, useState } from 'react';
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Tape from "@/sections/Tape";
import Testimonials from "@/sections/Testimonials";

export default function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set mounted state to true once the component is loaded on the client
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Tape />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
