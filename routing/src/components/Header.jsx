import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
     
   <div>
  {/* Navbar Start */}
  <div className="container-fluid bg-white position-relative">
    <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
      <a href="index.html" className="navbar-brand text-secondary">
        <h1 className="display-4 text-uppercase">REACT.JS</h1>
      </a>
      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ml-auto py-0 pr-3 border-right">
          <NavLink  to="/" className="nav-item nav-link ">Home</NavLink>
          <NavLink to="/about" className="nav-item nav-link">About</NavLink>
          <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
          <NavLink to="/project" className="nav-item nav-link">Projects</NavLink>
          {/* <div class="nav-item dropdown">
                        <Link href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</Link>
                        <div class="dropdown-menu rounded-0 m-0">
                            <Link href="team.html" class="dropdown-item">Meat The Team</Link>
                            <Link href="testimonial.html" class="dropdown-item">Testimonial</Link>
                        </div>
                    </div> */}
          <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
        </div>
        <div className="d-none d-lg-flex align-items-center pl-4">
          <i className="fa fa-2x fa-mobile-alt text-primary mr-3" />
          <div>
            <h6 className="text-body text-uppercase mb-1"><small>Call Anytime</small></h6>
            <h6 className="m-0">+012 345 6789</h6>
          </div>
        </div>
      </div>
    </nav>
  </div>
  {/* Navbar End */}
  </div>


  )
}

export default Header