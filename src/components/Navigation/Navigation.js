// Navigation.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ isLoggedIn, onLogout }) => {
  const handleLogout = () => {
    onLogout();
    // Refresh the page after logout
    window.location.reload();
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div>
      <nav className="navigation-container navbar navbar-expand-lg navbar-light bg-success mb-4 mt-3">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product-list" className="nav-link books">
                  Product List
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link profile">
                  About
                </Link>
              </li>
              {isLoggedIn ? (
                <li
                  className="nav-item dropdown"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <a
                    className={`nav-link account ${isDropdownOpen ? 'active' : ''}`}
                    href="#"
                    role="button"
                    id="userDropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={isDropdownOpen}
                  >
                    Account
                  </a>
                  <div
                    className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
                    aria-labelledby="userDropdown"
                  >
                    <Link to="#" className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </Link>
                  </div>
                </li>
              ) : (
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
