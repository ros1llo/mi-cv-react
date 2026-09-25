import cv from "./data/cv.json";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Languages from "./components/Languages.jsx";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app dark">
      <div className="container">
        <Header personal={cv.personal} />
        <About text={cv.about} />

        <div className="cv-grid">
          <main>
            <Experience items={cv.experience} />
            <Education items={cv.education} />
          </main>
          <aside>
            <Languages items={cv.languages} />
          </aside>
        </div>
      </div>
      <Footer name={cv.personal.name} />
    </div>
  );
}

export default App;