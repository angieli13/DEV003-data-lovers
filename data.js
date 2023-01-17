import data from "./data/harrypotter/data.js";

export const characters = data.characters;

export const searching = (characters, searchText) => {
  const search = characters.filter(element => element.name.toLowerCase().includes(searchText.toLowerCase()));
  return search;
}
export const books = data.books;

export const spells = data.spells;

export const funFacts = data.funFacts;

export const slytherinHouse = characters.filter(casa => casa.house === "Slytherin")

export const gryffindorHouse = characters.filter(casa => casa.house === "Gryffindor")

export const ravenclawHouse = characters.filter(casa => casa.house === "Ravenclaw")

export const hufflepuffHouse = characters.filter(casa => casa.house === "Hufflepuff")

export const orderedA = (characters) => characters.sort ((a, b) => a.name.localeCompare(b.name));

export const orderedZ = (characters) => characters.sort ((a, b) => b.name.localeCompare(a.name));

