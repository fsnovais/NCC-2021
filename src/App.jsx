import Topbar from "./components/topbar/Topbar";
import "./app.scss"
import HomePage from "./components/home/HomePage";
import Icpc from "./components/icpc/Icpc";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
      <Topbar />
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/icpc" exact>
          <Icpc/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
