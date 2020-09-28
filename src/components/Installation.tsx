import React from "react";
import Poem from "./Poem";
import InstallationDisplay from "./InstallationDisplay";
import Audio from "./Audio";

interface IProps {
	title: string;
}

function Installation({ title }: IProps) {
	return (
		<>
			<h1 className="installation-title">{title}</h1>
			<div className="installation-wrapper">
				<InstallationDisplay title={title}></InstallationDisplay>
				<div className="poem-container">
					<Poem title={title}></Poem>
				</div>
				<Audio title={title}></Audio>
			</div>
		</>
	);
}

//<img className="installation-image" src={picture} />
export default Installation;
