import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Installation from "./Installation";
import { IoMdClose } from "react-icons/io";
import Poem from "./Poem";
import Slideshow from "./Slideshow";
import Test from "./SVG_installations/SVGtest";
import Moon from "./canvas_installations/moon";
import Snow from "./canvas_installations/snow";

import blackForest from "./SVG_installations/BlackForest";
import Birch from "./canvas_installations/birch";
import WallFlower from "./canvas_installations/wallFlower";

function App() {
  const [modal, setModal] = useState({
    title: "",
    picture: "",
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
              <a href="#">nav1</a>
              <a href="#">nav2</a>
              <a href="#">nav3</a>
              <a href="#">nav4</a>
            </nav>
          </div>
        </header>
        <br />
        <main>
          <Slideshow />
          <div className="bigPoetry">
            <div className="poetryBox">
              <p>Red lights green lights strawberry lime</p>
              <p>A girl just died and she was a friend of mine</p>
              <p>We used to sing and dance and twirl in the pines</p>
              <p>But now shes gone and she was a friend of mine</p>
              <p>laugh out loud and cry inside</p>
              <p>life’ so large... Who’s in charge</p>
              <p>lost track of time</p>
              <p>Now she’s gone. And she was a friend of mine</p>
              <p>I never thought I’d feel the way I do now</p>
              <p>I never thought I could feel so much pain</p>
              <p>Oh God please. Wait...God can’t stop the rain</p>
              <p>Now she’s gone and she was a friend of mine.</p>
            </div>
          </div>
          <div className="sectionsplit"></div>
          <div className="sectionsplit"></div>
          <div className="tabBox">
            <a href="#">Tab 1</a>
            <a href="#">Tab 2</a>
          </div>
          <div className="artWrapper">
            <div className="art1">
              <div>
                <img
                  src="a.jpg"
                  onClick={() =>
                    setModal({
                      title: "Peace is a fiction of our Faith --",
                      picture: "./2.jpg",
                      sound: "./audiofiles/Kalimba.mp3",
                    })
                  }
                />
              </div>
              <div>
                <div className="poetryBox">
                  <h2 className="titlefont">Art title here</h2>
                  <p>Red lights green lights strawberry lime</p>
                  <p>A girl just died and she was a friend of mine</p>
                  <p>We used to sing and dance and twirl in the pines</p>
                  <p>But now shes gone and she was a friend of mine</p>
                  <p>laugh out loud and cry inside</p>
                  <p>life’ so large... Who’s in charge</p>
                  <p>lost track of time</p>
                  <p>Now she’s gone. And she was a friend of mine</p>
                  <p>I never thought I’d feel the way I do now</p>
                  <p>I never thought I could feel so much pain</p>
                  <p>Oh God please. Wait...God can’t stop the rain</p>
                  <p>Now she’s gone and she was a friend of mine.</p>
                </div>
              </div>
            </div>
            <div className="art2">
              <div>
                <img src="a.jpg" />
              </div>
              <div>
                <div className="poetryBox reversed">
                  <h2 className="titlefont">Art title here</h2>
                  <p>Red lights green lights strawberry lime</p>
                  <p>A girl just died and she was a friend of mine</p>
                  <p>We used to sing and dance and twirl in the pines</p>
                  <p>But now shes gone and she was a friend of mine</p>
                  <p>laugh out loud and cry inside</p>
                  <p>life’ so large... Who’s in charge</p>
                  <p>lost track of time</p>
                  <p>Now she’s gone. And she was a friend of mine</p>
                  <p>I never thought I’d feel the way I do now</p>
                  <p>I never thought I could feel so much pain</p>
                  <p>Oh God please. Wait...God can’t stop the rain</p>
                  <p>Now she’s gone and she was a friend of mine.</p>
                </div>
              </div>
            </div>
            <div className="art3">
              <div>
                <img src="a.jpg" />
              </div>
              <div>
                <div className="poetryBox">
                  <h2 className="titlefont">Art title here</h2>
                  <p>Red lights green lights strawberry lime</p>
                  <p>A girl just died and she was a friend of mine</p>
                  <p>We used to sing and dance and twirl in the pines</p>
                  <p>But now shes gone and she was a friend of mine</p>
                  <p>laugh out loud and cry inside</p>
                  <p>life’ so large... Who’s in charge</p>
                  <p>lost track of time</p>
                  <p>Now she’s gone. And she was a friend of mine</p>
                  <p>I never thought I’d feel the way I do now</p>
                  <p>I never thought I could feel so much pain</p>
                  <p>Oh God please. Wait...God can’t stop the rain</p>
                  <p>Now she’s gone and she was a friend of mine.</p>
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
        style={modal.title != "" ? { display: "block" } : { display: "none" }}
      >
        <div id="modal-content">
          <div
            className="close-button"
            id="myBtn"
            onClick={() => setModal({ title: "", picture: "", sound: "" })}
          >
            <IoMdClose />
          </div>

          <Installation
            title={modal.title}
            picture={modal.picture}
            sound={modal.sound}
          ></Installation>
        </div>
      </div>

      <footer>
        <p>this is a footer</p>
      </footer>
    </>
  );
}
export default App;
