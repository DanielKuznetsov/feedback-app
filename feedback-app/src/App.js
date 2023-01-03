import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "./Container.js";
import FunctionWrapper from "./FunctionWrapper.js";
import NoMatch from "./NoMatch.js";
import FullRoadmap from "./FullRoadmap.js";
import SingleRoadmap from "./SingleRoadmap.js";

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Container />} />
        <Route exact path="/newFeedback" element={<FunctionWrapper />} />
        <Route exact path="/editFeedback/:id" element={<FunctionWrapper />} />
        <Route
          exact
          path="/feedback/:id"
          element={<FunctionWrapper single />}
        />
        <Route exact path="/roadmap" element={<FullRoadmap />} />
        <Route exact path="/newOne" element={<SingleRoadmap />} />
        <Route exact path="/deletedFeedback" element={<NoMatch deleted />} />
        <Route path="*" element={<NoMatch unknown />} />
      </Routes>
    </div>
  );
}
