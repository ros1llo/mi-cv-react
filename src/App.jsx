import { useState } from "react";
import cv from "./data/cv.json";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div id="top" className={darkMode ? "app dark" : "app"}>
      <Navbar darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />

      <div className="container">
        <Header personal={cv.personal} />
        <About text={cv.about} />

        <div className="cv-grid">
          <main>
            <Experience items={cv.experience} />
            <Education items={cv.education} />
            <Projects items={cv.projects} />
          </main>
          <aside>
            <Skills items={cv.skills} />
            <Languages items={cv.languages} />
          </aside>
        </div>

        <Contact />
      </div>

      <Footer name={cv.personal.name} />
    </div>
  );
}

export default App;