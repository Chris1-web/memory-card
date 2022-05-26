import boar from "../images/boar.png";
import cow from "../images/cow.png";
import elephant from "../images/elephant.png";
import gorilla from "../images/gorilla.png";
import hippo from "../images/hippo.png";
import koala from "../images/koala.png";
import mouse from "../images/mouse.png";
import penguin from "../images/penguin.png";
import raccoon from "../images/raccoon.png";
import ray from "../images/ray.png";
import shark from "../images/shark.png";
import walrus from "../images/walrus.png";
import Cards from "./Cards";

function Main() {
  const originalImages = [
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
  ];
  return (
    <div className="main-container">
      <div className="instructions">
        <p>Get points by clicking on an image but</p>
        <p>don't click on any more than once!</p>
      </div>
      <Cards originalImages={originalImages} />
    </div>
  );
}

export default Main;
