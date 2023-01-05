
import data_harry from "./data.js";




document.getElementById("booksh").addEventListener("click", function(){
  //console.log("sipi")
  const datos_books = data_harry.filterData("books");
    
  const divs_escritura = document.getElementById('books_div');

  //console.log(datos_books)

  for (const books in datos_books){
    const valor = datos_books[books];
    //console.log({books, valor});
    //console.log(valor["title"]);
    divs_escritura.innerHTML += "<div class='card'>"+
                                        "<img src='./images/libropar.png' alt='imgbook' style='width:100px; height: 100px;'>" +
                                        "<div class='container'>" +
                                        "<h1 style='color:#fff'>" + valor["title"] + "</h1>" +
                                        "<h2 style='color:#fff'> " + valor["author"]  + "</h2>" +
                                        "<p style='color:#fff'> " + valor["releaseDay"]  + "</p>"+
                                        "<p style='color:#fff'> " + valor["description"]  + "</p>" +
                                        "</div>" +
                                    "</div>";                                    
                                   
  }


}),

document.getElementById("charactersh").addEventListener("click", function(){
  //console.log("sipi")
  const datos_characters = data_harry.filterData( "characters");
    
  const divs_escritura = document.getElementById('books_div');

  //console.log(datos_characters)

  for (const characters in datos_characters){
    const valor = datos_characters[characters];
    //console.log({characters, valor});
    //console.log(valor["name"]);
    divs_escritura.innerHTML += "<div class='card'>"+
                                        "<div class='container'>" +
                                        "<h1 style='color:#fff'>" + valor["name"] + "</h1>" +
                                        "<h2 style='color:#fff'> " + valor["species"]  + "</h2>" +
                                        "<p style='color:#fff'> " + valor["gender"]  + "</p>"+
                                        "</div>" +
                                    "</div>";                                    
                                   
  }
  //20 -> 21 
  //const i = i + 1;  
  //const html = "<p>a|bbb</p>"
  // html += "<a></a>"//
  // <p></p><a></a>
});


