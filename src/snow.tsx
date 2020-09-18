import React, { useEffect, useRef, useState } from "react";
import Poem from "./Poem";

function Moon() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState(null);
  const interval = useRef(null);
  const time = useRef(0);

  useEffect(() => {
    setCtx(canvas.current?.getContext("2d"));
  }, [canvas]);

  const draw = (ctx: CanvasRenderingContext2D, time: number) => {
    const bgGradient = ctx.createLinearGradient(0, 350, 0, 0);
    bgGradient.addColorStop(0, "#00f");
    bgGradient.addColorStop(1, "#606");
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 650, 350);

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
    ctx.fillRect(0, 280, 650, 280);

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

    ctx.fillStyle = "white";
    for (let rad = time * 5; rad <= time * 5 + 400; rad += 50) {
      ctx.beginPath();
      for (let x = Math.sin(time) * 10; x < 700; x += 30) {
        ctx.arc(x, rad % 400, 3, 0, 2 * Math.PI, false);
        ctx.fill();
      }
      ctx.closePath();
    }

    for (let rad = time * 5 + 25; rad <= time * 5 + 425; rad += 50) {
      ctx.beginPath();
      for (let x = Math.sin(time) * -10; x < 700; x += 30) {
        ctx.arc(x, rad % 400, 3, 0, 2 * Math.PI, false);
        ctx.fill();
      }
      ctx.closePath();
    }
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
  }, [ctx]);

  return (
    <>
      <canvas ref={canvas} width="650" height="350" />
      <Poem title={"The Moon, how definite its orb! (fragment)"}></Poem>
    </>
  );
}

export default Moon;
