import React, { useEffect, useRef, useState } from "react";
import Poem from "../Poem";

function Flower() {
    const canvas = useRef<HTMLCanvasElement>(null);
    const [ctx, setCtx] = useState(null);
    let pedal1 = 0;
    let pedal2 = 0;
    let pedal3 = 0;
    let pedal4 = 0;
    let pedal5 = 0;
    let flowerCenter = 0;

  
    useEffect(() => {
      setCtx(canvas.current?.getContext("2d"));
    }, [canvas]);
  
    const draw = (ctx: CanvasRenderingContext2D) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.beginPath();
      // Create gradient
      let grd = ctx.createLinearGradient(0, 0, 0, 750);
      grd.addColorStop(0, `rgb(245,243,198)`);
      grd.addColorStop(1, "rgb(255,255,255)");

      // Create background
      ctx.beginPath();
      ctx.rect(0, 0, 750, 450);
      ctx.stroke();
      ctx.fillStyle = grd;
      ctx.fill();

      // Creat table
      ctx.beginPath();
      ctx.rect(0,400, 750 , 450);
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
      ctx.arc(340, pedal1+190, 30, 0, Math.PI * 2)
      ctx.strokeStyle = "transparent";
      ctx.stroke();
      ctx.fillStyle = `rgb(255,204,229)`;
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.arc(355, pedal2+160, 30, 0, Math.PI * 2)
      ctx.strokeStyle = "transparent";
      ctx.stroke();
      ctx.fillStyle = `rgb(255,204,229)`;
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.arc(400, pedal3+165, 30, 0, Math.PI * 2)
      ctx.strokeStyle = "transparent";
      ctx.stroke();
      ctx.fillStyle = `rgb(255,204,229)`;
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.arc(370, pedal4+215, 30, 0, Math.PI * 2)
      ctx.strokeStyle = "transparent";
      ctx.stroke();
      ctx.fillStyle = `rgb(255,204,229)`;
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.arc(405, pedal5+200, 30, 0, Math.PI * 2)
      ctx.strokeStyle = "transparent";
      ctx.stroke();
      ctx.fillStyle = `rgb(255,204,229)`;
      ctx.fill();
      ctx.closePath();

      //Flower center
      ctx.beginPath();
      ctx.arc(375, flowerCenter + 190, 20, 0, Math.PI * 2)
      ctx.strokeStyle = "transparent";
      ctx.stroke();
      ctx.fillStyle = `rgb(255,255,153)`;
      ctx.fill();
      ctx.closePath();
    };
  
    useEffect(() => {
      if (ctx) draw(ctx);
    }, [ctx]);
  
    return (
      <>
        <canvas ref={canvas} width="750" height="450" />
        <Poem title={"I hide myself within my flower,"}></Poem>
      </>
    );
  }
  
  export default Flower;
  