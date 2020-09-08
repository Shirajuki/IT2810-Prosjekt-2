import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Poem from "./Poem";

function App() {
  return (
    <div className="App">
      <div className="App-header"></div>
      <svg width="400" height="400" fill="lightblue">
        <rect x="0" y="0" width="400" height="400"></rect>
        <circle cx="200" cy="200" r="190" fill="#fff"></circle>
        <circle cx="200" cy="200" r="170" fill="lightblue"></circle>
        <g id="peace">
          <rect x="190" y="20" width="20" height="180" fill="#fff"></rect>
          <polygon
            points="48, 310 60, 320 210, 200 190, 200"
            fill="#fff"
          ></polygon>
          <polygon
            points="352, 310 340, 320 190, 200 210, 200"
            fill="#fff"
          ></polygon>
        </g>
        <g className="bell-casing">
          <circle cx="200" cy="100" r="60" fill="gold"></circle>
          <rect x="140" y="100" width="120" height="80" fill="gold"></rect>
          <ellipse cx="200" cy="180" rx="80" ry="20" fill="gold"></ellipse>
        </g>
        <g className="bell-dot"></g>
      </svg>
      <Poem title={"Peace is a fiction of our Faith --"}></Poem>
    </div>
  );
}

export default App;
