import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Poem from "./Poem";

function App() {
  return (
    <div className="App">
      <div className="headers"></div>

      <Poem title={"Peace is a fiction of our Faith --"}></Poem>
    </div>
  );
}

export default App;
