import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Feedback.scss";
import Suggestion from "./Suggestion";
import loader from "./load.gif";
import "./Loader.scss";

function Feedback() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () =>
      async function () {
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
          setInterval(() => {
            setIsLoading(false);
          }, 600);
          setData(request);
        } else {
          navigate("/noMatch");
        }
      },
    [id, navigate]
  );

  if (isLoading) {
    return (
      <div className="Loader">
        <p>Loading...</p>
        <img src={loader} alt="loader-gif" />
      </div>
    );
  }

  return (
    <div className="Feedback">
      {data && <Suggestion request={data.data?.data.request[0]} />}
    </div>
  );
}

export default Feedback;
