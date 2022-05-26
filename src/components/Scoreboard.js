function Scoreboard(props) {
  return (
    <ul>
      <li>
        Score
        <p>{props.score}</p>
      </li>
      <li>
        Best Score
        <p>0</p>
      </li>
    </ul>
  );
}

export default Scoreboard;
