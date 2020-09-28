import React from "react";

interface IProps {
  title: string;
}
const getAudio = (title: string) => {
  switch (title) {
    case "A Wall Flower":
      return "audiofiles/wallFlower.mp3";
    case "In the Black Forest":
      return "audiofiles/blackForest.mp3";
    case "The Birch-Tree at Loschwitz":
      return "audiofiles/slowWaltz.mp3";
    case "The Moon, how definite its orb!":
      return "audiofiles/Swan-lake-music.mp3";
    case "Winter Song":
      return "audiofiles/Winter_Wonderland.mp3";
    case "Epitaph. on Mrs Corbet, Who Died of a Cancer in Her Breast.":
      return "audiofiles/death.mp3";
    case "Ah, Moon -- and Star!":
      return "audiofiles/Crickets.mp3";
    case "Fragment: Home":
      return "audiofiles/SunnyDay.mp3";
    case "I hide myself within my flower,":
      return "audiofiles/SadSong.mp3";
    default:
      return "";
  }
};

function Audio({ title }: IProps) {
  return (
    <>
      <audio id="my_audio" src={`${getAudio(title)}`} autoPlay loop></audio>
    </>
  );
}

export default Audio;
