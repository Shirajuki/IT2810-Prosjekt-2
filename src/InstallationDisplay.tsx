import React, { useState, useEffect } from "react";
import Poem from "./Poem";
import "./App.css";
import Moon from "./canvas_installations/moon";
import BlackForest from "./SVG_installations/BlackForest";
import Birch from "./canvas_installations/birch";
import WallFlower from "./canvas_installations/wallFlower";

const Display = (props: { title: string; onClick?: () => void }) => {
  const project = () => {
    switch (props.title) {
      case "A Wall Flower":
        return <WallFlower onClick={props.onClick}></WallFlower>;
      case "In the Black Forest":
        return <BlackForest onClick={props.onClick}></BlackForest>;
      case "The Birch-Tree at Loschwitz":
        return <Birch onClick={props.onClick}></Birch>;
      case "The Moon, how definite its orb! (fragment)":
        return <Moon onClick={props.onClick}></Moon>;
      default:
        return <h1>No project match</h1>;
    }
  };
  return project();
};

function InstallationDisplay(props: { title: string; onClick?: () => void }) {
  return (
    <>
      <Display title={props.title} onClick={props.onClick}></Display>
    </>
  );
}

export default InstallationDisplay;
