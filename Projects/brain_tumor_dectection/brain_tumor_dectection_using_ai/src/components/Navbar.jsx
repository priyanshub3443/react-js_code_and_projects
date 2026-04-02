const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar premium-navbar">
      <div className="container d-flex justify-content-between">
        <span className="navbar-brand fw-bold glow-text">🧠 BrainAI</span>

        <button
          className="btn btn-light"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Day" : "🌙 Night"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
