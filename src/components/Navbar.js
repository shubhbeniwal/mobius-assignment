import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MobiusEngine</div>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>About Us</li>
        <li>Plans</li>
        <li>Testimonials</li>
        <li>Privacy Policy</li>
        <li>More</li>
      </ul>
      <button className="navbar-button">Get Started</button>
    </nav>
  );
}

export default Navbar;
