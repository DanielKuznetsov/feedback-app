import "./Container.scss";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { useState } from "react";

function Container() {
  const [feedbackQuantity, setFeedbackQuantity] = useState();

  return (
    <div className="Container">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <Navbar feedbackQuantity={feedbackQuantity} />
        <Main setFeedbackQuantity={setFeedbackQuantity} />
      </div>
    </div>
  );
}

export default Container;
