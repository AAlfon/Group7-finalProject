import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo.png'

const Navbar = () => {

  // Navbar change color in scroll

  const [change, setChange] = useState('transparent')
  const [logoHeight, setlogoHeight] = useState(100)
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 80) {
      setChange('#876e4a')
      setlogoHeight(70)
    } else {
      setChange('transparent')
      setlogoHeight(100)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg" style={{backgroundColor: change, transition: "all 1s"}}>
        <Link to="/" className="navbar-brand">
        <img src={logo1} alt="" width="100" style={{height: logoHeight, transition: "all 1s"}} className="logo d-inline-block align-text-top" />
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
              <Link to="/menu" className="nav-link" >Featured Recipies</Link>
            </li>
            <li className="nav-item">
            <Link to="/contact-us" className="nav-link">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/travel" className="nav-link" >Food Destinations</Link>
              
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
          </ul>
  </div>
</nav>
</div>

    );
}

export default Navbar;