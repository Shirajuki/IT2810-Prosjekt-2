import React, { useState } from "react";
import Poem from "./Poem";
import "./App.css";
import InstallationDisplay from "./InstallationDisplay";
import Favourites from "./Favourites";
function ArtDisplay(props: { title: string, setModal: () => void}) {
	const [state, setState] = useState({
		text: (Favourites.favourites.includes(props.title) ? "⭐" : "☆"),
	});
	function changeText(title :string){
		Favourites.toggleFavourite(title);
		setState({text: (Favourites.favourites.includes(title)) ? "⭐" : "☆"});
	}
	return (
		<>
			<div>
				<InstallationDisplay
					title={props.title}
					onClick={() =>
						props.setModal()
					}
				></InstallationDisplay>
				<button className="favourite" id={props.title} onClick={()=>changeText(`${props.title}`)}>{state.text}</button>
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
