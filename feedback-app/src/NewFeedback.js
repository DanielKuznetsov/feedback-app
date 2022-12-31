import React from "react";
import "./NewFeedback.scss";

function NewFeedback() {
  return (
    <div className="NewFeedback">
      <div className="NewFeedback-wrapper">
        <p className="title">Create New Feedback</p>
        <form className="form">
          <label className="label">
            <p className="label-title">Feedback Title</p>
            <p className="label-text">Add a short, descriptive headline</p>
            <input className="label-input" type="text" name="title" />
          </label>

          <label>
            <p>Category</p>
            <p>Choose a category for your feedback</p>
            <select>
              <option value="Feature">Feature</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Bug">Bug</option>
            </select>
          </label>

          <label>
            <p>Feedback Detail</p>
            <p>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea name="details" />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default NewFeedback;
