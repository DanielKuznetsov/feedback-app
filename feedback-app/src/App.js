import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "./Container.js";
import FunctionWrapper from "./FunctionWrapper.js";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/newFeedback" element={<FunctionWrapper />} />
        {/* <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}
