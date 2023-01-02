import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./FullRoadmap.scss";
import axios from "axios";
import SingleRoadmap from "./SingleRoadmap";

function FullRoadmap() {
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
    ["In-Progress", 0, "#AD1FEA", [], "Currently being developed"],
    ["Live", 0, "#62BCFA", [], "Released features"],
    ["Suggestion", 0, "#bdc7ff", [], "Suggested for development"],
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

  const boxes = newArr.map((box, index) => {
    return <SingleRoadmap key={index} box={box} />;
  });

  return (
    <div className="FullRoadmap">
      <div className="FullRoadmap-wrapper">
        <Navbar roadmap />
        <div className="boxes">{boxes}</div>
      </div>
    </div>
  );
}

export default FullRoadmap;
