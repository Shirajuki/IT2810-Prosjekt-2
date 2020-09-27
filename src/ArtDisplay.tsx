import React from "react";
import Poem from "./Poem";
import "./App.css";
import InstallationDisplay from "./InstallationDisplay";

const favourites: string[]  = [];
const artList: string[] = [
	"In the Black Forest",
	"A Wall Flower",
	"The Birch-Tree at Loschwitz",
	"Winter Song",
	"The Moon, how definite its orb!",
	"Epitaph. on Mrs Corbet, Who Died of a Cancer in Her Breast.",
	"Ah, Moon -- and Star!",
	"Fragment: Home",
	"I hide myself within my flower,"
];
if (typeof(Storage) !== "undefined") {
	if (localStorage.getItem("favourites") === null || localStorage.getItem("favourites") === "") {
		localStorage.setItem("favourites", "[]");
	}
	const favStorage: string[] = JSON.parse(localStorage.getItem("favourites"));
	for (let i = 0; i < favStorage.length; i++) {
		favourites.push(favStorage[i]);
	}
}
const arts: string[] = [];
for (let i = 0; i < favourites.length; i++) {
	arts.push(favourites[i]);
}
for (let i = 0; i < artList.length; i++) {
	if (!arts.includes(artList[i])) {
		arts.push(artList[i]);
	}
}
function toggleFavourite(title: string) {
	if (favourites.includes(title)) {
		removeFavourite(title);
	} else {
		addFavourite(title);
	}
	changeText(title);
}
function addFavourite(title: string) {
	if (!favourites.includes(title)) {
		favourites.push(title);
		localStorage.setItem("favourites", JSON.stringify(favourites));
	}
}
function removeFavourite(title: string) {
	for (let i = 0; i < favourites.length; i++) {
		if (favourites[i] === title) {
			favourites.splice(i,1);
			localStorage.setItem("favourites", JSON.stringify(favourites));
			break;
		}
	}
}
function changeText(title :string){
	document.getElementById(title).innerHTML = (favourites.includes(title)) ? "&#11088;" : "&#9734;";
}
function ArtDisplay(props: { title: string, setModal: () => void}) {
	return (
		<>
			<div>
				<InstallationDisplay
					title={props.title}
					onClick={() =>
						props.setModal()
					}
				></InstallationDisplay>
				<button className="favourite" id={props.title} onClick={()=>toggleFavourite(`${props.title}`)}>&#9734;</button>
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
