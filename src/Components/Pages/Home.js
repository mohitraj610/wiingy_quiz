import React from "react";
import "./Home.css";

const Home = () => {

  const openGame =() => {
    window.location= '/game';
  }

  const game = [
    {
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
      name: 'Game 1',
      desciption: 'Description about the quiz. This is a wonderful description wow.',
      level: 'Level: Intermediate',
      grade: 'Grade: 1-3',
      game_src: 'https://quizizz.com/join?gc=35438389',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
      name: 'Game 2',
      desciption: 'Description about the quiz. This is a wonderful description wow.',
      level: 'Level: Intermediate',
      grade: 'Grade: 1-3',
      game_src: 'https://quizizz.com/join?gc=35438389',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
      name: 'Game 3',
      desciption: 'Description about the quiz. This is a wonderful description wow.',
      level: 'Level: Intermediate',
      grade: 'Grade: 1-3',
      game_src: 'https://quizizz.com/join?gc=35438389',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
      name: 'Game 4',
      desciption: 'Description about the quiz. This is a wonderful description wow.',
      level: 'Level: Intermediate',
      grade: 'Grade: 1-3',
      game_src: 'https://quizizz.com/join?gc=35438389',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
      name: 'Game 5',
      desciption: 'Description about the quiz. This is a wonderful description wow.',
      level: 'Level: Intermediate',
      grade: 'Grade: 1-3',
      game_src: 'https://quizizz.com/join?gc=35438389',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
      name: 'Game 6',
      desciption: 'Description about the quiz. This is a wonderful description wow.',
      level: 'Level: Intermediate',
      grade: 'Grade: 1-3',
      game_src: 'https://quizizz.com/join?gc=35438389',
    },
  ];

  const cardRender = (card) => 
  {
    return(
          <div className="col-md-4">
            <div className="card shadow-lg mb-3">
              <img src={card.img} alt="" />
              <div class="card-body">
              <h6 class="card-title">{card.name}</h6>
              <p class="card-text">
              {card.desciption}
              </p>
              <h6 class="card-title">{card.level}</h6>
              <h6 class="card-title">{card.grade}</h6>
              <div className="text-center">
              <button onClick={openGame}>
                Play Now
              </button>
              </div>
            </div>
            </div>
          </div>
    )
  }


  return (
    <div className="df">
      <div className="container mt-3">
        <div className="row">
          {game.map(cardRender)}
          </div>
        </div> 
    </div>
  );
};

export default Home;
