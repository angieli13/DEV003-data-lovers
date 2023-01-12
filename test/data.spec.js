import { searching, characters,/* books,spells, funFacts, slytherinHouse, gryffindorHouse, ravenclawHouse, hufflepuffHouse */} from '../src/data.js';


/*describe('example', () => {
  it('deberia retornar los libros', () => {
    expect(books.length).toBe(8);
  });
});*/

describe( 'searching',()=>{
  it('conjunto de test para searching', () =>{
    expect(searching(characters, 'Cedric')).toEqual([{
      "id": 117,
      "name": "Cedric Diggory",
      "birth": "between 1 September and 30 October 1977",
      "death": "24 June, 1995 (aged 17)",
      "species": "Human",
      "ancestry": "Pure-blood (possibly)",
      "gender": "Male",
      "hair_color": "Dark",
      "eye_color": "Grey",
      "wand": "12¼\", Ash, unicorn hair",
      "patronus": null,
      "house": "Hufflepuff",
      "associated_groups": [
        "Diggory family",
        "Hogwarts School of Witchcraft and Wizardry",
        "Hufflepuff",
        "Hufflepuff Quidditch team",
        "Circle of Khanna",
        "Death Eaters (alternate timeline)"
      ],
      "books_featured_in": [3, 4, 5, 6, 7]
    }])
  }
  )
}
)
/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
