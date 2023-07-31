import React from "react";
import { Link } from "react-router-dom";
// import logo1 from "../path.png";

function Navbar(){
    return(
        <>
            <nav class="navbar navbar-expand-md sticky-navbar ">
      <div class="container">
        <a class="navbar-brand d-md-none d-xs-block py-3" href="#">
          {/* <img src={logo1} height="40" alt="Company Logo"/> */}
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <Link to='/' class="nav-link mx-2" active aria-current="page" >Home</Link>
            </li>
            <li class="nav-item">
              <Link to='/charities' class="nav-link mx-2">Charities</Link>
            </li>
            <li class="nav-item">
              
              <Link to='/create-charity' class="nav-link mx-2">Create Charity</Link>
            </li>
            <li class="nav-item">
              <Link to='/aboutus' class="nav-link mx-2">About Us</Link>
            </li>
            <li>
              {/* <button type="button" class="btn btn-primary" id="donate-btn" >Donate</button> */}
              <Link to='/donations' class=" btn btn-primary" id="donate-btn" >Donate</Link>
            </li>
            
          </ul>
          <ul class="navbar-nav mx-auto">
          <div className="sign-in">
              <li class="nav-item">
              <Link to='/login' class="nav-link mx-2">Login</Link>
              </li>
              <li class="nav-item">
              <Link to='/signup' class="nav-link mx-2">Signup</Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
        </>
    )
    
}

export default Navbar;