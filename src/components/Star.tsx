import React from "react";
import { FavContext } from "../contexts";

interface IProps {
  id: string;
}

export default function Star({ id }: IProps) {
  return (
    <FavContext.Consumer>
      {({ favorites, setFavorite }) => (
        <button
          className="favourite"
          id={id}
          onClick={() => setFavorite(id, !favorites[id])}
        >
          {favorites[id] ? "⭐" : "☆"}
        </button>
      )}
    </FavContext.Consumer>
  );
}
