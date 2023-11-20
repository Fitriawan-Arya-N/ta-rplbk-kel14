// src/pages/home/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="container">
      <div className="text-center mx-auto">
        <h1 className="display-5 fw-bold mx-4">
          Im, Fake Commerce.
          <strong className="text-success">
            Explore your need
          </strong>
        </h1>

        <p className="mt-3 lead mx-4">
          Fake Commerce is an all-encompassing online shopping platform that
          provides a secure, convenient, and enjoyable shopping experience
          for users.
        </p>

        <div className="mt-4 d-flex justify-content-center gap-3">
          <Link
            to="/product-list"
            className="btn btn-success px-4 py-2 text-white"
          >
            Get Started
          </Link>

          <Link
            to="/about"
            className="btn btn-outline-success px-4 py-2"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
