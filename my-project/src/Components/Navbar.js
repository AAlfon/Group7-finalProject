import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import "../styles/Navbar.css";



function Navbar() {
  return (
    <>

    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
  <Link to="/" className="navbar-brand"><img className='image-logo' src={Logo} alt="sample logo" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="menu" className="nav-link">Menu</Link>
      </li>
      <li className="nav-item">
        <Link to="travel" className="nav-link">Travel</Link>
      </li>
      <li className="nav-item">
        <Link to="about" className="nav-link">About Us</Link>
      </li>
      <li className="nav-item">
        <Link to="contact" className="nav-link">Contact Us</Link>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar
