import React, { useState, useEffect } from "react";
const prefixUrl = "https://poetrydb.org";

interface IProps {
  title: string;
}

function Poem({ title }: IProps) {
  const [data, setData] = useState([]);

  useEffect(() => {
    //console.log(prefixUrl + "/title/" + title + "/lines.json");
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
