import React from "react";
import "./Container.scss";
import Sidebar from "./Sidebar";

function Container() {
  return (
    <div className="Container">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Container;
