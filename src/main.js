import data from "./data/harrypotter/data.js";
import data_harry from "./data.js";




document.getElementById("booksh").addEventListener("click", function(){
    console.log("sipi")
    const datos_books = data_harry.filterData(data, "books");
    
    let divs_escritura = document.getElementById('books_div');

    console.log(datos_books)

    for (var books in datos_books){
        const valor = datos_books[books];
        console.log({books, valor});
        console.log(valor["title"]);
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


});

    


