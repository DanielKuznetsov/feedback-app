import "./NewEditFeedback.scss";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function NewFeedback() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      await axios.post(
        `http://localhost:4000/api/v1/requests`,
        {
          title: formData.title,
          category: formData.category,
          description: formData.description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      setFormData({
        title: "",
        category: "Feature",
        description: "",
      });

      navigate("/");
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

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
              <stop stopColor="#E84D70" offset="0%" />
              <stop stopColor="#A337F6" offset="53.089%" />
              <stop stopColor="#28A7ED" offset="100%" />
            </radialGradient>
          </defs>
          <g fill="none" fillRule="evenodd">
            <circle fill="url(#a)" cx="28" cy="28" r="28" />
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z"
            />
          </g>
        </svg>
      </span>
      <div className="NewFeedback-wrapper">
        <p className="title">Create New Feedback</p>
        <form onSubmit={handleSubmit} className="form">
          <label className="label">
            <p className="label-title">Feedback Title</p>
            <p className="label-text">Add a short, descriptive headline</p>
            <input
              className="label-input"
              type="text"
              name="title"
              value={formData.name}
              onChange={handleChange}
              placeholder="Please add a dark theme option"
            />
          </label>

          <label className="label">
            <p className="label-title">Category</p>
            <p className="label-text">Choose a category for your feedback</p>
            <select
              className="label-select"
              name="category"
              value={formData.name}
              onChange={handleChange}
            >
              <option value="">Choose Category</option>
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
              name="description"
              value={formData.name}
              onChange={handleChange}
              placeholder="It would help people with light sensitivity and who prefer dark mode."
            />
          </label>
          <div className="form-buttons">
            <Link to="/" className="cancel">
              Cancel
            </Link>
            <input className="submit" type="submit" value="Add Feedback" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewFeedback;
