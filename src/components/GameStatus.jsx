function GameStatus({ currentPlayer, winner, isDraw }) {

  let message = `Player ${currentPlayer}'s Turn`;
  let statusClass = `player-${currentPlayer.toLowerCase()}`;

  if (winner) {
    message = `🏆 Player ${winner} Wins!`;
    statusClass = "winner";
  }

  if (isDraw) {
    message = "🤝 It's a Draw!";
    statusClass = "draw";
  }

  return (
    <div className={`status-box ${statusClass}`}>
      <span className="status-dot"></span>
      <h2>{message}</h2>
    </div>
  );
}

export default GameStatus;