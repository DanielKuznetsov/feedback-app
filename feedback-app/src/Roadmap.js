import React from "react";
import "./Roadmap.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { statusHelper } from "./status.js";

function Roadmap() {
  const [responseArray, setResponseArray] = useState([])

  useEffect(() => {
    statusHelper().then(data => setResponseArray(data))
  }, [])

  const divs = responseArray.map((el, index) => {
    return (
      <div key={index} className="details">
        <div>
          <span
            style={{ backgroundColor: el[2] }}
            className="color-circle"
          ></span>
          <p className="status-name">{el[0]}</p>
        </div>
        <span className="status-quantity">{el[1]}</span>
      </div>
    );
  });

  return (
    <div className="Roadmap">
      <div className="Roadmap-wrapper">
        <div className="Roadmap-top">
          <p>Roadmap</p>
          <Link className="link" to="/roadmap">
            View
          </Link>
        </div>

        <div className="Roadmap-bottom">{divs}</div>
      </div>
    </div>
  );
}

export default Roadmap;
