import React, { useEffect, useRef, useState } from "react";
import Poem from "./Poem";

function Moon() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState(null);
  var imgNightSky = new Image();
  imgNightSky.src = "unnamed.jpg";

  useEffect(() => {
    setCtx(canvas.current?.getContext("2d"));
  }, [canvas]);

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    var nightgrd = ctx.createLinearGradient(0, 0, 650, 350);
    nightgrd.addColorStop(0, "#001431");
    nightgrd.addColorStop(1, "#0C2C73");
    ctx.fillStyle = nightgrd;
    ctx.fillRect(0, 0, 650, 350);
    //ctx.drawImage(pattern.current, 0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.rect(0, 0, 650, 350);
    ctx.fill();
    ctx.closePath();

    //ctx.drawImage(imgNightSky, 0, 0, 650, 350);

    ctx.beginPath();
    //95B5C3  203644
    //ctx.drawImage(pattern.current, 0, 0, ctx.canvas.width, ctx.canvas.height);
    var grd = ctx.createLinearGradient(0, 0, 650, 350);
    grd.addColorStop(0, "#007EC1");
    grd.addColorStop(1, "#012653");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 200, 650, 350);
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(325, 270, 50, 0, 2 * Math.PI, true);
    ctx.fillStyle = "rgb(250, 250, 250, 0.6)";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(330, 260, 10, 0, 2 * Math.PI, true);
    ctx.fillStyle = "#aaa";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(300, 250, 8, 0, 2 * Math.PI, true);
    ctx.fillStyle = "#aaa";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(315, 290, 4, 0, 2 * Math.PI, true);
    ctx.fillStyle = "#aaa";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    var rgrd = ctx.createRadialGradient(310, 100, 70, 325, 250, 1);
    rgrd.addColorStop(0, "white");
    rgrd.addColorStop(1, "gray");
    ctx.arc(325, 100, 50, 0, 2 * Math.PI, true);
    ctx.fillStyle = rgrd;
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(330, 90, 10, 0, 2 * Math.PI, true);
    ctx.fillStyle = "#aaa8";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(300, 80, 8, 0, 2 * Math.PI, true);
    ctx.fillStyle = "#aaa8";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(315, 120, 4, 0, 2 * Math.PI, true);
    ctx.fillStyle = "#aaa8";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "darkgreen";
    ctx.moveTo(0, 350);
    ctx.lineTo(350, 350);
    ctx.lineTo(500, 350);
    ctx.lineTo(350, 350);
    ctx.lineTo(375, 300);
    ctx.lineTo(300, 250);
    ctx.lineTo(325, 200);
    ctx.lineTo(0, 200);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "darkgreen";
    ctx.moveTo(650, 350);
    ctx.lineTo(500, 350);
    ctx.lineTo(450, 300);
    ctx.lineTo(470, 270);
    ctx.lineTo(420, 220);
    ctx.lineTo(425, 200);
    ctx.lineTo(650, 195);
    ctx.fill();
    ctx.closePath();

    //Tree1
    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.fillRect(75, 310, 20, 30);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.moveTo(35, 310);
    ctx.lineTo(135, 310);
    ctx.lineTo(85, 260);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#38875E";
    ctx.moveTo(45, 280);
    ctx.lineTo(125, 280);
    ctx.lineTo(85, 240);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.moveTo(55, 250);
    ctx.lineTo(115, 250);
    ctx.lineTo(85, 220);
    ctx.fill();
    ctx.closePath();

    //Tree2

    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.fillRect(195, 220, 20, 30);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.moveTo(155, 220);
    ctx.lineTo(255, 220);
    ctx.lineTo(205, 170);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#38875E";
    ctx.moveTo(165, 190);
    ctx.lineTo(245, 190);
    ctx.lineTo(205, 150);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.moveTo(175, 160);
    ctx.lineTo(235, 160);
    ctx.lineTo(205, 130);
    ctx.fill();
    ctx.closePath();

    //Tree3

    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.fillRect(225, 310, 20, 30);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.moveTo(185, 310);
    ctx.lineTo(285, 310);
    ctx.lineTo(235, 260);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#38875E";
    ctx.moveTo(195, 280);
    ctx.lineTo(275, 280);
    ctx.lineTo(235, 240);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.moveTo(205, 250);
    ctx.lineTo(265, 250);
    ctx.lineTo(235, 220);
    ctx.fill();
    ctx.closePath();

    //Tree4
    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.fillRect(495, 220, 20, 30);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.moveTo(455, 220);
    ctx.lineTo(555, 220);
    ctx.lineTo(505, 170);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#38875E";
    ctx.moveTo(465, 190);
    ctx.lineTo(545, 190);
    ctx.lineTo(505, 150);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.moveTo(475, 160);
    ctx.lineTo(535, 160);
    ctx.lineTo(505, 130);
    ctx.fill();
    ctx.closePath();

    //Tree3

    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.fillRect(525, 310, 20, 30);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.moveTo(485, 310);
    ctx.lineTo(585, 310);
    ctx.lineTo(535, 260);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#38875E";
    ctx.moveTo(495, 280);
    ctx.lineTo(575, 280);
    ctx.lineTo(535, 240);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.moveTo(505, 250);
    ctx.lineTo(565, 250);
    ctx.lineTo(535, 220);
    ctx.fill();
    ctx.closePath();
  };

  useEffect(() => {
    if (ctx) draw(ctx);
  }, [ctx]);

  return (
    <>
      <canvas ref={canvas} width="650" height="350" />
      <Poem title={"The Moon, how definite its orb! (fragment)"}></Poem>
    </>
  );
}

export default Moon;