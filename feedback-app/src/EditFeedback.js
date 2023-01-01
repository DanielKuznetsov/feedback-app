import "./NewEditFeedback.scss";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function EditFeedback() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    status: "",
    description: "",
  });

  const filterObj = (obj, ...allowedFields) => {
    const newObj = {};

    Object.keys(obj).forEach((el) => {
      if (allowedFields.includes(el)) newObj[el] = obj[el];
    });

    return newObj;
  };

  useEffect(
    () =>
      async function () {
        try {
          const request = await axios.get(
            `http://localhost:4000/api/v1/requests/${id}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );

          if (request.data.data.request.length !== 0) {
            // Filter the obj to copy existing data into new one to see which one was changed
            const newObj = filterObj(
              request.data?.data.request[0],
              "title",
              "category",
              "description",
              "status"
            );

            Object.entries(newObj).forEach(([key, value]) => {
              // console.log(`key: ${key} -> value: ${value}`);

              formData[key] = value;
            });

            setIsLoading(false);
            setFeedback(request.data?.data.request);
          } else {
            navigate("/noMatch");
            console.log("DNFjdkfnsk");
          }
        } catch (err) {
          navigate("/noMatch");
          console.log(err);
        }
      },
    [id, formData, navigate]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.patch(
        `http://localhost:4000/api/v1/requests/${id}`,
        {
          title: formData.title,
          category: formData.category,
          description: formData.description,
          status: formData.status,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      navigate("/");
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/requests/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
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
              transform="translate(8 8)"
              d="M19.512 15.367l4.975 4.53-3.8 5.54L11.226 29l4.485-4.1c.759.275 1.831.026 2.411-.594a1.958 1.958 0 00-.129-2.82c-.836-.745-2.199-.745-2.964.068-.57.607-.767 1.676-.44 2.381L11 28.713c.255-1.06.683-2.75 1.115-4.436l.137-.531c.658-2.563 1.287-4.964 1.287-4.964l5.973-3.415zM23.257 12L28 16.443l-2.584 2.606-4.89-4.583L23.257 12z"
              fill="#FFF"
              fillRule="nonzero"
            />
          </g>
        </svg>
      </span>
      <div className="NewFeedback-wrapper">
        <p className="title">Editing '{feedback[0].title}'</p>
        <form className="form" onSubmit={handleSubmit}>
          <label className="label">
            <p className="label-title">Feedback Title</p>
            <p className="label-text">Add a short, descriptive headline</p>
            <input
              className="label-input"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder={feedback[0].title}
            />
          </label>

          <label className="label">
            <p className="label-title">Category</p>
            <p className="label-text">Choose a category for your feedback</p>
            <select
              className="label-select"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Feature">Feature</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Bug">Bug</option>
            </select>
          </label>

          <label className="label">
            <p className="label-title">Update Status</p>
            <p className="label-text">Change feedback state</p>
            <select
              className="label-select"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Suggestion">Suggestion</option>
              <option value="Planned">Planned</option>
              <option value="In-Progress">In-Progress</option>
              <option value="Live">Live</option>
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
              value={formData.description}
              onChange={handleChange}
              placeholder={feedback[0].description}
            />
          </label>
          <div className="form-buttons">
            <div onClick={handleDelete} className="delete">
              Delete
            </div>
            <span>
              <Link to="/" className="cancel">
                Cancel
              </Link>
              <input className="submit" type="submit" value="Save Changes" />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditFeedback;
