import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./FullRoadmap.scss";
import SingleRoadmap from "./SingleRoadmap";
import { statusHelper } from "./status.js";
import loader from "./load.gif";
import "./Loader.scss";

function FullRoadmap() {
  const [responseArray, setResponseArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 600);

    statusHelper().then((data) => setResponseArray(data));
  }, []);

  const boxes = responseArray.map((box, index) => {
    return <SingleRoadmap key={index} box={box} />;
  });

  return (
    <div className="FullRoadmap">
      <div className="FullRoadmap-wrapper">
        <Navbar roadmap />
        {isLoading ? (
          <div className="Loader">
            <p>Loading...</p>
            <img src={loader} alt="loader-gif" />
          </div>
        ) : (
          <div className="boxes">{boxes}</div>
        )}
      </div>
    </div>
  );
}

export default FullRoadmap;
