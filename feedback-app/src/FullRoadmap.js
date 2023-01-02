import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./FullRoadmap.scss";
import SingleRoadmap from "./SingleRoadmap";
import { statusHelper } from "./status.js";

function FullRoadmap() {
  const [responseArray, setResponseArray] = useState([])

  useEffect(() => {
    statusHelper().then(data => setResponseArray(data))
  }, [])

  const boxes = responseArray.map((box, index) => {
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
