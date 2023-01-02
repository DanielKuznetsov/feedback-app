import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Main.scss";
import Suggestion from "./Suggestion";
import InnerMain from "./InnerMain";

function Main() {
  const [data, setData] = useState(null);

  useEffect(
    () =>
      async function () {
        try {
          const requests = await axios.get(
            "http://localhost:4000/api/v1/requests",
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );

          setData(requests.data.data.requests);
        } catch (err) {
          console.log(err);
        }
      },
    []
  );

  const divRequests = data?.map((request, index) => (
    <Suggestion key={index} request={request} />
  ));

  return (
    <div className="Main">{divRequests ? divRequests : <InnerMain />}</div>
  );
}

export default Main;
