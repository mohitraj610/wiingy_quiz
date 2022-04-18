import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";


const Navbar = () => {

  const openWiingy = () => {
    window.location = 'https://www.wiingy.com';
  }

  const openClassBooking = () => {
    window.location = 'https://www.wiingy.com/booking/schedule_class';
  }



  return (
    <div className="rdsz">
    <nav className="navbar">
          <img src={"https://wiinblockextension.s3.ap-south-1.amazonaws.com/logo.png"} alt='logo' onClick={openWiingy} />
        <div className="cc" >
          <ul className="nav ">
            <li className="nav-item">
              <a className="nav-link" href="https://www.wiingy.com">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="https://www.wiingy.com">Testimonials</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="https://www.wiingy.com">Courses</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="https://blog.wiingy.com">Blog</a>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/"><p class="text-decoration-underline">All Quizzes</p></NavLink>
            </li>
          </ul>
        </div>
        <button className="trial" onClick={openClassBooking}>Book a Free Trial</button>
    </nav>
    </div>
  );
};

export default Navbar;
