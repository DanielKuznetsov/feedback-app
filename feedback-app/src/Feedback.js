import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Feedback.scss";
import Suggestion from "./Suggestion";

function Feedback() {
  const { id } = useParams();
  const [data, setData] = useState(null);

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

          setData(request);
        } catch (err) {
          console.log(err);
        }
      },
    [id]
  );

  return (
    <div className="Feedback">
      {data && <Suggestion request={data.data?.data.request[0]} />}
    </div>
  );
}

export default Feedback;
