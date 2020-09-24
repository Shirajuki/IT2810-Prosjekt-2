import React, { useEffect, useRef, useState } from "react";

interface IProps {
	onClick: () => void;
}
type leafObject = {
	"x": number,
	"y": number,
	"h": number,
	"f": number,
	"v": number,
	"r": number,
}
type sunObject = {
	"r": number,
	"v": number,
	"b": boolean
}
function Birch({onClick}: IProps) {
	const canvas = useRef<HTMLCanvasElement>(null);
	const [ctx, setCtx] = useState(null);
	const leaves: leafObject[] = [];
	const sun: sunObject = {"r": 110, "v": 0.25, "b": false}
	useEffect(() => {
		setCtx(canvas.current?.getContext("2d"));
	}, [canvas]);
	const drawLeaf = (ctx: CanvasRenderingContext2D, obj: leafObject) => {
		ctx.beginPath();
		ctx.fillStyle="#1a5234";
		ctx.arc(obj.x,obj.y,obj.r,0,2*Math.PI,false)
		ctx.fill()
		ctx.closePath();
	}
	const drawPineTrees = (ctx: CanvasRenderingContext2D, x: number, y: number, sX?: number, sY?: number) => {
		sX = sX || 1;
		sY = sY || 1;
		// Scaled rectangle
		ctx.scale(sX, sY);
		// Pine trees
		ctx.beginPath();
		ctx.fillStyle = "#3d913f";
		// x = 59.5, y = 330
		ctx.ellipse(x, y, 10, 25, Math.PI/2, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.beginPath();
		ctx.fillStyle = "brown";
		ctx.rect(x-7.5, y-40, 15, 40);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		// Leaves
		ctx.beginPath();
		ctx.fillStyle = "#1a5234";
		ctx.moveTo(x-39.5, y-20);
		ctx.lineTo(x+43, y-20);
		ctx.lineTo(x+1.75, y-55);
		ctx.lineTo(x-39.5, y-20);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "#183a23";
		ctx.moveTo(x-31.5, y-40);
		ctx.lineTo(x+35, y-40);
		ctx.lineTo(x+1.75, y-75);
		ctx.lineTo(x-31.5, y-40);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "#1a5234";
		ctx.moveTo(x-24.5, y-60);
		ctx.lineTo(x+28, y-60);
		ctx.lineTo(x+1.75, y-95);
		ctx.lineTo(x-24.5, y-60);
		ctx.fill();
		ctx.closePath();
		// Reset current transformation matrix to the identity matrix
		ctx.setTransform(1, 0, 0, 1, 0, 0);
	}
	const draw = (ctx: CanvasRenderingContext2D) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.beginPath();
		ctx.beginPath();
		ctx.fillStyle = "#ffe0f8";
		ctx.fillRect(0,0,750,450);
		ctx.closePath();
		// Background
		// Mountain back
		ctx.beginPath();
		ctx.fillStyle = "#91d7ff";
		ctx.moveTo(0, 120);
		ctx.lineTo(40, 60);
		ctx.lineTo(60, 100);
		ctx.lineTo(90, 40);
		ctx.lineTo(130, 90);
		ctx.lineTo(170, 90);
		ctx.lineTo(210, 120);
		ctx.lineTo(250, 60);
		ctx.lineTo(270, 50);
		ctx.lineTo(300, 100);
		ctx.lineTo(340, 20);
		ctx.lineTo(400, 90);
		ctx.lineTo(430, 100);
		ctx.lineTo(470, 60);
		ctx.lineTo(510, 85);
		ctx.lineTo(530, 70);
		ctx.lineTo(580, 110);
		ctx.lineTo(610, 90);
		ctx.lineTo(650, 110);
		ctx.lineTo(680, 30);
		ctx.lineTo(730, 90);
		ctx.lineTo(740, 70);
		ctx.lineTo(750, 80);
		ctx.lineTo(750, 500);
		ctx.lineTo(0, 500);
		ctx.lineTo(0, 120);
		ctx.fill();
		ctx.closePath();
		// Sun
		if (sun.b) {
			sun.r += sun.v;
			if (sun.r > 130) {
				sun.b = false;
			}
		} else {
			sun.r -= sun.v
			if (sun.r < 110) {
				sun.b = true;
			}
		}
		ctx.beginPath();
		ctx.fillStyle = "#fffcc9";
		ctx.arc(180,130,sun.r,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "#fff68f";
		ctx.arc(180,130,100,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "#ffe959";
		ctx.arc(180,130,90,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "#ffd026";
		ctx.arc(180,130,80,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		// Mountain front
		ctx.beginPath();
		ctx.fillStyle = "#a8ffe5";
		ctx.moveTo(0, 150);
		ctx.lineTo(40, 100);
		ctx.lineTo(60, 120);
		ctx.lineTo(90, 120);
		ctx.lineTo(130, 130);
		ctx.lineTo(170, 120);
		ctx.lineTo(210, 140);
		ctx.lineTo(250, 120);
		ctx.lineTo(270, 100);
		ctx.lineTo(300, 140);
		ctx.lineTo(340, 120);
		ctx.lineTo(370, 140);
		ctx.lineTo(400, 110);
		ctx.lineTo(430, 130);
		ctx.lineTo(470, 90);
		ctx.lineTo(510, 110);
		ctx.lineTo(530, 100);
		ctx.lineTo(580, 140);
		ctx.lineTo(610, 120);
		ctx.lineTo(650, 130);
		ctx.lineTo(690, 80);
		ctx.lineTo(710, 110);
		ctx.lineTo(730, 120);
		ctx.lineTo(750, 100);
		ctx.lineTo(750, 500);
		ctx.lineTo(0, 500);
		ctx.lineTo(0, 150);
		ctx.fill();
		ctx.closePath();

		// Grassland
		// big circle
		ctx.beginPath();
		ctx.fillStyle = "#3c8c38";
		ctx.arc(500,470,340,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "#6bc257";
		ctx.arc(500,470,330,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		// small circle 
		ctx.beginPath();
		ctx.fillStyle = "#3c8c38";
		ctx.arc(140,450,230,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "#6bc257";
		ctx.arc(140,450,220,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();

		// Birch tree
		// Spot
		ctx.beginPath();
		ctx.fillStyle = "#3d913f";
		ctx.ellipse(410, 230, 27, 55, Math.PI/2, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
		// Stump/Bark
		ctx.beginPath();
		ctx.fillStyle = "#f5e9e6";
		ctx.lineWidth = 4;
		ctx.moveTo(400, 230);
		ctx.lineTo(385, 170);
		ctx.lineTo(392, 158);
		ctx.lineTo(375, 120);
		ctx.lineTo(385, 120);
		ctx.lineTo(398, 148);
		ctx.lineTo(435, 90);
		ctx.lineTo(445, 90);
		ctx.lineTo(400, 172);
		ctx.lineTo(420, 230);
		ctx.lineTo(400, 230);
		ctx.fill();
		ctx.closePath();
		// Person
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.rect(419,160,4,55);
		ctx.rect(446,160,4,55);
		ctx.rect(415,210,40,8);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.arc(441,191,5,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.ellipse(440, 203, 10, 4, Math.PI/2, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.ellipse(436, 206, 8, 3, Math.PI/4, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.ellipse(428, 205, 7, 3, -Math.PI/4, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.ellipse(442, 203, 7, 5, Math.PI/2, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.ellipse(435, 214, 6, 3, -Math.PI/2.5, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.ellipse(435, 218, 6, 3, Math.PI/2.2, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
		// Leaves
		ctx.beginPath();
		ctx.fillStyle = "#baff30";
		ctx.ellipse(380, 115, 20, 25, Math.PI/2, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.beginPath();
		ctx.fillStyle = "#e2ff26";
		ctx.ellipse(365, 170, 24, 32, Math.PI/2, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.beginPath();
		ctx.fillStyle = "#e2ff26";
		ctx.ellipse(445, 100, 40, 55, Math.PI/2, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.beginPath();
		ctx.fillStyle = "#baff30";
		ctx.ellipse(435, 155, 20, 30, Math.PI/2, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		// Pine Trees
		drawPineTrees(ctx,80,230,1.4,1.4);
		drawPineTrees(ctx,60.5,330);
		drawPineTrees(ctx,5,220,1.9,1.9);
		drawPineTrees(ctx,60,300,1.6,1.6);
		// Other side
		drawPineTrees(ctx,465,265,1.3,1.3);
		drawPineTrees(ctx,400,200,1.7,1.7);
		drawPineTrees(ctx,320,210,2,2);
		drawPineTrees(ctx,340,215,2.1,2.1);
		for (let i=0; i<leaves.length; i++) {
			const l = leaves[i];
			drawLeaf(ctx,l);
			l.x -= l.v;
			l.y = 400+l.h*Math.sin(l.x/l.f);
			if (l.x < 0) l.x = 760;
		}
		requestAnimationFrame(() => draw(ctx));
	};

	useEffect(() => {
		leaves.push({"x": 750, "y": 420, "h": 17, "f": 35, "v": 5, "r": 10});
		leaves.push({"x": 800, "y": 423, "h": 20, "f": 55, "v": 7, "r": 13});
		leaves.push({"x": 850, "y": 425, "h": 10, "f": 45, "v": 6, "r": 7});
		leaves.push({"x": 760, "y": 427, "h": 5, "f": 45, "v": 9, "r": 9});
		leaves.push({"x": 900, "y": 430, "h": 17, "f": 65, "v": 9, "r": 12});
		leaves.push({"x": 750, "y": 410, "h": 17, "f": 65, "v": 8, "r": 12});
		leaves.push({"x": 940, "y": 415, "h": 20, "f": 65, "v": 4, "r": 10});
		if (ctx) draw(ctx);
	}, [ctx]);

	return (
		<>
			<canvas onClick={onClick} ref={canvas} width="750" height="450" />
		</>
	);
}

export default Birch;
