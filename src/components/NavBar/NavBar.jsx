import React from 'react';
import { Link } from "react-router-dom";
import 'materialize-css';

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
        <nav>
          <div className="nav-wrapper indigo darken-4">
            <a href='/' className="brand-logo left hide-on-small-and-down">NEWSX</a>

            <ul id="nav-mobile" className="right">
   
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/profile" className="nav-link">Profile</Link></li>
              <li><Link to="/articles/search" className="nav-link">Article Search </Link></li>
              <li><Link to="/users" className="nav-link">Subscribers</Link></li>
              <li><Link to='' className='nav-link right' onClick={handleLogout}>LOG OUT</Link></li>
            </ul>
          </div>
        </nav>
      :
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li><Link to="/login" className="nav-link">Log In</Link></li>
              <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
            </ul>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar;
