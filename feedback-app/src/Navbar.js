import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-wrapper">
        <div className="left-side">
          <span>6</span>
          <span>Suggestions</span>
        </div>
        <div className="right-side">
          <Link to="/newFeedback" className="btn">
            <span>+</span> <span>Add Feedback</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
