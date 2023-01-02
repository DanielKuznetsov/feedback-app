import React from "react";
import "./Roadmap.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Roadmap() {
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
      }
  );

  const newArr = [
    ["In-Progress", 0, "#AD1FEA", [], "Currently being developed"],
    ["Live", 0, "#62BCFA", [], "Released features"],
    ["Suggestion", 0, "#F2F4FF", [], "Suggested for development"],
    ["Planned", 0, "#F49F85", [], "Ideas prioritized for research"],
  ];

  data?.forEach((req, index) => {
    if (req.status === "In-Progress") {
      newArr[0][1]++;
      newArr[0][3].push(req);
    }

    if (req.status === "Live") {
      newArr[1][1]++;
      newArr[1][3].push(req);
    }

    if (req.status === "Suggestion") {
      newArr[2][1]++;
      newArr[2][3].push(req);
    }

    if (req.status === "Planned") {
      newArr[3][1]++;
      newArr[3][3].push(req);
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
