import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar({ roadmap }) {
  return (
    <div className="Navbar">
      <div className="Navbar-wrapper">
        <div className="left-side">
          {roadmap ? (
            <div className="roadmap-links">
              <Link to="/" className="link">
                <span className="icon">
                  <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 9L2 5l4-4"
                      stroke="#ced5f8"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text">Go Back</span>
              </Link>
              <span>Roadmap</span>
            </div>
          ) : (
            <span>6 Suggestions</span>
          )}
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
