import React from "react";
import "./Home.css";

const Home = () => {

  const openGame =() => {
    window.location= '/game';
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
              <button onClick={openGame}>
                Play Now
              </button>
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
              <button onClick={openGame}>
                Play Now
              </button>
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
              <button onClick={openGame}>
                Play Now
              </button>
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
              <button onClick={openGame}>
                Play Now
              </button>
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
              <button onClick={openGame}>
                Play Now
              </button>
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
              <button onClick={openGame}>
                Play Now
              </button>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div> 
    </div>
  );
};

export default Home;
