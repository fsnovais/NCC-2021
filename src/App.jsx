import Topbar from "./components/topbar/Topbar";
import "./app.scss"
import HomePage from "./components/home/HomePage";
import Icpc from "./components/icpc/Icpc";

function App() {
  return (
    <div className="app">
      <Topbar />
      <Icpc/>
    </div>
  );
}

export default App;
