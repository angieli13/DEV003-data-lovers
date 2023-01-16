import { searching, characters, orderedA, orderedZ } from '../src/data.js';

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

describe('Funcion orderedA ordena alfabéticamente desde la A a la Z', () => {
  it('is a function', () => {
    expect(typeof orderedA).toBe('function');
  });

  it('Debería retornar los nombres de los personajes ordenados de la A-Z', () => {

    const orderAz = orderedA (characters);

    expect(orderAz[0].name).toBe('Aberforth Dumbledore');
    expect(orderAz[1].name).toBe('Alastor Moody');
    expect(orderAz[2].name).toBe('Albus Dumbledore');
    expect(orderAz[3].name).toBe('Angelina Johnson');
    expect(orderAz[4].name).toBe('Aragog');

  });
});

describe('Funcion orderedZ ordena alfabéticamente desde la Z a la A', () => {
  it('is a function', () => {
    expect(typeof orderedZ).toBe('function');
  });

  it('Debería retornar los nombres de los personajes ordenados de la Z a la A', () => {

    const orderZA = orderedZ (characters);

    expect(orderZA[0].name).toBe('Zacharias Smith');
    expect(orderZA[1].name).toBe('Xenophilius Lovegood');
    expect(orderZA[2].name).toBe('Vincent Crabbe');
    expect(orderZA[3].name).toBe('Viktor Krum');
    expect(orderZA[4].name).toBe('Vernon Dursley');

  });
});
