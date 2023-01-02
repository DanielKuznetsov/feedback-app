import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "./Container.js";
import FunctionWrapper from "./FunctionWrapper.js";
import NoMatch from "./NoMatch.js";
import FullRoadmap from "./FullRoadmap.js";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  // const [data, setData] = useState(null);
  const [roadmapData, setRoadmapData] = useState([]);

  // useEffect(
  //   () =>
  //     async function () {
  //       try {
  //         const requests = await axios.get(
  //           "http://localhost:4000/api/v1/requests",
  //           {
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             withCredentials: true,
  //           }
  //         );

  //         setData(requests.data.data.requests);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     },
  //   [data]
  // );

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={<Container setRoadmapData={setRoadmapData} />}
        />
        <Route exact path="/newFeedback" element={<FunctionWrapper />} />
        <Route exact path="/editFeedback/:id" element={<FunctionWrapper />} />
        <Route
          exact
          path="/feedback/:id"
          element={<FunctionWrapper single />}
        />
        <Route
          exact
          path="/roadmap"
          element={<FullRoadmap roadmapData={roadmapData} />}
        />
        <Route exact path="/noMatch" element={<NoMatch />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
