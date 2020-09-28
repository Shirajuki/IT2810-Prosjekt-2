import React from "react";
import Moon from "./canvas_installations/moon";
import BlackForest from "./SVG_installations/BlackForest";
import Birch from "./canvas_installations/birch";
import WallFlower from "./canvas_installations/wallFlower";
import Snow from "./canvas_installations/snow";
import Graveyard from "./SVG_installations/Graveyard";
import MoonAndStar from "./SVG_installations/MoonAndStar";
import Home from "./SVG_installations/Home";
import Flower from "./canvas_installations/flower";

//Maps the title to the correct image to make everything in the installation accessible based on title
const Display = (props: { title: string; onClick?: () => void }) => {
  const project = () => {
    switch (props.title) {
      case "A Wall Flower":
        return <WallFlower onClick={props.onClick}></WallFlower>;
      case "In the Black Forest":
        return <BlackForest onClick={props.onClick}></BlackForest>;
      case "The Birch-Tree at Loschwitz":
        return <Birch onClick={props.onClick}></Birch>;
      case "The Moon, how definite its orb!":
        return <Moon onClick={props.onClick}></Moon>;
      case "Winter Song":
        return <Snow onClick={props.onClick}></Snow>;
      case "Epitaph. on Mrs Corbet, Who Died of a Cancer in Her Breast.":
        return <Graveyard onClick={props.onClick}></Graveyard>;
      case "Ah, Moon -- and Star!":
        return <MoonAndStar onClick={props.onClick}></MoonAndStar>;
      case "Fragment: Home":
        return <Home onClick={props.onClick}></Home>;
      case "I hide myself within my flower,":
        return <Flower onClick={props.onClick}></Flower>;
      default:
        return <h1>No project match</h1>;
    }
  };
  return project();
};

//Returns the picture assosiated with the title given
function InstallationDisplay(props: { title: string; onClick?: () => void }) {
  return (
    <>
      <Display title={props.title} onClick={props.onClick}></Display>
    </>
  );
}

export default InstallationDisplay;
