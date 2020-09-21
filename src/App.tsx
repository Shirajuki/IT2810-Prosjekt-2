import React, { useState } from "react";
import "./App.css";
import Installation from "./Installation";
import { IoMdClose } from "react-icons/io";
import Poem from "./Poem";
import Slideshow from "./Slideshow";
import Test from "./SVG_installations/SVGtest";
import Moon from "./canvas_installations/moon";
import Snow from "./canvas_installations/snow";

import BlackForest from "./SVG_installations/BlackForest";
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
					<div className="sectionsplit"></div>
					<div className="sectionsplit"></div>
					<div className="tabBox">
						<a href="#">Tab 1</a>
						<a href="#">Tab 2</a>
					</div>
					<div className="artWrapper">
						<div className="art1">
							<div>
								<BlackForest
									onClick={() =>
										setModal({
											title: "In the Black Forest",
											picture: "./2.jpg",
											sound: "Kalimba.mp3",
										})
									}
								></BlackForest>
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
								<Birch
									onClick={() =>
										setModal({
											title: "The Birch-Tree at Loschwitz",
											picture: "./2.jpg",
											sound: "Kalimba.mp3",
										})
									}
								></Birch>
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
								<WallFlower
									onClick={() =>
										setModal({
											title: "A Wall Flower",
											picture: "./2.jpg",
											sound: "Kalimba.mp3",
										})
									}
								></WallFlower>
							</div>
							<div>
								<div className="poetryBox">
									<h2 className="titlefont">A Wall Flower</h2>
									<Poem title={"A Wall Flower"}></Poem>
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
