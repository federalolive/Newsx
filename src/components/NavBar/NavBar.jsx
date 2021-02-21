import React from 'react';
import { Link } from "react-router-dom";
import 'materialize-css';
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper indigo darken-4">
            <a href='/' className="custom-logo brand-logo left hide-on-small-and-down">NewsX</a>

            <ul id="nav-mobile" className="right">
   
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/profile" className="nav-link">Profile</Link></li>
              <li><Link to="/articles/search" className="nav-link">Article Search </Link></li>
              <li><Link to="/users" className="nav-link">Subscribers</Link></li>
              <li><Link to='' className='nav-link right' onClick={handleLogout}>LOG OUT</Link></li>
            </ul>
          </div>
        </nav>
        </div>
      :
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper indigo darken-4">
            <a href='/' className="custom-logo brand-logo left hide-on-small-and-down">NEWSX</a>
            <ul id="nav-mobile" className="right">
              <li><Link to="/login" className="nav-link">Log In</Link></li>
              <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
            </ul>
          </div>
        </nav>
        </div>
      }
    </>
  )
}

export default NavBar;
