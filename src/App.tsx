import React, { useState } from "react";
import "./App.css";
import Installation from "./Installation";
import { IoMdClose } from "react-icons/io";
import Poem from "./Poem";
import Slideshow from "./Slideshow";
import InstallationDisplay from "./InstallationDisplay";
var background: string;
var header: string;
var hover: string;

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
                <InstallationDisplay
                  title="In the Black Forest"
                  onClick={() =>
                    setModal({
                      title: "In the Black Forest",
                      sound: "audiofiles/Kalimba.mp3",
                    })
                  }
                ></InstallationDisplay>
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
                <InstallationDisplay
                  title="The Birch-Tree at Loschwitz"
                  onClick={() =>
                    setModal({
                      title: "The Birch-Tree at Loschwitz",
                      sound: "audiofiles/Kalimba.mp3",
                    })
                  }
                ></InstallationDisplay>
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
                <InstallationDisplay
                  title="A Wall Flower"
                  onClick={() =>
                    setModal({
                      title: "A Wall Flower",
                      sound: "audiofiles/Kalimba.mp3",
                    })
                  }
                ></InstallationDisplay>
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
                <InstallationDisplay
                  title="Winter Song"
                  onClick={() =>
                    setModal({
                      title: "Winter Song",
                      sound: "audiofiles/Kalimba.mp3",
                    })
                  }
                ></InstallationDisplay>
              </div>
              <div>
                <div className="poetryBox reversed">
                  <h2 className="titlefont">Winter Song</h2>
                  <Poem title={"Winter Song"}></Poem>
                </div>
              </div>
            </div>
            <div className="art1">
              <div>
                <InstallationDisplay
                  title="Fragment: Home"
                  onClick={() =>
                    setModal({
                      title: "Fragment: Home",
                      sound: "audiofiles/Kalimba.mp3",
                    })
                  }
                ></InstallationDisplay>
              </div>
              <div>
                <div className="poetryBox">
                  <h2 className="titlefont">Fragment: Home</h2>
                  <Poem title={"Fragment: Home"}></Poem>
                </div>
              </div>
            </div>
            <div className="art2">
              <div>
                <InstallationDisplay
                  title="Ah, Moon -- and Star!"
                  onClick={() =>
                    setModal({
                      title: "Ah, Moon -- and Star!",
                      sound: "audiofiles/Kalimba.mp3",
                    })
                  }
                ></InstallationDisplay>
              </div>
              <div>
                <div className="poetryBox reversed">
                  <h2 className="titlefont">Ah, Moon -- and Star!</h2>
                  <Poem title={"Ah, Moon -- and Star!"}></Poem>
                </div>
              </div>
            </div>
            <div className="art1">
              <div>
                <InstallationDisplay
                  title="I hide myself within my flower,"
                  onClick={() =>
                    setModal({
                      title: "I hide myself within my flower,",
                      sound: "audiofiles/Kalimba.mp3",
                    })
                  }
                ></InstallationDisplay>
              </div>
              <div>
                <div className="poetryBox">
                  <h2 className="titlefont">I hide myself within my flower,</h2>
                  <Poem title={"I hide myself within my flower,"}></Poem>
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

      <footer></footer>
    </>
  );
}
export default App;
