/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";

interface IProps {
  onClick: () => void;
}

function Moon({ onClick }: IProps) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState(null);
  const interval = useRef(null);
  const time = useRef(0);
  var opacity = 0.5;

  useEffect(() => {
    setCtx(canvas.current?.getContext("2d"));
  }, [canvas]);

  function drawStar(x = 0, y = 0, opacity = 0.5) {
    ctx.beginPath();
    ctx.fillStyle = `rgba(250, 250, 250, ${opacity})`;
    ctx.fillRect(x - 10, y - 2.5, 20, 5);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillRect(x - 2.5, y - 10, 5, 20);
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(x - 7.5, y - 5);
    ctx.lineTo(x - 5, y - 7.5);
    ctx.lineTo(x + 7.5, y + 5);
    ctx.lineTo(x + 5, y + 7.5);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x - 7.5, y + 5);
    ctx.lineTo(x - 5, y + 7.5);
    ctx.lineTo(x + 7.5, y - 5);
    ctx.lineTo(x + 5, y - 7.5);
    ctx.closePath();
    ctx.fill();
  }

  const draw = (ctx: CanvasRenderingContext2D, time: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    if (opacity < 1) {
      opacity += 0.05;
    } else {
      opacity = 0.1;
    }

    //Nightsky
    ctx.beginPath();
    var nightgrd = ctx.createLinearGradient(0, 0, 650, 350);
    nightgrd.addColorStop(0, "#001431");
    nightgrd.addColorStop(1, "#0C2C73");
    ctx.fillStyle = nightgrd;
    ctx.fillRect(0, 0, 650, 350);

    ctx.rect(0, 0, 750, 350);
    ctx.fill();
    ctx.closePath();

    //Lake
    ctx.beginPath();
    var grd = ctx.createLinearGradient(0, 0, 650, 350);
    grd.addColorStop(0, "#007EC1");
    grd.addColorStop(1, "#012653");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 200, 750, 350);
    ctx.closePath();

    //Moon reflection
    ctx.beginPath();
    ctx.arc(325, 270, 50, 0, 2 * Math.PI, true);
    ctx.fillStyle = "rgb(250, 250, 250, 0.6)";
    ctx.fill();
    ctx.closePath();

    //Moonspots
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

    //Moon
    ctx.beginPath();
    var rgrd = ctx.createRadialGradient(310, 100, 70, 325, 250, 1);
    rgrd.addColorStop(0, "white");
    rgrd.addColorStop(1, "gray");
    ctx.arc(325, 100, 50, 0, 2 * Math.PI, true);
    ctx.fillStyle = rgrd;
    ctx.fill();
    ctx.closePath();

    //Moon spots
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

    //Grass
    ctx.beginPath();
    ctx.fillStyle = "darkgreen";
    ctx.moveTo(0, 370);
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
    ctx.moveTo(750, 370);
    ctx.lineTo(500, 350);
    ctx.lineTo(450, 300);
    ctx.lineTo(470, 270);
    ctx.lineTo(420, 220);
    ctx.lineTo(425, 200);
    ctx.lineTo(750, 195);
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

    //Tree4
    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.fillRect(670, 245, 20, 30);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.moveTo(630, 245);
    ctx.lineTo(730, 245);
    ctx.lineTo(680, 195);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#38875E";
    ctx.moveTo(640, 215);
    ctx.lineTo(720, 215);
    ctx.lineTo(680, 175);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.moveTo(650, 185);
    ctx.lineTo(710, 185);
    ctx.lineTo(680, 155);
    ctx.fill();
    ctx.closePath();

    //Stars
    drawStar(50, 100, opacity);
    drawStar(90, 150, opacity);
    drawStar(90, 30, opacity);
    drawStar(150, 70, opacity);
    drawStar(250, 50, opacity);
    drawStar(250, 150, opacity);
    drawStar(300, 20, opacity);
    drawStar(350, 180, opacity);
    drawStar(400, 30, opacity);
    drawStar(400, 120, opacity);
    drawStar(500, 50, opacity);
    drawStar(550, 150, opacity);
    drawStar(600, 50, opacity);
    drawStar(650, 150, opacity);
    drawStar(680, 80, opacity);
  };

  useEffect(() => {
    if (ctx)
      if (interval.current !== null) {
        clearInterval(interval.current);
      }
    interval.current = setInterval(() => {
      time.current += 0.1;
      draw(ctx, time.current);
    }, 200);
  }, [ctx]);

  return (
    <>
      <canvas onClick={onClick} ref={canvas} width="750" height="450" />
    </>
  );
}

export default Moon;
