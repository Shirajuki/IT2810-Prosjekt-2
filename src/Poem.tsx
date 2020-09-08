import React, { useState, useEffect } from "react";
const prefixUrl = "https://cors-anywhere.herokuapp.com/http://poetrydb.org";

interface IProps {
  title: string;
}

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
      {console.log(prefixUrl + "/title/" + title + "/lines.json")}
      {data.map((item: string) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default Poem;
