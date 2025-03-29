import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">🌍 TravelFlow</Link>
      <div className="nav-links">
        <a href="#offers">הצעות</a>
        <a href="#contact">צור קשר</a>
      </div>
    </nav>
  );
}

export default Navbar;
