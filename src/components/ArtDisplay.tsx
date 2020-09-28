import React, { useState } from "react";
import Poem from "./Poem";
import InstallationDisplay from "./InstallationDisplay";
import Star from "./Star";

function ArtDisplay(props: { title: string; setModal: () => void }) {
	return (
		<>
			<div>
				<div className="InstallationWrapper">
					<div className="darkOverlay" onClick={() => props.setModal()}>▶</div>
					<InstallationDisplay title={props.title}></InstallationDisplay>
					<Star id={props.title} />
				</div>
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
