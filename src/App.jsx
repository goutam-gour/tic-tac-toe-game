import { useState } from "react";

import Header from "./components/Header";
import GameStatus from "./components/GameStatus";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import Controls from "./components/Controls";
import Footer from "./components/Footer";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const [winningCells, setWinningCells] = useState([]);
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });

  const [darkMode, setDarkMode] = useState(false);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkWinner(updatedBoard) {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;

      if (
        updatedBoard[a] &&
        updatedBoard[a] === updatedBoard[b] &&
        updatedBoard[a] === updatedBoard[c]
      ) {
        return {
          player: updatedBoard[a],
          cells: combination,
        };
      }
    }

    return null;
  }

  function handleCellClick(index) {
    if (board[index] || winner || isDraw) {
      return;
    }

    const updatedBoard = [...board];

    updatedBoard[index] = currentPlayer;

    setBoard(updatedBoard);

    const result = checkWinner(updatedBoard);

    if (result) {
      setWinner(result.player);
      setWinningCells(result.cells);

      setScore((previousScore) => ({
        ...previousScore,
        [result.player]: previousScore[result.player] + 1,
      }));

      return;
    }

    if (updatedBoard.every((cell) => cell !== null)) {
      setIsDraw(true);
      return;
    }

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  function restartGame() {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setIsDraw(false);
    setWinningCells([]);
  }

  function resetScore() {
    setScore({
      X: 0,
      O: 0,
    });

    restartGame();
  }

  const gameOver = winner || isDraw;

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="game-container">

        <ScoreBoard score={score} />

        <GameStatus
          currentPlayer={currentPlayer}
          winner={winner}
          isDraw={isDraw}
        />

        <GameBoard
          board={board}
          handleCellClick={handleCellClick}
          winningCells={winningCells}
          gameOver={gameOver}
        />

        <Controls
          restartGame={restartGame}
          resetScore={resetScore}
        />

      </main>

      <Footer />

    </div>
  );
}

export default App;