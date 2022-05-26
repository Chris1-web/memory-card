import "./App.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";
import boar from "./images/boar.png";
import cow from "./images/cow.png";
import elephant from "./images/elephant.png";
import gorilla from "./images/gorilla.png";
import hippo from "./images/hippo.png";
import koala from "./images/koala.png";
import mouse from "./images/mouse.png";
import penguin from "./images/penguin.png";
import raccoon from "./images/raccoon.png";
import ray from "./images/ray.png";
import shark from "./images/shark.png";
import walrus from "./images/walrus.png";
import { useState } from "react";

function App() {
  const [originalImages, setOriginalImages] = useState([
    boar,
    cow,
    elephant,
    gorilla,
    hippo,
    koala,
    mouse,
    penguin,
    raccoon,
    ray,
    shark,
    walrus,
  ]);
  const [score, setScore] = useState(0);
  return (
    <div className="container">
      <Navigation score={score} />
      <Main originalImages={originalImages} />
      <Footer />
    </div>
  );
}

export default App;
