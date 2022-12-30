
export const primerPersonaje = () => {
  fetch('./data/harrypotter/harry.json')
        .then(res=>res.json)
        .then(datos=>{
            console.log(datos);
        
            
        })

};

const filterByHouse = (data, valor) =>{
  const filterHarryByHouse = data.filter(
    (harry) => harry.house.name === valor
  );
  return filterHarryByHouse;
};