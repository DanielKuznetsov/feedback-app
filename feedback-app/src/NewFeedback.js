import React from "react";
import "./NewFeedback.scss";

function NewFeedback() {
  return (
    <div className="NewFeedback">
        <span className="NewFeedback-icon">
          <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient
                cx="103.9%"
                cy="-10.387%"
                fx="103.9%"
                fy="-10.387%"
                r="166.816%"
                id="a"
              >
                <stop stop-color="#E84D70" offset="0%" />
                <stop stop-color="#A337F6" offset="53.089%" />
                <stop stop-color="#28A7ED" offset="100%" />
              </radialGradient>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <circle fill="url(#a)" cx="28" cy="28" r="28" />
              <path
                fill="#FFF"
                fill-rule="nonzero"
                d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z"
              />
            </g>
          </svg>
        </span>
      <div className="NewFeedback-wrapper">
        <p className="title">Create New Feedback</p>
        <form className="form">
          <label className="label">
            <p className="label-title">Feedback Title</p>
            <p className="label-text">Add a short, descriptive headline</p>
            <input
              className="label-input"
              type="text"
              name="title"
              placeholder="Please add a dark theme option"
            />
          </label>

          <label className="label">
            <p className="label-title">Category</p>
            <p className="label-text">Choose a category for your feedback</p>
            <select className="label-select">
              <option value="Feature">Feature</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Bug">Bug</option>
            </select>
          </label>

          <label className="label">
            <p className="label-title">Feedback Detail</p>
            <p className="label-text">
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea
              className="label-textarea"
              name="details"
              placeholder="It would help people with light sensitivity and who prefer dark mode."
            />
          </label>

          {/* <input type="submit" value="Submit" /> */}
        </form>
      </div>
    </div>
  );
}

export default NewFeedback;
