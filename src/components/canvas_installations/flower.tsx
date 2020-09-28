import React, { useEffect, useRef, useState } from "react";

interface IProps {
  onClick: () => void;
}

function Flower({ onClick }: IProps) {
  const palette = [
		[`rgb(245,243,198)`, `rgb(255,204,229)`],
		[`rgb(198, 245, 245)`, `rgb(245, 196, 81)`],
		[`rgb(245, 198, 211)`, `rgb(81, 207, 245)`],
	];
	let t = 0;
	function setTheme() {
		let theme: string = sessionStorage.getItem("theme");
		if (theme === "black") {t = 0}
		else if (theme === "white") {t = 1}
		else if (theme === "pink") {t = 2}
	}
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState(null);

  let pedal1 = useRef(0);
  let pedal2 = useRef(0);
  let pedal3 = useRef(0);
  let pedal4 = useRef(0);
  let pedal5 = useRef(0);
  let flowerCenter = useRef(0);

  const IntervalPedal = useRef(null);

  useEffect(() => {
    setCtx(canvas.current?.getContext("2d"));
  }, [canvas]);

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    // Create gradient
    let grd = ctx.createLinearGradient(0, 0, 0, 750);
    grd.addColorStop(0, palette[t][0]);
    grd.addColorStop(1, "rgb(255,255,255)");

    // Create background
    ctx.beginPath();
    ctx.rect(0, 0, 750, 450);
    ctx.stroke();
    ctx.fillStyle = grd;
    ctx.fill();

    // Creat table
    ctx.beginPath();
    ctx.rect(0, 400, 750, 450);
    ctx.stroke();
    ctx.fillStyle = "rgb(171,107,89)";
    ctx.fill();

    //Vase
    ctx.beginPath();
    ctx.moveTo(300, 250);
    ctx.lineTo(450, 250);
    ctx.lineTo(420, 270);
    ctx.lineTo(450, 430);
    ctx.lineTo(440, 450);
    ctx.lineTo(310, 450);
    ctx.lineTo(300, 430);
    ctx.lineTo(330, 270);
    ctx.lineTo(300, 250);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "rgb(180,173,234)";
    ctx.fill();

    //Flower stem
    ctx.beginPath();
    ctx.moveTo(375, 450);
    ctx.bezierCurveTo(270, 380, 410, 288, 375, 195);
    ctx.strokeStyle = "#000000";
    //ctx.strokeWidth = "2px";
    ctx.stroke();
    ctx.closePath();

    //Water
    ctx.beginPath();
    ctx.moveTo(315, 350);
    ctx.lineTo(435, 350);
    ctx.lineTo(450, 430);
    ctx.lineTo(440, 450);
    ctx.lineTo(310, 450);
    ctx.lineTo(300, 430);
    ctx.lineTo(315, 350);
    ctx.closePath();
    ctx.strokeStyle = "transparent";
    ctx.stroke();
    ctx.fillStyle = "rgb(159,200,255)";
    ctx.fill();

    //Flower petals
    ctx.beginPath();
    ctx.arc(340, pedal1.current + 190, 30, 0, Math.PI * 2);
    ctx.strokeStyle = "transparent";
    ctx.stroke();
    ctx.fillStyle = palette[t][1];
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(355, pedal2.current + 160, 30, 0, Math.PI * 2);
    ctx.strokeStyle = "transparent";
    ctx.stroke();
    ctx.fillStyle = palette[t][1];
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(400, pedal3.current + 165, 30, 0, Math.PI * 2);
    ctx.strokeStyle = "transparent";
    ctx.stroke();
    ctx.fillStyle = palette[t][1];
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(370, pedal4.current + 215, 30, 0, Math.PI * 2);
    ctx.strokeStyle = "transparent";
    ctx.stroke();
    ctx.fillStyle = palette[t][1];
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(405, pedal5.current + 200, 30, 0, Math.PI * 2);
    ctx.strokeStyle = "transparent";
    ctx.stroke();
    ctx.fillStyle = palette[t][1];
    ctx.fill();
    ctx.closePath();

    //Flower center
    ctx.beginPath();
    ctx.arc(375, flowerCenter.current + 190, 20, 0, Math.PI * 2);
    ctx.strokeStyle = "transparent";
    ctx.stroke();
    ctx.fillStyle = `rgb(255,255,153)`;
    ctx.fill();
    ctx.closePath();

    setTheme();
  };

  useEffect(() => {
    if (ctx) {
      IntervalPedal.current = setInterval(() => {
        if (pedal1.current < 255) {
          pedal1.current += 1;
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        } else if (pedal2.current < 265) {
          pedal2.current += 1;
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        } else if (pedal3.current < 275) {
          pedal3.current += 1;
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        } else if (pedal4.current < 275) {
          pedal4.current += 1;
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        } else if (pedal5.current < 245) {
          pedal5.current += 1;
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        } else {
          pedal1.current = 0;
          pedal2.current = 0;
          pedal3.current = 0;
          pedal4.current = 0;
          pedal5.current = 0;
          flowerCenter.current = 0;
        }
        draw(ctx);
      });
    }
  }, [ctx]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <canvas onClick={onClick} ref={canvas} width="750" height="450" />
    </>
  );
}

export default Flower;
