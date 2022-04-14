import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Pages/Home";
import Leaderboard from "./Components/Pages/Leaderboard";
import Navbar from "./Components/Layout/Navbar";
import Game from "./Components/Pages/Game"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="cc">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/leaderboard" component={Leaderboard} />
          <Route exact path="/game" component={Game} />
        </Switch>
        <div className="mbaft">
        <button>BooK A Free Trial</button>
        </div>
      </div>
    </Router>
  );
}

export default App;
