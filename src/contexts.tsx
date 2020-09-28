import React, { createContext } from "react";

interface ContextTypes {
  favorites: { [id: string]: string };
  setFavorite: (id: string, checked: boolean) => void;
}

export const FavContext = createContext<ContextTypes>({
  favorites: {},
  setFavorite: () => {},
});
