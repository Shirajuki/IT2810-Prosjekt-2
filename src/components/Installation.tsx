import React from "react";
import Poem from "./Poem";
import InstallationDisplay from "./InstallationDisplay";
import Audio from "./Audio";

//Declares type of title
interface IProps {
  title: string;
}

/*This is the information that is passed into the main part of the modal in App.tsx
  Title is used to fetch both the appropriate picture from InstallationDisplay,
  the poem from Poem.tsx and the correct audiofiles from Audio.tsx */
function Installation({ title }: IProps) {
  return (
    <>
      <h1 className="installation-title">{title}</h1>
      <div className="installation-wrapper">
        <InstallationDisplay title={title}></InstallationDisplay>
        <div className="poem-container">
          <Poem title={title}></Poem>
        </div>
        <Audio title={title}></Audio>
      </div>
    </>
  );
}

//<img className="installation-image" src={picture} />
export default Installation;
