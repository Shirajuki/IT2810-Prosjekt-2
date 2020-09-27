import React, { useState } from "react";
import "./App.css";
import Installation from "./Installation";
import Slideshow from "./Slideshow";
import ArtDisplay from "./ArtDisplay";
import Star from "./Star";
import { FavContext } from "./contexts";
//import {AsyncLocalStorage} from "async_hooks";
var background: string;
var header: string;
var hover: string;
var border: string;
var text: string;

const artList: string[] = [
  "In the Black Forest",
  "A Wall Flower",
  "The Birch-Tree at Loschwitz",
  "Winter Song",
  "The Moon, how definite its orb!",
  "Epitaph. on Mrs Corbet, Who Died of a Cancer in Her Breast.",
  "Ah, Moon -- and Star!",
  "Fragment: Home",
  "I hide myself within my flower,",
];

function getFavoriteFromStorage(id: string): boolean {
  try {
    return localStorage.getItem("favourite-" + id) === "true";
  } catch (ex) {
    return false;
  }
}

function setFavoriteInStorage(id: string, checked: boolean): void {
  try {
    localStorage.setItem("favourite-" + id, checked.toString());
  } catch (ex) {}
}

const arts: string[] = [];
const favourites: string[] = artList.filter((title: string) =>
  getFavoriteFromStorage(title)
);

for (let i = 0; i < favourites.length; i++) {
  arts.push(favourites[i]);
}
for (let i = 0; i < artList.length; i++) {
  if (!arts.includes(artList[i])) {
    arts.push(artList[i]);
  }
}

function setTheme(theme: string = "") {
  if (theme === "black") {
    background = "#171717";
    header = "rgba(23, 23, 23, 0.9)";
    hover = "#101010";
    border = "#445f8f";
    text = "#fff";
    sessionStorage.setItem("theme", "black");
  } else if (theme === "white") {
    background = "#FFF";
    header = "#aaa";
    hover = "rgba(200, 200, 200, 0.9)";
    border = "#000";
    text = "000";
    sessionStorage.setItem("theme", "white");
  } else if (theme === "pink") {
    background = "#fab8d5";
    header = "#f897c0";
    hover = "#f476ab";
    border = "#b7d2e0";
    text = "#fff";
    sessionStorage.setItem("theme", "pink");
  }
  document.documentElement.style.setProperty("--background-colors", background);
  document.documentElement.style.setProperty("--header-color", header);
  document.documentElement.style.setProperty("--hover-color", hover);
  document.documentElement.style.setProperty("--border-color", border);
  document.documentElement.style.setProperty("--text-color", text);
}

function App() {
  const [modal, setModal] = useState({
    title: "",
  });

  if (sessionStorage.getItem("theme") != null) {
    setTheme(sessionStorage.getItem("theme"));
  }

  const [favorites, setFavorites] = useState(
    artList.reduce(
      (acc, title: string) => ({
        ...acc,
        [title]: getFavoriteFromStorage(title),
      }),
      {}
    )
  );

  function setFavorite(id: string, checked: boolean) {
    setFavorites((fs) => ({ ...fs, [id]: checked }));
    setFavoriteInStorage(id, checked);
  }

  return (
    <FavContext.Provider value={{ favorites, setFavorite }}>
      <div className="wrapper">
        <header>
          <div>
            <h1>
              <a href="index.html" className="logo">
                Kunst ustilling
              </a>
            </h1>
            <nav>
              <button
                className="theme-button"
                onClick={() => setTheme("black")}
              >
                Dark
              </button>
              <button
                className="theme-button"
                onClick={() => setTheme("white")}
              >
                Light
              </button>
              <button className="theme-button" onClick={() => setTheme("pink")}>
                Pink
              </button>
            </nav>
          </div>
        </header>
        <br />
        <main>
          <Slideshow />
          <div className="sectionsplit"></div>
          <div className="sectionsplit"></div>
          <div className="tabBox">
            <a href="#/">Tab 1</a>
            <a href="#/">Tab 2</a>
          </div>
          <div className="artWrapper">
            <div className="art1">
              <ArtDisplay
                title={`${arts[0]}`}
                setModal={() =>
                  setModal({
                    title: `${arts[0]}`,
                  })
                }
              />
            </div>
            <div className="art2">
              <ArtDisplay
                title={`${arts[1]}`}
                setModal={() =>
                  setModal({
                    title: `${arts[1]}`,
                  })
                }
              />
            </div>
            <div className="art3">
              <ArtDisplay
                title={`${arts[2]}`}
                setModal={() =>
                  setModal({
                    title: `${arts[2]}`,
                  })
                }
              />
            </div>
            <div className="art2">
              <ArtDisplay
                title={`${arts[3]}`}
                setModal={() =>
                  setModal({
                    title: `${arts[3]}`,
                  })
                }
              />
            </div>
            <div className="art1">
              <ArtDisplay
                title={`${arts[4]}`}
                setModal={() =>
                  setModal({
                    title: `${arts[4]}`,
                  })
                }
              />
            </div>
            <div className="art2">
              <ArtDisplay
                title={`${arts[5]}`}
                setModal={() =>
                  setModal({
                    title: `${arts[5]}`,
                  })
                }
              />
            </div>
            <div className="art1">
              <ArtDisplay
                title={`${arts[6]}`}
                setModal={() =>
                  setModal({
                    title: `${arts[6]}`,
                  })
                }
              />
            </div>
            <div className="art2">
              <ArtDisplay
                title={`${arts[7]}`}
                setModal={() =>
                  setModal({
                    title: `${arts[7]}`,
                  })
                }
              />
            </div>
            <div className="art1">
              <ArtDisplay
                title={`${arts[8]}`}
                setModal={() =>
                  setModal({
                    title: `${arts[8]}`,
                  })
                }
              />
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
          <div className="modal-header">
            <div
              className="close-button"
              id="myBtn"
              onClick={() => setModal({ title: "" })}
            >
              &#10006;
            </div>
            <Star id={modal.title} />
          </div>
          <Installation title={modal.title}></Installation>
        </div>
      </div>
      <footer></footer>
    </FavContext.Provider>
  );
}
export default App;
