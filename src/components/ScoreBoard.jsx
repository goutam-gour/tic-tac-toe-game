function ScoreBoard({ score }) {
  return (
    <div className="score-board">

      <div className="score-card player-x">
        <span>PLAYER X</span>
        <strong>{score.X}</strong>
      </div>

      <div className="vs">
        VS
      </div>

      <div className="score-card player-o">
        <span>PLAYER O</span>
        <strong>{score.O}</strong>
      </div>

    </div>
  );
}

export default ScoreBoard;