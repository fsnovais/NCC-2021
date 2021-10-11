import {useState} from "react";


import Topbar from "./components/topbar/Topbar";
import "./app.scss"
import HomePage from "./components/home/HomePage";
import Icpc from "./components/icpc/Icpc";
import Menu from "./components/menu/Menu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [menuOpen,setMenuOpen] = useState(false);


  return (
    <Router>
      <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
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
