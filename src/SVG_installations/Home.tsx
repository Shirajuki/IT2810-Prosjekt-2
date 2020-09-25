import React from "react";
import wavingMan from "./wavingPerson.png";

interface IProps {
  onClick: () => void;
}

function Home({ onClick }: IProps) {
  return (
    <div className="svg" onClick={onClick}>
      <svg
        viewBox="0 0 740 450"
        xmlns="http://www.w3.org/2000/svg"
        style={{ background: "linear-gradient(#b3d7ff, #ffffff)" }}
      >
        <circle id="sun" cx="375" cy="150" r="60" fill="rgb(255,255,153)">
          <animate
            attributeName="cy"
            from="300"
            to="-100"
            dur="3s"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>

        <path
          id="backHill2"
          d="m 0 190 L 100 200 L 200 210 L 300 200 L 400 190 L 500 200 L 600 190 L 750 100 L 750 450 L 0 450 z "
          fill="rgb(63,152,78)"
        />
        <path
          id="backHill1"
          d="m 0 250 L 90 290 L 210 270 L 290 250 L 370 260 L 490 280 L 580 250 L 750 280 L 750 450 L 0 450 z "
          fill="darkgreen"
        />
        <path
          id="hill1"
          d="m 0 390 L 100 400 L 200 410 L 300 400 L 400 390 L 500 400 L 600 390 L 750 400 L 750 450 L 0 450 z "
          fill="green"
        />

        <rect
          id="house"
          height="90"
          width="70"
          x="105"
          y="340"
          fill="rgb(117,0,0)"
        />
        <polygon
          id="houseRoof"
          points="85,340 140,320 195,340"
          fill="rgb(117,0,0)"
        />
        <rect height="40" width="30" x="125" y="390" fill="rgb(255,255,204)" />
        <image
          id="doorImg"
          width="30px"
          height="40px"
          x="125"
          y="390"
          href={wavingMan}
        />
        <rect
          id="doorClosed"
          height="40"
          width="30"
          x="125"
          y="390"
          fill="black"
        >
          <animate
            attributeName="x"
            from="125"
            to="100"
            begin="2s"
            dur="5s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
}

export default Home;
