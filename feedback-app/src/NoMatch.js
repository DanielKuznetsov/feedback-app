import React from "react";
import InnerMain from "./InnerMain.js";
import Navbar from "./Navbar.js";
import "./NoMatch.scss";

function NoMatch({ deleted }) {
  return (
    <div className="NoMatch">
      <Navbar deleted />
      <InnerMain className="InnerMain" deleted={deleted ? deleted : null} />
    </div>
  );
}

export default NoMatch;
