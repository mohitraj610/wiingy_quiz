import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Pages/Home";
import Leaderboard from "./Components/Pages/Leaderboard";
import Navbar from "./Components/Layout/Navbar";
import Game1 from "./Components/Pages/Game1";
import Game2 from "./Components/Pages/Game2";
import Game3 from "./Components/Pages/Game3";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className="cc">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/leaderboard" exact element={<Leaderboard />} />
          <Route path="/game1" exact element={<Game1 />} />
          <Route path="/game2" exact element={<Game2 />} />
          <Route path="/game3" exact element={<Game3 />} />
        </Routes>
      </div>
  );
}

export default App;
