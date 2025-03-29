import R from "./Routes/Routes";
import BottomNav from "./Pages/BtmNav";
import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import Home from "../Pages/Home";
// import Trending from "../Pages/Trending";
// import Shorts from "../Pages/Shorts";
// import Subscription from "../Pages/Subscription";
// import Profile from "../Pages/Profile";

function App() {
  return (
    <div className="App">
      <R />
      <BottomNav/>
    </div>
  );
}

export default App;
