import React, { useState } from "react";
import "./App.css";
import Installation from "./Installation";
import { IoMdClose } from "react-icons/io";
import Poem from "./Poem";
import Slideshow from "./Slideshow";
import Test from "./SVG_installations/SVGtest";
import Moon from "./canvas_installations/moon";
import Snow from "./canvas_installations/snow";

import BlackForest from "./SVG_installations/BlackForest";
import Birch from "./canvas_installations/birch";
import WallFlower from "./canvas_installations/wallFlower";
var background = "";
var header = "";
var hover = "";

function setTheme(theme = "") {
  if (theme === "black") {
    background = "#171717";
    header = "rgba(23, 23, 23, 0.9)";
    hover = "#101010";
  } else if (theme === "white") {
    background = "#FFF";
    header = "rgba(200, 200, 200, 0.9)";
    hover = "#101010";
  } else if (theme === "pink") {
    background = "pink";
    header = "darkpink";
    hover = "#101010";
  }
  document.documentElement.style.setProperty("--background-colors", background);
  document.documentElement.style.setProperty("--header-color", header);
  document.documentElement.style.setProperty("--hover-color", hover);
}

function App() {
  const [modal, setModal] = useState({
    title: "",

    sound: "",
  });
  return (
    <>
      <div className="wrapper">
        <header>
          <div>
            <h1>
              <a href="index.html" className="logo">
                Kunst ustilling
              </a>
            </h1>
            <nav>
              <a onClick={() => setTheme("pink")}>Pink</a>
              <a onClick={() => setTheme("white")}>Light</a>
              <a onClick={() => setTheme("black")}>Dark</a>
            </nav>
          </div>
        </header>
        <br />
        <main>
          <Slideshow />
          <div className="sectionsplit"></div>
          <div className="sectionsplit"></div>
          <div className="tabBox">
            <a href="#">Tab 1</a>
            <a href="#">Tab 2</a>
          </div>
          <div className="artWrapper">
            <div className="art1">
              <div>
                <BlackForest
                  onClick={() =>
                    setModal({
                      title: "In the Black Forest",
                      sound: "audiofiles/Kalimba.mp3",
                    })
                  }
                ></BlackForest>
              </div>
              <div>
                <div className="poetryBox">
                  <h2 className="titlefont">In The Black Forest</h2>
                  <Poem title={"In the Black Forest"}></Poem>
                </div>
              </div>
            </div>
            <div className="art2">
              <div>
                <Birch
                  onClick={() =>
                    setModal({
                      title: "The Birch-Tree at Loschwitz",

                      sound: "audiofiles/Kalimba.mp3",
                    })
                  }
                ></Birch>
              </div>
              <div>
                <div className="poetryBox reversed">
                  <h2 className="titlefont">The Birch-Tree at Loschwitz</h2>
                  <Poem title={"The Birch-Tree at Loschwitz"}></Poem>
                </div>
              </div>
            </div>
            <div className="art3">
              <div>
                <WallFlower
                  onClick={() =>
                    setModal({
                      title: "A Wall Flower",
                      sound: "audiofiles/Kalimba.mp3",
                    })
                  }
                ></WallFlower>
              </div>
              <div>
                <div className="poetryBox">
                  <h2 className="titlefont">A Wall Flower</h2>
                  <Poem title={"A Wall Flower"}></Poem>
                </div>
              </div>
            </div>
            <div className="art2">
              <div>
                <Snow
                  onClick={() =>
                    setModal({
                      title: "Winter Song",
                      sound: "audiofiles/Kalimba.mp3",
                    })
                  }
                ></Snow>
              </div>
              <div>
                <div className="poetryBox reversed">
                  <h2 className="titlefont">Winter Song</h2>
                  <Poem title={"Winter Song"}></Poem>
                </div>
              </div>
            </div>
          </div>
          <div className="sectionsplit"></div>
          <div id="root"></div>
        </main>
      </div>
      <div className="sectionsplit2"></div>
      <div
        className="modal-container"
        style={modal.title !== "" ? { display: "block" } : { display: "none" }}
      >
        <div id="modal-content">
          <div
            className="close-button"
            id="myBtn"
            onClick={() => setModal({ title: "", sound: "" })}
          >
            <IoMdClose />
          </div>

          <Installation title={modal.title} sound={modal.sound}></Installation>
        </div>
      </div>

      <footer>
        <p>this is a footer</p>
      </footer>
    </>
  );
}
export default App;
