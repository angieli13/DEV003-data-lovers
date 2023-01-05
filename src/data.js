import data from "./data/harrypotter/data.js";

const data_harry = {

  getData: function(){
    //optional
    return;
  },

  filterData: function(condicion) {
    console.log(data[condicion])
    return data[condicion];
  }
}

export default data_harry;