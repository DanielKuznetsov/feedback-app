import React from "react";
import "./Container.scss";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Container() {
  return (
    <div className="Container">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <Navbar />
      </div>
    </div>
  );
}

export default Container;
