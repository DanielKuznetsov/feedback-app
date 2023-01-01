import React from "react";
import "./Container.scss";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Main from "./Main";

function Container() {

  
  return (
    <div className="Container">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default Container;
