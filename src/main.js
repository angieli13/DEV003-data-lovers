import data from "./data/harrypotter/data.js";
import data_harry from "./data.js";




document.getElementById("btnBooks").addEventListener("click", function(){
    const datos_books = data_harry.filterData(data, "books");
    
    let divs_escritura = document.getElementById('books_div');

    console.log(datos_books)

    for (var books in datos_books){
        const valor = datos_books[books];
        console.log({books, valor});
        console.log(valor["title"]);
        divs_escritura.innerHTML += "<div><h1 style='color:#fff'>" + valor["title"] + "</h1>" +
                                    "<p style='color:#fff'> " + valor["author"]  + "</p>" +
                                    "<p style='color:#fff'> " + valor["releaseDay"]  + "</p>"+
                                    "<p style='color:#fff'> " + valor["description"]  + "</p></div>";
                                    
                                   
    }

});

    


