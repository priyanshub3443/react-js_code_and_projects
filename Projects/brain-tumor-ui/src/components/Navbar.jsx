import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4 premium-navbar">
      {/* Logo */}
      <div className="logo">🧠 BrainAI</div>

      {/* Menu */}
      <div className="nav-links ms-auto">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>

        <NavLink to="/about" className="nav-item">
          About
        </NavLink>

        <NavLink to="/qa" className="nav-item">
          Q&A
        </NavLink>

        <NavLink to="/help" className="nav-item">
          Help
        </NavLink>
      </div>
    </nav>
  );
}
