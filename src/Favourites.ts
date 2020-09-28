//List of all installation names
const artList: string[] = [
  "In the Black Forest",
  "A Wall Flower",
  "The Birch-Tree at Loschwitz",
  "Winter Song",
  "The Moon, how definite its orb!",
  "Epitaph. on Mrs Corbet, Who Died of a Cancer in Her Breast.",
  "Ah, Moon -- and Star!",
  "Fragment: Home",
  "I hide myself within my flower,",
];

//Creates an empty favouritelist in localStorage if one does not exist
if (typeof Storage !== "undefined") {
  if (
    localStorage.getItem("favourites") === null ||
    localStorage.getItem("favourites") === ""
  ) {
    localStorage.setItem("favourites", "[]");
  }
}
const arts: string[] = [];

//Adds the art that is set as favourite in localStorage to a local favourite list
const favourites: string[] = artList.filter((title: string) =>
  getFavoriteFromStorage(title)
);

//Checks localStorage to see if the title is in it, if so return true
function getFavoriteFromStorage(title: string): boolean {
  try {
    const favStorage = JSON.parse(localStorage.getItem("favourites"));
    return favStorage.includes(title);
  } catch (ex) {
    return false;
  }
}

//Adds an installation to localStorage's favourite list
function setFavoriteInStorage(title: string, checked: boolean): void {
  try {
    if (checked) {
      addFavourite(title);
    } else {
      if (favourites.includes(title)) {
        removeFavourite(title);
      }
    }
  } catch (ex) {}
}

//Adds all the favorites to the empty arts list
for (let i = 0; i < favourites.length; i++) {
  arts.push(favourites[i]);
}

//Adds the rest of the art so that it's behind the favourites
for (let i = 0; i < artList.length; i++) {
  if (!arts.includes(artList[i])) {
    arts.push(artList[i]);
  }
}

//Checks if an installation is a favourite or not and changes the state of it appropriately
function toggleFavourite(title: string) {
  if (favourites.includes(title)) {
    removeFavourite(title);
  } else {
    addFavourite(title);
  }
}

//Adds an installation to favourites as long as it's not already there and sets it in localStorage
function addFavourite(title: string) {
  if (!favourites.includes(title)) {
    favourites.push(title);
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }
}

//Checks if an installation is in favourites and removes it if so.
function removeFavourite(title: string) {
  for (let i = 0; i < favourites.length; i++) {
    if (favourites[i] === title) {
      favourites.splice(i, 1);
      localStorage.setItem("favourites", JSON.stringify(favourites));
      break;
    }
  }
}
export default {
  arts: arts,
  artList: artList,
  favourites: favourites,
  toggleFavourite: toggleFavourite,
  getFavoriteFromStorage: getFavoriteFromStorage,
  setFavoriteInStorage: setFavoriteInStorage,
};
