function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">

      <div>
        <h1>⭕ Tic Tac Toe</h1>
        <p>Play. Think. Win.</p>
      </div>

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

    </header>
  );
}

export default Header;