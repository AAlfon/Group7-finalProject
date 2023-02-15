import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <Link to="/" className="navbar-brand">
  {/* <img src="https://picsum.photos/200/300" alt="" width="50" height="34" class="d-inline-block align-text-top" /> */}
  LOGO
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link">Home </Link>
      </li>
      <li className="nav-item">
        <Link to="/menu" className="nav-link" >Menu</Link>
      </li>
      <li className="nav-item">
        <Link to="/travel" className="nav-link" >Travel</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">About Us</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact-us" className="nav-link">Contact Us</Link>
      </li>
    </ul>
  </div>
</nav>
</div>

    );
}

export default Navbar;