// App.jsx
import React, { useRef } from "react";
import "./App.css";
import SideBar from "./Components/SideBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToComponent = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col no-scrollbar scroll-smooth">
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <SideBar
        scrollToHome={() => scrollToComponent(homeRef)}
        scrollToAbout={() => scrollToComponent(aboutRef)}
        scrollToProjects={() => scrollToComponent(projectsRef)}
        scrollToContact={() => scrollToComponent(contactRef)}
      />
    </div>
  );
}

export default App;
