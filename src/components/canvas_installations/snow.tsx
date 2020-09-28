import React, { useEffect, useRef, useState } from "react";

interface IProps {
  onClick: () => void;
}
function Snow({ onClick }: IProps) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState(null);
  const interval = useRef(null);
  const time = useRef(0);
  const palettes = [
    ["#001431", "#0C2C73"],
    ["blue", "lightblue"],
    ["#410356", "#AC4BCB"],
  ];

  let t = 0;
  function setTheme() {
    let theme: string = sessionStorage.getItem("theme");
    if (theme === "black") {
      t = 0;
    } else if (theme === "white") {
      t = 1;
    } else if (theme === "pink") {
      t = 2;
    }
  }

  useEffect(() => {
    setCtx(canvas.current?.getContext("2d"));
  }, [canvas]);

  const draw = (ctx: CanvasRenderingContext2D, time: number) => {
    const bgGradient = ctx.createLinearGradient(0, 350, 0, 0);
    bgGradient.addColorStop(0, palettes[t][0]);
    bgGradient.addColorStop(1, palettes[t][1]);
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 750, 350);

    ctx.beginPath();
    ctx.arc(180, 200, 80, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#ff0";
    ctx.fill();
    ctx.closePath();

    const groundGradient = ctx.createLinearGradient(0, 100, 650, 0);
    groundGradient.addColorStop(0, "#666");
    groundGradient.addColorStop(0.25, "#ff0");
    groundGradient.addColorStop(1, "#666");
    ctx.fillStyle = groundGradient;
    ctx.fillRect(0, 280, 750, 280);

    ctx.beginPath();
    ctx.moveTo(150, 280);
    ctx.lineTo(300, 90);
    ctx.lineTo(500, 280);
    ctx.lineTo(150, 280);
    ctx.closePath();
    const middleHillGradient = ctx.createLinearGradient(100, 100, 300, 300);
    middleHillGradient.addColorStop(0, "#ff0");
    middleHillGradient.addColorStop(1, "#666");
    ctx.fillStyle = middleHillGradient;
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(0, 180);
    ctx.lineTo(100, 110);
    ctx.lineTo(200, 300);
    ctx.lineTo(0, 300);
    ctx.closePath();
    const leftHillGradient = ctx.createLinearGradient(200, 0, 0, 200);
    leftHillGradient.addColorStop(0, "#ff0");
    leftHillGradient.addColorStop(1, "#666");
    ctx.fillStyle = leftHillGradient;
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(400, 300);
    ctx.lineTo(550, 100);
    ctx.lineTo(700, 300);
    ctx.lineTo(400, 300);
    ctx.closePath();
    const rightHillGradient = ctx.createLinearGradient(300, 100, 500, 300);
    rightHillGradient.addColorStop(0, "#ff0");
    rightHillGradient.addColorStop(1, "#666");
    ctx.fillStyle = rightHillGradient;
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(600, 350);
    ctx.lineTo(750, 150);
    ctx.lineTo(900, 350);
    ctx.lineTo(600, 350);
    ctx.closePath();
    rightHillGradient.addColorStop(0, "#ff0");
    rightHillGradient.addColorStop(1, "#666");
    ctx.fillStyle = rightHillGradient;
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "white";
    for (let rad = time * 5; rad <= time * 5 + 500; rad += 50) {
      ctx.beginPath();
      for (let x = Math.sin(time) * 10; x < 800; x += 30) {
        ctx.arc(x, rad % 500, 3, 0, 2 * Math.PI, false);
        ctx.fill();
      }
      ctx.closePath();
    }

    for (let rad = time * 5 + 25; rad <= time * 5 + 525; rad += 50) {
      ctx.beginPath();
      for (let x = Math.sin(time) * -10; x < 800; x += 30) {
        ctx.arc(x, rad % 500, 3, 0, 2 * Math.PI, false);
        ctx.fill();
      }
      ctx.closePath();
    }
    setTheme();
  };

  useEffect(() => {
    if (ctx) {
      if (interval.current !== null) {
        clearInterval(interval.current);
      }
      interval.current = setInterval(() => {
        time.current += 0.1;
        draw(ctx, time.current);
      }, 100);
    }
  }, [ctx]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <canvas onClick={onClick} ref={canvas} width="750" height="450" />
    </>
  );
}

export default Snow;
