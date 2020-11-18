
const FetchStream = require("node-fetch");
const fsLibrary = require ("fs");
const { types } = require("util");

var inputName = fsLibrary.readFile(`pokemon-names.txt`, (error, textString) => {
    if (error) throw err
    inputName = textString.toString()

    let fetch = new FetchStream(`https://pokeapi.co/api/v2/pokemon/${inputName}`)
    .then(data => data.json())
    .then(json => json.types)
    .then(types => console.log(types[0].type.name))
})

//its working just need to display all types in the array. Maybe recursively?



//Thinking....
    

