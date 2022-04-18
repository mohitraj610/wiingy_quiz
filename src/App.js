import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Pages/Home";
import Leaderboard from "./Components/Pages/Leaderboard";
import Navbar from "./Components/Layout/Navbar";
import Game from "./Components/Pages/Game"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className="cc">
        <div className="navstick">
        <Navbar />
        </div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/leaderboard" exact element={<Leaderboard />} />
          <Route path="/game" exact element={<Game />} />
        </Routes>
      </div>
  );
}

export default App;
