import data from "./data/harrypotter/data.js";

export const characters = data.characters;

export const searching = (characters, searchText) => {
  const search = characters.filter(element => element.name.toLowerCase().includes(searchText.toLowerCase()));
  return search;
}
export const books = data.books;

export const spells = data.spells;

export const funFacts = data.funFacts;

export const filterHouses = (characters, houseName) => {
  return characters.filter((character) => character.house === houseName);
}