import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo.png'

// const nav = document.querySelector('nav');
// window.addEventListener('scroll',function () {
//   if(this.window.pageYOffset >100){
//     nav.classList.add('navbar-dark');
//   }else{
//     nav.classList.remove('navbar-dark');
//   }
// });

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-dark fixed-top navbar-expand-lg">
  <Link to="/" className="navbar-brand">
   <img src={logo1} alt="" width="100" height="100" class="d-inline-block align-text-top" />
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
      <Link to="/contact-us" className="nav-link">Contact Us</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">About Us</Link>
      </li>
      <li className="nav-item">
        <Link to="/travel" className="nav-link" >Food Destinations</Link>
      </li>
    </ul>
  </div>
</nav>
</div>

    );
}

export default Navbar;