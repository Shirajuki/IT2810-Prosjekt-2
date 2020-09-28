import React from "react";

interface IProps {
  onClick: () => void;
}
function BlackForest({onClick}: IProps) {
	return (
		<div className="canvas" onClick={onClick}>
			<svg viewBox="0 0 750 450" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<pattern id="grass" x="0" y="0" width="60" height="40" patternUnits="objectBoundingBox">
						<path d="m 25 38 l -20 -20 l 15 5 z" fill="cadetblue"/>
						<path d="m 25 38 l 35 -30 l -25 10 z" fill="#608da0"/>
					</pattern>
					<pattern id="tree" x="-10" y="-10" width="55" height="60" patternUnits="userSpaceOnUse">
						<rect height="30" width="13" y="30" x="20" fill="black"/>
						<path d="m 0 52 l 27 -35 l 30 35 z" fill="black"/>
						<path d="m 2 42 l 25 -35 l 26 35 z" fill="black"/>
						<path d="m 4 32 l 23 -30 l 24 30 z" fill="black"/>
					</pattern>
					<pattern id="cross" x="0" y="0" width="40" height="60" patternUnits="objectBoundingBox">
						<rect x="0" y="0" width="40" height="50" fill="white"/>
					</pattern>
				</defs>
				<rect fill="#0f0f18" x="0" y="0" width="750" height="450"/>
				<g>
					<animate
						attributeName="opacity"
						values="1;0.6;1"
						dur="2s"
						begin="0s"
						repeatCount="indefinite"/>
					<circle cy="46" cx="34" r="7" fill="#ffffff"/>
					<circle cy="53" cx="131" r="7" fill="#ffffff"/>
					<circle cy="95" cx="105" r="7" fill="#ffffff"/>
					<circle cy="71" cx="290" r="7" fill="#ffffff"/>
					<circle cy="51" cx="452" r="7" fill="#ffffff"/>
					<circle cy="31" cx="552" r="7" fill="#ffffff"/>
					<circle cy="133" cx="591" r="7" fill="#ffffff"/>
					<circle cy="106" cx="648" r="7" fill="#ffffff"/>
					<circle cy="18" cx="721" r="7" fill="#ffffff"/>
					<circle cy="-10" cx="-10" r="7" fill="#ffffff">
						<animate id="o1"
							attributeName="cy"
							values="0;150;150;150;150;150"
							dur="8s"
							begin="3s;o1.end+3s"
							repeatCount="indefinite"/>
						<animate
							attributeName="cx"
							values="0;600;600;600;600;600"
							dur="8s"
							begin="3s;o1.end+3s"
							repeatCount="indefinite"/>
					</circle>
				</g>
				<g opacity="1">
					<path d="M -10 170 l 60 -80 l 40 50 l 30 -40 l 30 50 l 30 -30 l 30 60 l 40 -30 l 60 20 l 60 -50 l 100 30 l 100 -30 l 50 30 l 50 -50 l 50 50 l 20 -40 l 40 60 v 100 h -900 z" fill="#6a5082"/>
					<path d="M -30 220 l 70 -80 l 50 50 l 40 -40 l 30 50 l 30 -30 l 30 60 l 40 -30 l 60 20 l 60 -50 l 100 30 l 90 -30 l 50 30 l 40 -50 l 30 50 l 30 -40 l 40 60 l 30 -40 v 150 h -900 z" fill="#5e3684"/>
					<rect fill="#183a23" x="-10" y="280" width="770" height="220"/>
					<rect x="0" y="230" width="750" height="60" fill="url(#tree)"/>
				</g>
				<g id="tree">
					<ellipse ry="40" rx="140" cy="430" cx="500" fill="#1a4227"/>
					<ellipse ry="30" rx="145" cy="330" cx="675" fill="#1a4227"/>
					<ellipse ry="45" rx="150" cy="370" cx="40" fill="#1a4227"/>
					<ellipse ry="40" rx="190" cy="340" cx="375" fill="#0f2917"/>
					<rect height="250" width="100" y="100" x="320" fill="brown"/>
					<ellipse ry="25" rx="12" cy="235" cx="415" stroke="#a22121" fill="brown" strokeWidth="4"/>
					<path d="M 125 215 l 250 -230 l 250 230 z" fill="#183a23"/>
					<path d="M 175 115 l 200 -230 l 200 230 z" fill="#183a23"/>
				</g>
				<g id="girl">
					<animate
						attributeName="opacity"
						values="1;0;1"
						dur="10s"
						begin="1s"
						repeatCount="indefinite"/>
				<ellipse ry="35" rx="30" cy="283" cx="320" fill="#b05000"/>
				<rect fill="#3d5279" x="305" y="300" width="32" height="50"/>
				<ellipse fill="#3d5279" cx="320" cy="315" rx="33" ry="20"/>
				<ellipse fill="#464bad" cx="320" cy="346" rx="16" ry="7"/>
				<ellipse fill="#555aaf" cx="310" cy="345" rx="8" ry="25"/>
				<ellipse fill="#555aaf" cx="330" cy="345" rx="8" ry="25"/>
				<circle cx="310" cy="325" r="8" fill="#143767"/>
				<circle cx="329" cy="325" r="8" fill="#143767"/>
				<circle cx="310" cy="362" r="8" fill="#143767"/>
				<circle cx="329" cy="362" r="8" fill="#143767"/>
				<circle cy="280" cx="320" r="25" fill="#ffaa56"/>
				<path d="M 292,290 C 285,240  354,240  348.7,290 z" fill="#bf5f00"/>
			</g>
			<g>

				<rect x="100" y="320" width="60" height="40" fill="url(#grass)"/>
				<rect x="620" y="280" width="60" height="40" fill="url(#grass)"/>
				<rect x="550" y="380" width="60" height="40" fill="url(#grass)"/>

				<path d="m 430,350 0,0 0,0 c -15,-120 85, -110 75,0 z" fill="#6f6f6f"/>
				<path d="m 425,350 0,0 0,0 c -15,-110 85, -110 75,0 z" fill="#9f9f9f"/>
			</g>
		</svg>
	</div>
);
}

export default BlackForest;
