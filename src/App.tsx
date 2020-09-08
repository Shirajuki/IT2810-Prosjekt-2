import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Poem from "./Poem";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <svg></svg>
      <Poem title={"Ozymandias"}></Poem>
    </div>
  );
}

export default App;
