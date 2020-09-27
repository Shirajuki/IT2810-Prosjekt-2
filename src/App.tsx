import React, { useState } from "react";
import "./App.css";
import Installation from "./Installation";
import Slideshow from "./Slideshow";
import ArtDisplay from "./ArtDisplay";
import Favourites from "./Favourites";
import Star from "./Star";
import { FavContext } from "./contexts";
var background: string;
var header: string;
var hover: string;
var border: string;
var text: string;

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
		Favourites.artList.reduce(
			(acc, title: string) => ({
				...acc,
				[title]: Favourites.getFavoriteFromStorage(title),
			}),
			{}
		)
	);

	function setFavorite(id: string, checked: boolean) {
		setFavorites((fs) => ({ ...fs, [id]: checked }));
		Favourites.setFavoriteInStorage(id, checked);
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
							<button className="theme-button" onClick={() => setTheme("black")}>
								Dark
							</button>
							<button className="theme-button" onClick={() => setTheme("white")}>
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
						<button>Tab 1</button>
						<button>Tab 2</button>
					</div>
					<div className="artWrapper">
						<div className="art1">
							<ArtDisplay
								title={`${Favourites.arts[0]}`}
								setModal={() =>
									setModal({
										title: `${Favourites.arts[0]}`,
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
									})
								}
							/>
						</div>
						<div className="art2">
							<ArtDisplay
								title={`${Favourites.arts[5]}`}
								setModal={() =>
									setModal({
										title: `${Favourites.arts[5]}`,
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
