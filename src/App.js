import "./App.css";
import "./queries.css";
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
import { useEffect } from "react";
import Randomizer from "./components/Randomizer";

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
  const [bestScore, setBestScore] = useState(0);
  const [selectedImage, setSelectedImage] = useState([]);

  // on component mount, shuffle originalImages Array
  useEffect(() => {
    const randomizedImages = Randomizer(originalImages);
    setOriginalImages([...randomizedImages]);
  }, []);

  useEffect(() => {
    const updateScore = function (e) {
      if (!selectedImage.includes(e.target.src)) {
        setScore(score + 1);
        setSelectedImage([e.target.src, ...selectedImage]);
        setOriginalImages([...Randomizer(originalImages)]);
      } else {
        score > bestScore && setBestScore(score);
        setScore(0);
        setOriginalImages([...Randomizer(originalImages)]);
        setSelectedImage([]);
      }
    };
    document.querySelector(".cards").addEventListener("click", updateScore);
    return () =>
      document
        .querySelector(".cards")
        .removeEventListener("click", updateScore);
  }, [score]);

  return (
    <div className="container">
      <Navigation score={score} bestScore={bestScore} />
      <Main originalImages={originalImages} />
      <Footer />
    </div>
  );
}

export default App;
