import React from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";

const Home = () => {

  const openGame =() => {
    window.location= '/game';
  }

  const openClassBooking = () => {
    window.location = 'https://www.wiingy.com/booking/schedule_class';
  }
  


  return (
    <div className="df">
      <div className="container mt-3">
        <div className="row">
        <div className="col-md-4">
            <div className="card shadow-lg mb-3">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt="" />
              <div class="card-body">
              <h6 class="card-title">Game 1</h6>
              <p class="card-text">
              Description about the quiz. This is a wonderful description wow.
              </p>
              <h6 class="card-title">Level: Intermediate</h6>
              <h6 class="card-title">Grade: 1-3</h6>
              <div className="text-center">
              <NavLink to="/game">
                Play Now
              </NavLink>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg mb-3">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt="" />
              <div class="card-body">
              <h6 class="card-title">Game 1</h6>
              <p class="card-text">
              Description about the quiz. This is a wonderful description wow.
              </p>
              <h6 class="card-title">Level: Intermediate</h6>
              <h6 class="card-title">Grade: 1-3</h6>
              <div className="text-center">
              <NavLink to="/game">
                Play Now
              </NavLink>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg mb-3">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt="" />
              <div class="card-body">
              <h6 class="card-title">Game 1</h6>
              <p class="card-text">
              Description about the quiz. This is a wonderful description wow.
              </p>
              <h6 class="card-title">Level: Intermediate</h6>
              <h6 class="card-title">Grade: 1-3</h6>
              <div className="text-center">
              <NavLink to="/game">
                Play Now
              </NavLink>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg mb-3">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt="" />
              <div class="card-body">
              <h6 class="card-title">Game 1</h6>
              <p class="card-text">
              Description about the quiz. This is a wonderful description wow.
              </p>
              <h6 class="card-title">Level: Intermediate</h6>
              <h6 class="card-title">Grade: 1-3</h6>
              <div className="text-center">
              <NavLink to="/game">
                Play Now
              </NavLink>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg mb-3">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt="" />
              <div class="card-body">
              <h6 class="card-title">Game 1</h6>
              <p class="card-text">
              Description about the quiz. This is a wonderful description wow.
              </p>
              <h6 class="card-title">Level: Intermediate</h6>
              <h6 class="card-title">Grade: 1-3</h6>
              <div className="text-center">
              <NavLink to="/game">
                Play Now
              </NavLink>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg mb-3">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt="" />
              <div class="card-body">
              <h6 class="card-title">Game 1</h6>
              <p class="card-text">
              Description about the quiz. This is a wonderful description wow.
              </p>
              <h6 class="card-title">Level: Intermediate</h6>
              <h6 class="card-title">Grade: 1-3</h6>
              <div className="text-center">
              <NavLink to="/game">
                Play Now
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
