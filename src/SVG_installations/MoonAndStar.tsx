import React, { useState } from "react";
import "./App.css";
import Poem from "../Poem";

function MoonAndStar() {
    return (
      <div className="App">
        <div className="App-header"></div>
        <svg width="750" height="450">
        /** Code for color of sky*/
        <rect id="sky" height="450" width="750" style={{fill: "linear-gradient(#0000a9, #99ccff)"}}>
        </rect>

        /** Code for star1 */
        <polygon id="star1" points="194,83 201,104 221,104 204,114 217,129 194,119 171,129 184,114 167,104 187,104" style={{fill: "rgb(255,255,50)"}}>
            <animateTransform
                              attributeName="transform"
                              attributeType="XML"
                              type="rotate"
                              from="-360" to="0"
                              dur="2s"
                              repeatCount="indefinite" />
        </polygon>

        /** Code for star2 */
        <polygon id="star2" points="553,24 559,32 569,32 559,38 565,47 553,42 542,47 547,38 538,32 548,32" style={{fill:"rgb(255,255,50)"}}>
            <animateTransform
                              attributeName="transform"
                              attributeType="XML"
                              type="rotate"
                              from="0 400 400" to="360 500 500"
                              dur="3s"
                              repeatCount="indefinite" />
        </polygon>

        /** Code for star3 */
        <polygon id="star3" points="253,24 259,32 269,32 259,38 265,47 253,42 242,47 247,38 238,32 248,32" style={{fill:"rgb(255,255,50)"}}>
            <animateTransform
                              attributeName="transform"
                              attributeType="XML"
                              type="translate"
                              from="-200 25" to="500 100"
                              dur="4s"
                              repeatCount="indefinite" />
        </polygon>

        /** Code for star4 */ 
        <polygon id="star4" points="494,83 501,104 521,104 504,114 517,129 494,119 471,129 484,114 467,104 487,104" style={{fill:"rgb(255,255,50)"}}>
            <animateTransform 
                              attributeName="transform"
                              attributeType="XML"
                              type="rotate"
                              from="0 80 450" to="360 450 80"
                              dur="3s"
                              repeatCount="indefinite" />
        </polygon>

        /** Code for the moon */
        <path id="moon" d="M375,90 C290 90, 290 210, 375 210 "  visibility="hidden" fill= "rgb(69,69,69)">
        </path>

        /** Code for hill1 */
        <circle id="hill1" cx="120" cy="480" r="160" stroke="rgb(0,100,0)" stroke-width="1" fill= "rgb(105,184,83)" />

        /** Code for hill2 */
        <circle id="hill2" cx="610" cy="470" r="160" stroke="rgb(0,100,0)" stroke-width="1" fill= "rgb(52,161,140)" />

        /** Code for hill3 -*/
        <circle id="hill3" cx="385" cy="490" r="170" stroke="rgb(0,100,0)" stroke-width="1" fill="rgb(131,184,102)" />

        /** Code for a house on a hill-*/
        <rect id="house" height="90" width="70" x="105" y="250"  fill="rgb(117,0,0)" />
        <polygon id="houseRoof" points="85,250 140,220 195,250" fill="rgb(117,0,0)" />
        <rect id="door" height="40" width="30" x="125" y="300" fill="black"/>

    </svg>
        <Poem
          title={"Ah, Moon -- and Star!"}
        ></Poem>
      </div>
    );
  }
  
  export default MoonAndStar;
  