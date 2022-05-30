function Scoreboard(props) {
  return (
    <ul>
      <li>
        Score
        <p>{props.score}</p>
      </li>
      <li>
        Best Score
        <p>{props.bestScore}</p>
      </li>
    </ul>
  );
}

export default Scoreboard;
