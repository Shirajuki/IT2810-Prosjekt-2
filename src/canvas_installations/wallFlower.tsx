import React, { useEffect, useRef, useState } from "react";

interface IProps {
  onClick: () => void;
}
type opacityObject = {
	"s1": number[],
	"s2": number[],
	"v": number[],
	"b": boolean[]
}
function WallFlower({onClick}: IProps) {
	const canvas = useRef<HTMLCanvasElement>(null);
	const [ctx, setCtx] = useState(null);
	const opacity: opacityObject = {"s1": [0,0.2,0.1,0.3,0.1], "s2": [0.4,0.4,0.4,0.4,0.3], "v": [0.008,0.012,0.012,0.01,0.015,0.01], "b": [false,false,false,false,false,false]};
	let anim = 0;
	useEffect(() => {
		setCtx(canvas.current?.getContext("2d"));
	}, [canvas]);
	const drawNotes = (ctx: CanvasRenderingContext2D, x: number, y: number, rot?: number) => {
		rot = rot || 0;
		ctx.save()
		ctx.translate(x + 750 / 2, y + 450 / 2);
		ctx.rotate(rot);
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.fillRect(x,y,7,28);
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.ellipse(x-1.5, y+29, 6, 8, Math.PI/2.5, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.fillRect(x,y,20,7);
		ctx.closePath();
		ctx.restore();
	}
	const drawDisco = (ctx: CanvasRenderingContext2D, opacity: opacityObject) => {
		ctx.beginPath();
		ctx.fillStyle = `rgba(0,0,255,${opacity.s1[0]})`;
		ctx.arc(70,60,130,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = `rgba(255,255,0,${opacity.s1[1]})`;
		ctx.arc(20,250,90,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = `rgba(0,255,255,${opacity.s1[2]})`;
		ctx.arc(270,400,200,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = `rgba(255,0,0,${opacity.s1[3]})`;
		ctx.arc(600,50,250,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = `rgba(0,255,0,${opacity.s1[4]})`;
		ctx.arc(280,100,90,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = `rgba(255,0,255,${opacity.s1[5]})`;
		ctx.arc(500,300,60,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
	}
	const draw = (ctx: CanvasRenderingContext2D) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.clearRect(0,0,750,450);
		ctx.beginPath();
		ctx.fillStyle = "#ffe0f8";
		ctx.fillRect(0,0,750,450);
		ctx.closePath();
		// Background
		// Wall
		ctx.beginPath();
		ctx.fillStyle = "#91d700";
		ctx.moveTo(0, 250);
		ctx.lineTo(500, 0);
		ctx.lineTo(750, 0);
		ctx.lineTo(750, 250);
		ctx.lineTo(0, 250);
		ctx.fill();
		ctx.closePath();
		// Floor
		ctx.beginPath();
		ctx.fillStyle = "#91d7ff";
		ctx.fillRect(0,245,750,205);
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "pink";
		ctx.moveTo(400, 450);
		ctx.lineTo(750, 245);
		ctx.lineTo(750, 450);
		ctx.lineTo(400, 450);
		ctx.fill();
		ctx.closePath();
		// Person 1
		ctx.beginPath();
		ctx.fillStyle = "deeppink";
		ctx.arc(280,130,30,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "deeppink";
		ctx.ellipse(280, 230, 90, 30, Math.PI/2, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "#e51284";
		ctx.arc(310,230,15,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		// Person 2
		ctx.beginPath();
		ctx.fillStyle = "deeppink";
		ctx.arc(380,60,30,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "deeppink";
		ctx.ellipse(380, 160, 90, 30, Math.PI/2, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "#e51284";
		ctx.arc(350,160,15,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "#e51284";
		ctx.arc(410,160,15,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		// Person 3
		ctx.beginPath();
		ctx.fillStyle = "#e51284";
		ctx.arc(500,160,15,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "deeppink";
		ctx.arc(530,70,30,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "deeppink";
		ctx.ellipse(530, 170, 90, 30, Math.PI/2, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "#e51284";
		ctx.arc(550,170,15,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		// Person 4
		ctx.beginPath();
		ctx.fillStyle = "#e51284";
		ctx.arc(415,230,15,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "#e51284";
		ctx.arc(465,230,15,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "deeppink";
		ctx.arc(440,140,30,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "deeppink";
		ctx.ellipse(440, 250, 90, 30, Math.PI/2, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
		// Music box
		ctx.beginPath();
		ctx.fillStyle = "brown";
		ctx.fillRect(40,220,130,100);
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "brown";
		ctx.moveTo(40, 220);
		ctx.lineTo(60, 180);
		ctx.lineTo(80, 220);
		ctx.lineTo(40, 220);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "#82260d";
		ctx.ellipse(110, 225, 17, 55, Math.PI/2, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.ellipse(110, 225, 13, 50, Math.PI/2, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "#e3b200";
		ctx.moveTo(60, 180);
		ctx.lineTo(170, 80);
		ctx.lineTo(170, 190);
		ctx.lineTo(57.5, 185);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "#94680f";
		ctx.ellipse(169, 136, 55, 13, Math.PI/2, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
		// Notes
		if (anim > 10) {
			drawNotes(ctx,-120,-105,-0.3);
			drawNotes(ctx,-115,-95,0.1);
			drawNotes(ctx,-65,-110,-0.5);
			drawNotes(ctx,-80,-80,0.5);
			if (anim > 40) anim = 0;
		} else {
			drawNotes(ctx,-75,-60,0.3);
			drawNotes(ctx,-115,-90,-0.1);
			drawNotes(ctx,-100,-60,0.5);
			drawNotes(ctx,-90,-95,-0.5);
		}
		anim += 1;
		// Disco
		drawDisco(ctx,opacity);
		// Flower
		ctx.beginPath();
		ctx.fillStyle = "#2f542b";
		ctx.moveTo(650, 450);
		ctx.lineTo(650, 360);
		ctx.lineTo(630, 230);
		ctx.lineTo(650, 230);
		ctx.lineTo(670, 330);
		ctx.lineTo(670, 450);
		ctx.lineTo(650, 450);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "#27695a";
		ctx.moveTo(650, 420);
		ctx.lineTo(610, 360);
		ctx.lineTo(630, 360);
		ctx.lineTo(650, 420);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "#27695a";
		ctx.moveTo(670, 400);
		ctx.lineTo(720, 330);
		ctx.lineTo(690, 345);
		ctx.lineTo(670, 400);
		ctx.fill();
		ctx.closePath();
		// Petal
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.arc(590,245,30,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.arc(617,289,35,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.arc(682,280,35,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.arc(682,220,40,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.arc(630,210,40,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "orange";
		ctx.arc(643,245,30,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		for (let i = 0; i<opacity.s1.length; i++) {
			if (!opacity.b[i]) {
				opacity.s1[i] -= opacity.v[i];
				if (opacity.s1[i] < 0) {
					opacity.b[i] = true;
				}
			} else {
				opacity.s1[i] += opacity.v[i]
				if (opacity.s1[i] > opacity.s2[i]) {
					opacity.b[i] = false;
				}
			}
		}
		requestAnimationFrame(() => draw(ctx));
	};

  useEffect(() => {
    if (ctx) draw(ctx);
  }, [ctx]);

  return (
    <>
      <canvas onClick={onClick} ref={canvas} width="750" height="450" />
    </>
  );
}

export default WallFlower;
