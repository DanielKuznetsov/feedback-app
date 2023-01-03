import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Main.scss";
import Suggestion from "./Suggestion";
import InnerMain from "./InnerMain";
import loader from "./load.gif";
import "./Loader.scss";

function Main({setFeedbackQuantity}) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

          setInterval(() => {
            setIsLoading(false);
          }, 600);
          setData(requests.data.data.requests);
          setFeedbackQuantity(requests.data.data.requests.length)
        } catch (err) {
          console.log(err);
        }
      },
    []
  );

  if (isLoading) {
    return (
      <div className="Loader">
        <p>Loading...</p>
        <img src={loader} alt="loader-gif" />
      </div>
    );
  }

  const divRequests = data?.map((request, index) => (
    <Suggestion key={index} request={request} />
  ));

  return (
    <div className="Main">{divRequests.length > 0 ? divRequests : <InnerMain />}</div>
  );
}

export default Main;
