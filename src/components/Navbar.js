// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Hiring Platform</h2>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" exact className="nav-link" activeClassName="active-link">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/assessment" className="nav-link" activeClassName="active-link">
            Assessments
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
