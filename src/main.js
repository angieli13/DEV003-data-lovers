
import { searching, characters, books, spells, funFacts, filterHouses }from "./data.js";

// Ponerle la funcion de mostrar personajes al darle click al boton
document.getElementById("charactersh").addEventListener("click", function(){ 
  showCharacter(characters)
  characters.textContent = characters.length;
});
// Funcion para mostrar personajes
function showCharacter(personajes) {
  document.getElementById("logo").style.display = "none";
  document.getElementById("presentacion").style.display = "none";
  const containerCharacters = document.querySelector("#books_div");
  containerCharacters.innerHTML = "";
  personajes.forEach((personaje) => {
    const characterCard = document.createElement("div");
    characterCard.className = "character";
    
    characterCard.innerHTML += `
    
              
                  <center><h1>Nombre: ${personaje.name}</h1></center>
                  <center><img src="${"images/imgcharacter.gif"}" alt=""></center>
                  <p>Especie: ${personaje.species}</p>
                  <p>Genero: ${personaje.gender}</p>
                  <p>Casa: ${personaje.house}</p>
              
          `;
    containerCharacters.appendChild(characterCard);
    //console.log(personajes);
  });
}

// mostrar personajes buscados en el boton buscar
const searchBar = document.querySelector("#searchBar");
searchBar.addEventListener("keyup", (event) => {
  const searchText = event.target.value;
  const matchedCharacters = searching(characters, searchText)
  showCharacter(matchedCharacters);
  characters.textContent = matchedCharacters.length;
  //console.log(matchedCharacters);
});

document.getElementById("booksh").addEventListener("click", function( ){ 
  showBook(books)
  books.textContent = books.length;
})

function showBook(libros) {
  document.getElementById("logo").style.display = "none";
  document.getElementById("presentacion").style.display = "none";
  const containerBooks = document.querySelector("#books_div");
  containerBooks.innerHTML = "";
  libros.forEach((libro) => {
    const libroCard = document.createElement("div");
    libroCard.className = "book";
    libroCard.innerHTML += `
    
              
                  <center><h1>Titulo: ${libro.title}</h1></center>
                  <center><img src="${"images/booksmov.gif"}" alt=""></center>
                  <p>Fecha: ${libro.releaseDay}</p>
                  <p>Autora: ${libro.author}</p>
                  <p>Sinopsis: ${libro.description}</p>
              
          `;
    containerBooks.appendChild(libroCard);
    //console.log(libros);
  });
}

document.getElementById("spellsh").addEventListener("click", function(){ 
  showSpell(spells)
  spells.textContent = spells.length;
});

function showSpell(hechizos) {
  document.getElementById("logo").style.display = "none";
  document.getElementById("presentacion").style.display = "none";
  const containerSpells = document.querySelector("#books_div");
  containerSpells.innerHTML = "";
  hechizos.forEach((hechizo) => {
    const hechizoCard = document.createElement("div");
    hechizoCard.className = "spells";
    hechizoCard.innerHTML += `
    
              
                 <center><h1>Nombre: ${hechizo.name}</h1></center>
                 <center><img src="${"images/imgspells.gif"}" alt=""></center>
                  <p>Pronunciacion: ${hechizo.pronunciation}</p>
                  <p>Tipo: ${hechizo.spell_type}</p>
                  <p>Descripcion: ${hechizo.description}</p>
              
          `;
    containerSpells.appendChild(hechizoCard);
    //console.log(hechizos);
  });
}

document.getElementById("curioush").addEventListener("click", function(){ 
  showFunFact(funFacts)
  funFacts.textContent = funFacts.length;
});

function showFunFact(datosCuriosos) {
  document.getElementById("logo").style.display = "none";
  document.getElementById("presentacion").style.display = "none";
  const containerfunFacts = document.querySelector("#books_div");
  containerfunFacts.innerHTML = "";
  datosCuriosos.forEach((datoCurioso) => {
    const datoCuriosoCard = document.createElement("div");
    datoCuriosoCard.className = "funFacts";
    
    datoCuriosoCard.innerHTML += `
    
              
                  <center><h1>¿Sabías qué...?</h1></center>
                  <center><img src="${"images/imgsabiasque.gif"}" alt=""></center>
                  <h2>${datoCurioso.type}</h2>
                  <p>${datoCurioso.content}</p>
              
          `;
    containerfunFacts.appendChild(datoCuriosoCard);
    //console.log(datosCuriosos);
  });
}

// Limpiar data 
const showStart = () => {
  document.getElementById("logo").style.display = "block";
  document.getElementById("presentacion").style.display = "block";//mostrar imagen de nuevo
  const inicio = document.querySelector("#books_div");
  inicio.innerHTML = "";
  return inicio;
};
// al darle click al boton start
document.getElementById("start").addEventListener("click", function(){ 
  showStart("");
});

const houseCharacters = characters.map(({house})=>house);
console.log(houseCharacters);





