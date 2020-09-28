import React, { useState, useEffect } from "react";
const prefixUrl = "https://poetrydb.org";

//Declares type of title
interface IProps {
  title: string;
}

/*Function that fetches a poem based of it's title from the 
poetrydb database and displays it's lines*/

function Poem({ title }: IProps) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(prefixUrl + "/title/" + title + "/lines.json")
      .then((results) => results.json())
      .then((poem) => {
        if (poem[0]) {
          setData(poem[0]?.lines || []);
        }
      });
  }, [title]);

  return (
    <div>
      {data.map((item: string, index: number) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default Poem;
