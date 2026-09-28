function Controls({ restartGame, resetScore }) {

  return (
    <div className="controls">

      <button
        className="restart-btn"
        onClick={restartGame}
      >
        🔄 New Game
      </button>

      <button
        className="reset-btn"
        onClick={resetScore}
      >
        🗑️ Reset Score
      </button>

    </div>
  );
}

export default Controls;