import React, { createContext } from "react";

//Sets types for the components in favContext
interface ContextTypes {
  favorites: { [id: string]: string };
  setFavorite: (id: string, checked: boolean) => void;
}
//Initializes a context hook with favourites
export const FavContext = createContext<ContextTypes>({
  favorites: {},
  setFavorite: () => {},
});
