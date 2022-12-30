import React from "react";
import "./Roadmap.scss";
import { Link } from "react-router-dom";

function Roadmap() {
  return (
    <div className="Roadmap">
      <div className="Roadmap-wrapper">
        <div className="Roadmap-top">
          <p>Roadmap</p>
          <Link className="link" to="/roadmap">
            View
          </Link>
        </div>

        <div className="Roadmap-bottom">
          <div className="details">
            <div>
              <span
                style={{ backgroundColor: "#F2F4FF" }}
                className="color-circle"
              ></span>
              <p className="status-name">Suggestions</p>
            </div>
            <span className="status-quantity">4</span>
          </div>
          <div className="details">
            <div>
              <span
                style={{ backgroundColor: "#F49F85" }}
                className="color-circle"
              ></span>
              <p className="status-name">Planned</p>
            </div>
            <span className="status-quantity">2</span>
          </div>
          <div className="details">
            <div>
              <span
                style={{ backgroundColor: "#AD1FEA" }}
                className="color-circle"
              ></span>
              <p className="status-name">In-Progress</p>
            </div>
            <span className="status-quantity">3</span>
          </div>
          <div className="details">
            <div>
              <span
                style={{ backgroundColor: "#62BCFA" }}
                className="color-circle"
              ></span>
              <p className="status-name">Live</p>
            </div>
            <span className="status-quantity">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
