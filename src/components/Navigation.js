import Scoreboard from "./Scoreboard";

function Navigation(props) {
  return (
    <div className="navigation">
      <h1>ANIMAL MEMORY GAME</h1>
      <Scoreboard score={props.score} bestScore={props.bestScore} />
    </div>
  );
}

export default Navigation;
