import React, { useState, useEffect } from "react";
import Poem from "./Poem";
import "./App.css";
import Moon from "./canvas_installations/moon";
import BlackForest from "./SVG_installations/BlackForest";
import Birch from "./canvas_installations/birch";
import WallFlower from "./canvas_installations/wallFlower";
import Snow from "./canvas_installations/snow";
import Test from "./SVG_installations/SVGtest";
import Flower from "./canvas_installations/flower";
import Home from "./SVG_installations/Home";
import MoonAndStar from "./SVG_installations/MoonAndStar";

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
      case "Winter Song":
        return <Snow onClick={props.onClick}></Snow>;
      case "I hide myself within my flower,":
        return <Flower onClick={props.onClick}></Flower>;
      case "Fragment: Home":
        return <Home onClick={props.onClick}></Home>;
      case "Ah, Moon -- and Star!":
        return <MoonAndStar onClick={props.onClick}></MoonAndStar>;
      //case "Epitaph. on Mrs Corbet, Who Died of a Cancer in Her Breast.":
      //  return <Test onClick={props.onClick}></Test>;
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
