import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./FunctionWrapper.scss";
import NewFeedback from "./NewFeedback";
import EditFeedback from "./EditFeedback";
import Feedback from "./Feedback";

function FunctionWrapper({ single }) {
  const { pathname } = useLocation();
  const [feedbackComponent, setFeedbackComponent] = useState("");

  useEffect(() => {
    if (pathname === "/newFeedback") {
      setFeedbackComponent(<NewFeedback />);
    }

    if (pathname === "/editFeedback") {
      setFeedbackComponent(<EditFeedback />);
    }

    if (pathname.startsWith("/feedback")) {
      setFeedbackComponent(<Feedback />);
    }
  }, [pathname]);

  //   console.log(pathname);

  return (
    <div className="FunctionWrapper">
      <div className="FunctionWrapper-wrapper">
        <div className="links">
          <Link to="/" className="link">
            <span className="icon">
              <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 9L2 5l4-4"
                  stroke="#4661E6"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </span>
            <span className="text">Go Back</span>
          </Link>
          {single && (
            <Link className="editLink" to="/editFeedback">
              Edit Feedback
            </Link>
          )}
        </div>
        <div className="WHATEVER-BOTTOM-CONTAINER">{feedbackComponent}</div>
      </div>
    </div>
  );
}

export default FunctionWrapper;
