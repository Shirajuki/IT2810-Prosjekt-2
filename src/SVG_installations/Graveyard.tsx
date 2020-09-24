import React, { useState } from "react";

interface IProps {
  onClick: () => void;
}
function Graveyard({ onClick }: IProps) {
  return (
    <div className="svg" onClick={onClick}>
      <svg width="650" height="350" fill="lightblue">
        <rect x="0" y="0" width="650" height="350" fill="lightblue"></rect>
        <circle cx="450" cy="50" r="50" fill="yellow"></circle>
        <circle cx="450" cy="50" r="40" fill="orange"></circle>
        <polygon points="-50, 100 0, 50 75, 200 0, 200" fill="grey"></polygon>
        <polygon points="0, 100 50, 50 125, 200 0, 200" fill="grey"></polygon>
        <polygon points="50, 100 100, 50 175, 200 0, 200" fill="grey"></polygon>
        <polygon
          points="100, 100 150, 50 225, 200 0, 200"
          fill="grey"
        ></polygon>
        <polygon
          points="150, 100 200, 50 275, 200 0, 200"
          fill="grey"
        ></polygon>
        <polygon
          points="200, 100 250, 50 325, 200 0, 200"
          fill="grey"
        ></polygon>
        <polygon
          points="250, 100 300, 50 375, 200 0, 200"
          fill="grey"
        ></polygon>
        <polygon
          points="300, 100 350, 50 425, 200 0, 200"
          fill="grey"
        ></polygon>
        <polygon
          points="350, 100 400, 50 475, 200 0, 200"
          fill="grey"
        ></polygon>
        <polygon
          points="400, 100 450, 50 525, 200 0, 200"
          fill="grey"
        ></polygon>
        <polygon
          points="450, 100 500, 50 575, 200 0, 200"
          fill="grey"
        ></polygon>
        <polygon
          points="500, 100 550, 50 625, 200 0, 200"
          fill="grey"
        ></polygon>
        <polygon
          points="550, 100 600, 50 675, 200 0, 200"
          fill="grey"
        ></polygon>
        <polygon
          points="600, 100 650, 50 725, 200 0, 200"
          fill="grey"
        ></polygon>
        <circle cx="100" cy="350" r="250" fill="lightgreen"></circle>
        <circle cx="500" cy="450" r="350" fill="lightgreen"></circle>
        <rect x="400" y="175" width="150" height="125" fill="brown"></rect>
        <polygon points="400, 175 475, 100 550, 175" fill="brown"></polygon>
        <polygon
          points="475, 100 525, 75 600, 150 550, 175"
          fill="black"
        ></polygon>
        <polygon
          points="600, 150 550, 175 550, 300 600, 275"
          fill="black"
        ></polygon>

        <path d="M445, 300 L505, 300 L505, 250 L445, 250" fill="black"></path>
        <circle cx="475" cy="250" r="30" fill="black"></circle>
        <path d="M450, 300 L500, 300 L500, 250 L450, 250"></path>
        <circle cx="475" cy="250" r="25"></circle>
        <circle cx="475" cy="175" r="30" fill="black"></circle>
        <circle cx="475" cy="175" r="25"></circle>
        <rect x="445" y="170" height="10" width="60" fill="black"></rect>
        <rect x="470" y="145" height="60" width="10" fill="black"></rect>
        <polygon
          points="75, 250 220, 325 325, 325 150, 250"
          fill="brown"
        ></polygon>
        <ellipse cx="270" cy="324" rx="50" ry="8" fill="brown"></ellipse>
        <polygon
          points="75, 250 75, 175 150, 175 150, 250"
          fill="grey"
        ></polygon>
        <circle cx="112.5" cy="175" r="37.5" fill="grey"></circle>
        <rect x="470" y="60" width="10" height="50" fill="brown"></rect>
        <rect x="460" y="70" width="30" height="10" fill="brown"></rect>
        <text x="100" y="180" fill="white" textLength="30">
          RIP
        </text>
      </svg>
    </div>
  );
}

export default Graveyard;
