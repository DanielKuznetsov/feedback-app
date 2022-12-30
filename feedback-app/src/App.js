import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Container from "./Container.js";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Container />} />
        {/* <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}