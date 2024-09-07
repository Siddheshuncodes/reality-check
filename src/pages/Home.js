import React from "react";
import { Link } from "react-router-dom";
import '../css/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Reality Check</h1>
      <div className="arrow-navigation">
        <p>⬇️</p>
        <Link to="/check" className="check-link">Check Your Reality</Link>
      </div>
    </div>
  );
};

export default Home;
