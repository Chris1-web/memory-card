import Cards from "./Cards";

function Main(props) {
  return (
    <div className="main-container">
      <div className="instructions">
        <p>Get points by clicking on an image but</p>
        <p>don't click on any more than once!</p>
      </div>
      <Cards originalImages={props.originalImages} />
    </div>
  );
}

export default Main;
