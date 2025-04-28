import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar container">
      <div className="logo">MobiusEngine</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Plans</li>
        <li>Testimonials</li>
        <li>Privacy Policy</li>
        <li>More</li>
      </ul>
      <button className="btn-primary">Get Started</button>
    </nav>
  );
}

export default Navbar;
