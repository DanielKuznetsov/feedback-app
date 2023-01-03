import React, { useEffect, useState } from "react";
import "./SingleRoadmap.scss";

function SingleRoadmap({ box }) {
  const [boxesUpdate, setBoxesUpdate] = useState("");

  useEffect(() => {
    if (box[3].length > 0) {
      const smallBoxes = box[3].map((el, index) => {
        return (
          <div
            key={index}
            className="box"
            style={{ borderTop: `5px solid ${box[2]}` }}
          >
            <div className="status">
              <span
                style={{ backgroundColor: box[2] }}
                className="status-circle"
              ></span>
              <p className="status-name">{box[0]}</p>
            </div>
            <div className="details">
              <span className="title">{el.title}</span>
              <span className="subtitle">{el.description}</span>
              <span className="feature">{el.category}</span>
            </div>
            <div className="btns">
              <div className="upvotes">
                <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 6l4-4 4 4"
                    stroke="#4661E6"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>

                <span className="upvotes-counter">0</span>
              </div>
              <div className="comments">
                <span className="icon-comment">
                  <svg
                    width="18"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
                      fill="#CDD2EE"
                      fillRule="nonzero"
                    />
                  </svg>
                </span>
                <span className="comments-quantity">0</span>
              </div>
            </div>
          </div>
        );
      });

      setBoxesUpdate(smallBoxes);
    }
  }, [box]);

  return (
    <div className="content">
      <p className="top-text">
        <span className="title">
          {box[0]} ({box[1]})
        </span>
        <span className="subtitle">{box[4]}</span>
      </p>
      {boxesUpdate}
    </div>
  );
}

export default SingleRoadmap;
