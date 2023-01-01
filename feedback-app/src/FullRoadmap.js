import React from "react";
import Navbar from "./Navbar";
import "./FullRoadmap.scss";

function FullRoadmap() {
  return (
    <div className="FullRoadmap">
      <div className="FullRoadmap-wrapper">
        <Navbar />
        <div className="boxes">
          <div className="content">
            <p className="top-text">
              <span className="title">Planned (2)</span>
              <span className="subtitle">Ideas prioritized for research</span>
            </p>
            <div className="box">
              <div className="status">
                <span
                  style={{ backgroundColor: "#F49F85" }}
                  className="status-circle"
                ></span>
                <p className="status-name">Planned</p>
              </div>
              <div className="details">
                <span className="title">More comprehensive reports</span>
                <span className="subtitle">
                  It would be great to see a more detailed breakdown of
                  solution.
                </span>
                <span className="feature">Feature</span>
              </div>
              <div className="btns">
                <div className="upvotes">
                  <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 6l4-4 4 4"
                      stroke="#4661E6"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>

                  <span className="upvotes-counter">123</span>
                </div>
                <div className="comments">
                  <span className="icon-comment">
                    <svg
                      width="18"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
                        fill="#CDD2EE"
                        fillRule="nonzero"
                      />
                    </svg>
                  </span>
                  <span className="comments-quantity">2</span>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <p className="top-text">
              <span className="title">In-Progress (3)</span>
              <span className="subtitle">Ideas prioritized for research</span>
            </p>
          </div>
          <div className="content">
            <p className="top-text">
              <span className="title">Live (1)</span>
              <span className="subtitle">Ideas prioritized for research</span>
            </p>
          </div>
          <div className="content">
            <p className="top-text">
              <span className="title">Suggestion (1)</span>
              <span className="subtitle">Ideas prioritized for research</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullRoadmap;
