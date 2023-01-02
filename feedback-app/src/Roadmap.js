import React from "react";
import "./Roadmap.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Roadmap({ setRoadmapData }) {
  const [data, setData] = useState(null);

  useEffect(
    () =>
      async function () {
        try {
          const requests = await axios.get(
            "http://localhost:4000/api/v1/requests",
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );

          setData(requests.data.data.requests);
        } catch (err) {
          console.log(err);
        }
      },
    []
  );

  const newArr = [
    ["In-Progress", 0, "#AD1FEA", []],
    ["Live", 0, "#62BCFA", []],
    ["Suggestion", 0, "#F2F4FF", []],
    ["Planned", 0, "#F49F85", []],
  ];

  data?.forEach((req, index) => {
    if (req.status === "In-Progress") {
      newArr[0][1]++;
      newArr[0][3].push(req);
    }

    if (req.status === "Live") {
      newArr[1][1]++;
      newArr[0][3].push(req);
    }

    if (req.status === "Suggestion") {
      newArr[2][1]++;
      newArr[0][3].push(req);
    }

    if (req.status === "Planned") {
      newArr[3][1]++;
      newArr[0][3].push(req);
    }
  });

  const divs = newArr.map((el, index) => {
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

  const handleClick = () => {
    setRoadmapData(newArr);
  };

  return (
    <div className="Roadmap">
      <div className="Roadmap-wrapper">
        <div className="Roadmap-top">
          <p>Roadmap</p>
          <Link onClick={handleClick} className="link" to="/roadmap">
            View
          </Link>
        </div>

        <div className="Roadmap-bottom">
          {divs}
          {/* <div className="details">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
