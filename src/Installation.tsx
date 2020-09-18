import React, { useState, useEffect } from "react";
import Poem from "./Poem";
import "./App.css";
import Moon from "./canvas_installations/moon";

interface IProps {
  title: string;
  picture: string;
  sound: string;
}
function Installation({ title, picture, sound }: IProps) {
  return (
    <>
      <h1 className="installation-title">{title}</h1>
      <div className="installation-wrapper">
        <Moon></Moon>
        <div className="poem-container">
          <Poem title={title}></Poem>
        </div>
        <audio id="my_audio" src={sound} autoPlay loop></audio>
      </div>
    </>
  );
}

//<img className="installation-image" src={picture} />
export default Installation;
