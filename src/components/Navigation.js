import Scoreboard from "./Scoreboard";

function Navigation(props) {
  return (
    <div className="navigation">
      <Scoreboard score={props.score} bestScore={props.bestScore} />
      <h2>ANIMAL MEMORY GAME</h2>
    </div>
  );
}

export default Navigation;
