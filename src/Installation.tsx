import React, { useState, useEffect } from "react";
import Poem from "./Poem";
import "./App.css";
import Moon from "./canvas_installations/moon";
import BlackForest from "./SVG_installations/BlackForest";
import Birch from "./canvas_installations/birch";
import WallFlower from "./canvas_installations/wallFlower";

interface IProps {
	title: string;
	picture: string;
	sound: string;
}
function Installation({ title, picture, sound }: IProps) {
	return (
		<>
			<h1 className="installation-title">{title}</h1>
			<div className="installation-wrapper">
				<WallFlower onClick={() => void(0)}></WallFlower>
				<div className="poem-container">
					<Poem title={title}></Poem>
				</div>
				<audio id="my_audio" src={sound} autoPlay loop></audio>
			</div>
		</>
	);
}

//<img className="installation-image" src={picture} />
export default Installation;
