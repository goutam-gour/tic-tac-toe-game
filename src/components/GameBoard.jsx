import Cell from "./Cell";

function GameBoard({
  board,
  handleCellClick,
  winningCells,
  gameOver,
}) {

  return (
    <div className="board">

      {board.map((value, index) => (
        <Cell
          key={index}
          value={value}
          onClick={() => handleCellClick(index)}
          disabled={value !== null || gameOver}
          isWinner={winningCells.includes(index)}
        />
      ))}

    </div>
  );
}

export default GameBoard;