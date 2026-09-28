function Cell({ value, onClick, disabled, isWinner }) {

  return (
    <button
      className={`cell ${value ? `cell-${value.toLowerCase()}` : ""} ${
        isWinner ? "winner-cell" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

export default Cell;