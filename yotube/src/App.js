import R from "./Routes/Routes";
// import { Route, Routes } from "react-router-dom";
// import Home from "../Pages/Home";
import { Link } from "react-router-dom";
// import Trending from "../Pages/Trending";
// import Shorts from "../Pages/Shorts";
// import Subscription from "../Pages/Subscription";
import { TiHome } from "react-icons/ti";
// import Profile from "../Pages/Profile";
import { MdOutlineLiveTv } from "react-icons/md";


import { MdOutlineSubscriptions } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <R />
        <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                padding: "12px",
                paddingTop: "18px",
              }}
              className="nav"
            >
              <div style={{ textAlign: "center" }}>
                <Link to="home">
                  <div>
                    <TiHome style={{ fontSize: "30px" }} />
                  </div>
                  {/* <span>Home</span> */}
                </Link>
              </div>
      
              <div style={{ textAlign: "center" }}>
                <Link to="Shorts">
                  <div>
                    <MdOutlineLiveTv style={{ fontSize: "25px" }} />
                  </div>
                </Link>
              </div>
      
              <div style={{ textAlign: "center" }}>
                <Link to="uploads">
                  <FaPlus style={{ fontSize: "25px" }} />
                  {/* Upload */}
                </Link>
              </div>
      
              <div style={{ textAlign: "center" }}>
                <Link to="subscription">
                  <MdOutlineSubscriptions style={{ fontSize: "25px" }} />
                </Link>
              </div>
      
              <div style={{ textAlign: "center" }}>
                <Link to="profile">
                  <CgProfile style={{ fontSize: "25px" }} />
                </Link>
              </div>
            </div>
    </div>
  );
}

export default App;
