import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Feedback.scss";
import Suggestion from "./Suggestion";

function Feedback() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

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
          setData(request);
        } else {
          navigate("/noMatch");
        }
      },
    [id, navigate]
  );

  return (
    <div className="Feedback">
      {data && <Suggestion request={data.data?.data.request[0]} />}
    </div>
  );
}

export default Feedback;
