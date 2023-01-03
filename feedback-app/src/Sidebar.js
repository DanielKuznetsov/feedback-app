import React from "react";
import Title from "./Title.js";
import Sort from "./Sort.js";
import Roadmap from "./Roadmap.js";
import "./Sidebar.scss";

function Sidebar({ handleClick }) {
  return (
    <div className="Sidebar">
      <Title />
      <Sort handleClick={handleClick} />
      <Roadmap />
    </div>
  );
}

export default Sidebar;
