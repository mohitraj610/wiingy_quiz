import React from "react";
import { NavLink } from "react-router-dom";

import coding from './1.png';
import robotics from './2.png'
import arduino from './3.png'

import "./Home.css";

const Home = () => {

  const openClassBooking = () => {
    window.location = 'https://www.wiingy.com/booking/schedule_class';
  }
  

  return (
    <div className="df">
      <div className="container mt-3">
        <div className="row">
        <div className="col-md-4">
            <div className="card shadow-lg mb-3">
              <img src={coding} alt="" />
              <div class="card-body">
              <h6 class="card-title">Basics of Coding</h6>
              <p class="card-text">
              Test your knowledge of coding with this fun and interactive quiz
              </p>
              <h6 class="card-title">Level: Beginner</h6>
              <h6 class="card-title">Grade: 1-3</h6>
              <div className="text-center">
              <NavLink to="/game1">
                <button>
                Play Now
                </button>
              </NavLink>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg mb-3">
              <img src={robotics} alt="" />
              <div class="card-body">
              <h6 class="card-title">Basics of Computer</h6>
              <p class="card-text">
              Test your robotics knowledge with this fun and interactive quiz
              </p>
              <h6 class="card-title">Level: Intermediate</h6>
              <h6 class="card-title">Grade: 4-6</h6>
              <div className="text-center">
              <NavLink to="/game2">
                <button>
                Play Now
                </button>
              </NavLink>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg mb-3">
              <img src={arduino} alt="" />
              <div class="card-body">
              <h6 class="card-title">Basics of Arduino</h6>
              <p class="card-text">
              How much do you know about Arduino? Take this test to find out
              </p>
              <h6 class="card-title">Level: Intermediate</h6>
              <h6 class="card-title">Grade: 7-9</h6>
              <div className="text-center">
              <NavLink to="/game3">
                <button>
                Play Now
                </button>
              </NavLink>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
        <div className="db">
        <button onClick={openClassBooking}>Book A Free Trial</button>
        </div> 
    </div>
  );
};

export default Home;
