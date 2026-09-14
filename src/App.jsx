import { useEffect } from "react";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import AIAssistant from "./components/AIAssistant";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Internship from "./components/Internship";
import Achievements from "./components/Achievements";
import BentoDeveloperHub from "./components/BentoDeveloperHub";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionSeparator from "./components/SectionSeparator";

export default function App() {
  useEffect(() => {
    // Ensure the website opens at the top Hero section
    window.scrollTo(0, 0);
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <div className="bg-[#000000] text-[#F2F2F2] font-body min-h-screen relative overflow-x-hidden selection:bg-[#BFC3C7] selection:text-[#000000]">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main className="relative">
        <Hero />
        <SectionSeparator />
        <AIAssistant />
        <SectionSeparator />
        <About />
        <SectionSeparator />
        <Skills />
        <SectionSeparator />
        <Projects />
        <SectionSeparator />
        <Education />
        <SectionSeparator />
        <Internship />
        <SectionSeparator />
        <Achievements />
        <SectionSeparator />
        <BentoDeveloperHub />
        <SectionSeparator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


