import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage:
          "url('https://c.wallhere.com/photos/df/69/landscape_sea_beach-284240.jpg!d')",
      }}
    >
      <div className="headerContainer">
        <h1> Travel Agency</h1>
        <p> Take only memories, leave only footprints.</p>

        <button> Book Now </button>
      </div>
    </div>
  );
};

export default Home;
