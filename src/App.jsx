import cv from "./data/cv.json";
import "./App.css";

function App() {
  return <h1>{cv.personal.name}</h1>;
}

export default App;