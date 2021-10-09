import About from "./components/about/About";
import Activities from "./components/activities/Activities";
import Footbar from "./components/footbar/Footbar";
import Intro from "./components/intro/Intro";
import Objectives from "./components/objectives/Objectives";
import Preparing from "./components/preparing/Preparing";
import Subscription from "./components/subscription/Subscription";
import TeacherList from "./components/teacherList/TeacherList";
import Topbar from "./components/topbar/Topbar";
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <About />
        <Objectives />
        <Activities />
        <Preparing />
        <TeacherList />
        <Subscription />
      </div>
    </div>
  );
}

export default App;
