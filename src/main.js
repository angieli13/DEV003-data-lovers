
import { searching, characters, orderedA, orderedZ, books, spells, funFacts, slytherinHouse, gryffindorHouse, ravenclawHouse, hufflepuffHouse}from "./data.js";

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
    
              
                  <center><h1>${personaje.name}</h1></center>
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

/*ordenar personajes*/
document.getElementById('sort_az').addEventListener("click", function() {
  let ordenados = []; 
  ordenados = orderedA(characters);
  showCharacter(ordenados)
  
});

document.getElementById('sort_za').addEventListener("click", function() {
  let ordenados = [];  
  ordenados = orderedZ(characters);
  showCharacter(ordenados)
});

 
//funciónpara books
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
    
              
                  <center><h1>${libro.title}</h1></center>
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
    
              
                 <center><h1>${hechizo.name}</h1></center>
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

document.getElementById("slytherin").addEventListener("click", function(){ 
  showSlytherin(slytherinHouse)
  slytherinHouse.textContent = slytherinHouse.length;
});

function showSlytherin(casaSlytherin) {
  document.getElementById("logo").style.display = "none";
  document.getElementById("presentacion").style.display = "none";
  const containerSlytherin = document.querySelector("#books_div");
  containerSlytherin.innerHTML = "";
  casaSlytherin.forEach((casa) => {
    const slytherinCard = document.createElement("div");
    slytherinCard.className = "cSlytherin";
    slytherinCard.innerHTML += `
    
              
                  <center><h1>${casa.name}</h1></center>
                  <center><img src="${"images/Slytherin.png"}" alt=""></center>
                  <p>Especie: ${casa.species}</p>
                  <p>Genero: ${casa.gender}</p>
                  <p>Casa: ${casa.house}</p>
              
          `;
    containerSlytherin.appendChild(slytherinCard);
    //console.log(casaSlytherin);
  });
}

document.getElementById("gryffindor").addEventListener("click", function(){ 
  showGryffindor(gryffindorHouse)
  gryffindorHouse.textContent = gryffindorHouse.length;
});

function showGryffindor(casaGryffindor) {
  document.getElementById("logo").style.display = "none";
  document.getElementById("presentacion").style.display = "none";
  const containerGryffindor = document.querySelector("#books_div");
  containerGryffindor.innerHTML = "";
  casaGryffindor.forEach((casa) => {
    const gryffindorCard = document.createElement("div");
    gryffindorCard.className = "cGryffindor";
    gryffindorCard.innerHTML += `
    
              
                  <center><h1> ${casa.name}</h1></center>
                  <center><img src="${"images/Gryffindor.png"}" alt=""></center>
                  <p>Especie: ${casa.species}</p>
                  <p>Genero: ${casa.gender}</p>
                  <p>Casa: ${casa.house}</p>
              
          `;
    containerGryffindor.appendChild(gryffindorCard);
    //console.log(casaGryffindor);
  });
}

document.getElementById("ravenclaw").addEventListener("click", function(){ 
  showRavenclaw(ravenclawHouse)
  ravenclawHouse.textContent = ravenclawHouse.length;
});

function showRavenclaw(casaRavenclaw) {
  document.getElementById("logo").style.display = "none";
  document.getElementById("presentacion").style.display = "none";
  const containerRavenclaw = document.querySelector("#books_div");
  containerRavenclaw.innerHTML = "";
  casaRavenclaw.forEach((casa) => {
    const ravenclawCard = document.createElement("div");
    ravenclawCard.className = "cRavenclaw";
    ravenclawCard.innerHTML += `
    
              
                  <center><h1> ${casa.name}</h1></center>
                  <center><img src="${"images/Ravenclaw.png"}" alt=""></center>
                  <p>Especie: ${casa.species}</p>
                  <p>Genero: ${casa.gender}</p>
                  <p>Casa: ${casa.house}</p>
              
          `;
    containerRavenclaw.appendChild(ravenclawCard);
    //console.log(casaRavenclaw);
  });
}

document.getElementById("hufflepuff").addEventListener("click", function(){ 
  showHufflepuff(hufflepuffHouse)
  hufflepuffHouse.textContent = hufflepuffHouse.length;
});

function showHufflepuff(casaHufflepuff) {
  document.getElementById("logo").style.display = "none";
  document.getElementById("presentacion").style.display = "none";
  const containerHufflepuff = document.querySelector("#books_div");
  containerHufflepuff.innerHTML = "";
  casaHufflepuff.forEach((casa) => {
    const hufflepuffCard = document.createElement("div");
    hufflepuffCard.className = "cHufflepuff";
    hufflepuffCard.innerHTML += `
    
              
                  <center><h1> ${casa.name}</h1></center>
                  <center><img src="${"images/cHufflepuff.png"}" alt=""></center>
                  <p>Especie: ${casa.species}</p>
                  <p>Genero: ${casa.gender}</p>
                  <p>Casa: ${casa.house}</p>
              
          `;
    containerHufflepuff.appendChild(hufflepuffCard);
    //console.log(casaHufflepuff);
  });
}






