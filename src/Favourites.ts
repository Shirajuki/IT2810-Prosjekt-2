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

if (typeof Storage !== "undefined") {
	if (
		localStorage.getItem("favourites") === null ||
		localStorage.getItem("favourites") === ""
	) {
		localStorage.setItem("favourites", "[]");
	}
}
const arts: string[] = [];
const favourites: string[] = artList.filter((title: string) =>
	getFavoriteFromStorage(title)
);
function getFavoriteFromStorage(title: string): boolean {
	try {
		const favStorage = JSON.parse(localStorage.getItem("favourites"));
		return favStorage.includes(title);
	} catch (ex) {
		return false;
	}
}

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

for (let i = 0; i < favourites.length; i++) {
	arts.push(favourites[i]);
}
for (let i = 0; i < artList.length; i++) {
	if (!arts.includes(artList[i])) {
		arts.push(artList[i]);
	}
}
function toggleFavourite(title: string) {
	if (favourites.includes(title)) {
		removeFavourite(title);
	} else {
		addFavourite(title);
	}
}
function addFavourite(title: string) {
	if (!favourites.includes(title)) {
		favourites.push(title);
		localStorage.setItem("favourites", JSON.stringify(favourites));
	}
}
function removeFavourite(title: string) {
	for (let i = 0; i < favourites.length; i++) {
		if (favourites[i] === title) {
			favourites.splice(i,1);
			localStorage.setItem("favourites", JSON.stringify(favourites));
			break;
		}
	}
}
export default { 
	"arts": arts,
	"artList": artList,
	"favourites": favourites,
	"toggleFavourite": toggleFavourite,
	"getFavoriteFromStorage": getFavoriteFromStorage,
	"setFavoriteInStorage": setFavoriteInStorage,
}
