import React from "react";
import "./Suggestion.scss";

function Suggestion() {
  return (
    <div className="Suggestion">
      <div className="Suggestion-wrapper">
        <div className="left-side">
          <div className="upvotes">
            <span className="upvotes-icon">
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 6l4-4 4 4"
                  stroke="#4661E6"
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </span>
            <span className="upvotes-counter">112</span>
          </div>

          <div className="content">
            <p className="content-title">Add tags for solutions</p>
            <p className="content-description">
              Easier to search for solutions based on a specific stack.
            </p>
            <span className="content-category">Enhancement</span>
          </div>
        </div>

        <div className="comments">
          <span className="icon-comment">
            <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
                fill="#CDD2EE"
                fill-rule="nonzero"
              />
            </svg>
          </span>
          <span className="comments-quantity">2</span>
        </div>
      </div>
    </div>
  );
}

export default Suggestion;
