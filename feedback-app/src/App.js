import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "./Container.js";
import FunctionWrapper from "./FunctionWrapper.js";
import NoMatch from "./NoMatch.js";

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Container />} />
        <Route exact path="/newFeedback" element={<FunctionWrapper />} />
        <Route exact path="/editFeedback/:id" element={<FunctionWrapper />} />
        <Route exact path="/feedback/:id" element={<FunctionWrapper single />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/noMatch" element={<NoMatch />} />
        {/* <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}
