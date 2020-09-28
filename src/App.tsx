import React, { useState } from "react";
import "./App.css";
import Installation from "./components/Installation";
import Slideshow from "./components/Slideshow";
import ArtDisplay from "./components/ArtDisplay";
import Favourites from "./Favourites";
import Star from "./components/Star";
import { FavContext } from "./contexts";
var background: string;
var header: string;
var hover: string;
var border: string;
var text: string;
var button: string;

/*Function that takes in a color argument an sets global
css variables based on these choices. The theme chosen is then
saved in sessionStorage*/
function setTheme(theme: string = "") {
  if (theme === "black") {
    background = "#171717";
    header = "rgba(23, 23, 23, 0.9)";
    hover = "#fff7";
    border = "#445f8f";
    text = "#fff";
    button = "#fff3";
    sessionStorage.setItem("theme", "black");
  } else if (theme === "white") {
    background = "#FFF";
    header = "#aaa";
    hover = "rgba(200, 200, 200, 0.9)";
    border = "#000";
    text = "000";
    button = "#aaa";
    sessionStorage.setItem("theme", "white");
  } else if (theme === "pink") {
    background = "#fab8d5";
    header = "#f897c0";
    hover = "#f476ab";
    border = "#b7d2e0";
    text = "#fff";
    button = "#f897c0";
    sessionStorage.setItem("theme", "pink");
  }
  document.documentElement.style.setProperty("--background-colors", background);
  document.documentElement.style.setProperty("--header-color", header);
  document.documentElement.style.setProperty("--hover-color", hover);
  document.documentElement.style.setProperty("--border-color", border);
  document.documentElement.style.setProperty("--text-color", text);
  document.documentElement.style.setProperty("--button-color", button);
}

function App() {
  //Declares a modal used for displaying the art
  const [modal, setModal] = useState({
    title: "",
    tab: "1",
  });

  /*Checks if a theme has already been chosen for this tab 
  by checking sessionStorage and setting it if so. If not
  default values are used*/
  if (sessionStorage.getItem("theme") != null) {
    setTheme(sessionStorage.getItem("theme"));
  }

  //Uses reduce to filter out favourites from Storage, used by FavContext
  const [favorites, setFavorites] = useState(
    Favourites.artList.reduce(
      (acc, title: string) => ({
        ...acc,
        [title]: Favourites.getFavoriteFromStorage(title),
      }),
      {}
    )
  );

  //Sets an installation as favourite
  function setFavorite(id: string, checked: boolean) {
    setFavorites((fs) => ({ ...fs, [id]: checked }));
    Favourites.setFavoriteInStorage(id, checked);
  }

  const slideShowModal = (title: string) => {
    setModal({ title: title, tab: modal.tab });
  };

  return (
    <FavContext.Provider value={{ favorites, setFavorite }}>
      <div className="wrapper">
        <header>
          <div>
            <h1>
              <a href="index.html" className="logo">
                Art exhibition
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
          <Slideshow setModal={slideShowModal} />
          <div className="sectionsplit"></div>
          <div className="sectionsplit"></div>
          <div className="tabBox">
            <button onClick={() => setModal({ title: "", tab: "1" })}>
              Tab 1
            </button>
            <button onClick={() => setModal({ title: "", tab: "2" })}>
              Tab 2
            </button>
            <hr className="tab-line" />
          </div>
          <div
            className="artWrapper"
            style={
              modal.tab === "1" ? { display: "block" } : { display: "none" }
            }
          >
            <div className="art1">
              <ArtDisplay
                title={`${Favourites.arts[0]}`}
                setModal={() =>
                  setModal({
                    title: `${Favourites.arts[0]}`,
                    tab: `${modal.tab}`,
                  })
                }
              />
            </div>
            <div className="art2">
              <ArtDisplay
                title={`${Favourites.arts[1]}`}
                setModal={() =>
                  setModal({
                    title: `${Favourites.arts[1]}`,
                    tab: `${modal.tab}`,
                  })
                }
              />
            </div>
            <div className="art3">
              <ArtDisplay
                title={`${Favourites.arts[2]}`}
                setModal={() =>
                  setModal({
                    title: `${Favourites.arts[2]}`,
                    tab: `${modal.tab}`,
                  })
                }
              />
            </div>
            <div className="art2">
              <ArtDisplay
                title={`${Favourites.arts[3]}`}
                setModal={() =>
                  setModal({
                    title: `${Favourites.arts[3]}`,
                    tab: `${modal.tab}`,
                  })
                }
              />
            </div>
            <div className="art1">
              <ArtDisplay
                title={`${Favourites.arts[4]}`}
                setModal={() =>
                  setModal({
                    title: `${Favourites.arts[4]}`,
                    tab: `${modal.tab}`,
                  })
                }
              />
            </div>
          </div>
          <div
            className="artWrapper"
            style={
              modal.tab === "2" ? { display: "block" } : { display: "none" }
            }
          >
            <div className="art2">
              <ArtDisplay
                title={`${Favourites.arts[5]}`}
                setModal={() =>
                  setModal({
                    title: `${Favourites.arts[5]}`,
                    tab: `${modal.tab}`,
                  })
                }
              />
            </div>
            <div className="art1">
              <ArtDisplay
                title={`${Favourites.arts[6]}`}
                setModal={() =>
                  setModal({
                    title: `${Favourites.arts[6]}`,
                    tab: `${modal.tab}`,
                  })
                }
              />
            </div>
            <div className="art2">
              <ArtDisplay
                title={`${Favourites.arts[7]}`}
                setModal={() =>
                  setModal({
                    title: `${Favourites.arts[7]}`,
                    tab: `${modal.tab}`,
                  })
                }
              />
            </div>
            <div className="art1">
              <ArtDisplay
                title={`${Favourites.arts[8]}`}
                setModal={() =>
                  setModal({
                    title: `${Favourites.arts[8]}`,
                    tab: `${modal.tab}`,
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
              onClick={() => setModal({ title: "", tab: `${modal.tab}` })}
            >
              &#10006;
            </div>
            <Star id={modal.title} />
          </div>
          <Installation title={modal.title}></Installation>
        </div>
      </div>
      <footer> Art exhibition - gruppe 07 </footer>
    </FavContext.Provider>
  );
}
export default App;
