import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Poem from "./Poem";

function App() {
  return (
    <>
      <div className="wrapper">
        <header>
          <div>
            <h1>
              <a href="#" className="logo">
                Lionsgate
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
          <div className="splash">
            <div className="div1">
              <img src="a.jpg" />
              <div>
                <p className="titlefont">Trees on the horizon</p>
                <p className="splashinfo">info</p>
              </div>
            </div>
            <div className="div2">
              <img src="a.jpg" />
              <div>
                <p className="titlefont">Some special title</p>
                <p className="splashinfo">info</p>
              </div>
            </div>
            <div className="div3">
              <img src="a.jpg" />
              <div>
                <p className="titlefont">A to be beautiful art</p>
                <p className="splashinfo">info</p>
              </div>
            </div>
            <div className="div4">
              <div>
                <h1 className="title">Trees on the horizon</h1>
              </div>
            </div>
            <div className="div5">
              <img src="a.jpg" />
            </div>
          </div>
          <div className="sectionsplit"></div>
          <div>
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
      <footer>
        <p>this is a footer</p>
      </footer>
      ;
    </>
  );
}

export default App;
