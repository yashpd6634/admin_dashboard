import classes from "./App.module.css"
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from './components/topbar/Topbar';
import Home from "./page/home/Home";

function App() {
  return (
    <div>
      <Topbar />
      <div className={classes.container}>
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
