import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import "../styles/Navbar.css";



function Navbar() {
  return (
  
    <div className='nav-bar'>
        <div className='logo'>
            <img className='image-logo' src={Logo} alt="sample logo" />
        </div>
        <div className='list'>
            <ul className="nav justify-content-end">
                    <li className="nav-item" >
                        <Link to="/" Name="nav-link activeclass" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="menu" Name="nav-link activeclass" aria-current="page">Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="about" Name="nav-link activeclass" aria-current="page">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact" Name="nav-link activeclass" aria-current="page">Contact Us</Link>
                    </li>
                </ul>
        </div>


     
    </div>
  )
}

export default Navbar
