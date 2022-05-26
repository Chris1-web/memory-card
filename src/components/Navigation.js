import Scoreboard from "./Scoreboard";

function Navigation(props) {
  return (
    <div className="navigation">
      <h1>ANIMAL MEMORY GAME</h1>
      <Scoreboard score={props.score} />
    </div>
  );
}

export default Navigation;
