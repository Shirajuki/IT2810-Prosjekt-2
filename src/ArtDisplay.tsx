import React, { useState, useEffect } from "react";
import Poem from "./Poem";
import "./App.css";
import Moon from "./canvas_installations/moon";
import BlackForest from "./SVG_installations/BlackForest";
import Birch from "./canvas_installations/birch";
import WallFlower from "./canvas_installations/wallFlower";
import Snow from "./canvas_installations/snow";
import Graveyard from "./SVG_installations/Graveyard";
import MoonAndStar from "./SVG_installations/MoonAndStar";
import Home from "./SVG_installations/Home";
import Flower from "./canvas_installations/flower";
import InstallationDisplay from "./InstallationDisplay";
import Installation from "./Installation";
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
				<button className="favourite" onClick={()=>toggleFavourite(`${props.title}`)}>*</button>
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
