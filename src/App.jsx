import Topbar from "./components/topbar/Topbar";
import "./app.scss"
import HomePage from "./components/home/HomePage";

function App() {
  return (
    <div className="app">
      <Topbar />
      <HomePage/>
    </div>
  );
}

export default App;
