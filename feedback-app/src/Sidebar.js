import React from "react";
import Title from "./Title.js";
import Sort from "./Sort.js";
import Roadmap from "./Roadmap.js";
import "./Sidebar.scss"

function Sidebar({setRoadmapData}) {
  return <div className="Sidebar">
    <Title />
    <Sort />
    <Roadmap setRoadmapData={setRoadmapData} />
  </div>;
}

export default Sidebar;
