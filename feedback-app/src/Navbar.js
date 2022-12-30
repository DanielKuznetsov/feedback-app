import React from "react";
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
          <div className="btn">
            {" "}
            <span>+</span> <span>Add Feedback</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
