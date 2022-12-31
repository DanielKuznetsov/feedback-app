import React from "react";
import { Link } from "react-router-dom";
import "./FunctionWrapper.scss";
import NewFeedback from "./NewFeedback";

function FunctionWrapper() {
  return (
    <div className="FunctionWrapper">
      <div className="FunctionWrapper-wrapper">
        <div className="go-back-link">
          <Link to="/" className="link">
            <span className="icon">
              <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 9L2 5l4-4"
                  stroke="#4661E6"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </span>
            <span className="text">Go Back</span>
          </Link>
        </div>
        <div className="WHATEVER-BOTTOM-CONTAINER">
            <NewFeedback />
        </div>
      </div>
    </div>
  );
}

export default FunctionWrapper;
