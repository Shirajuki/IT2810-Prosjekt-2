import React, { useState } from "react";
import Poem from "./Poem";
import "./App.css";
import InstallationDisplay from "./InstallationDisplay";
import Star from "./Star";

function ArtDisplay(props: { title: string; setModal: () => void }) {
  return (
    <>
      <div>
        <InstallationDisplay
          title={props.title}
          onClick={() => props.setModal()}
        ></InstallationDisplay>
        <Star id={props.title} />
      </div>
      <div>
        <div className="poetryBox reversed">
          <h2 className="titlefont">{props.title}</h2>
          <Poem title={props.title}></Poem>
        </div>
      </div>
    </>
  );
}

export default ArtDisplay;
