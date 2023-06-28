var fs = require('fs');

var data = require('./data.json'); //Here its an actual object. 

console.log(data.name);
//Including the 'utf-8' enables reading from json files. 
fs.readFile('./data.json','utf-8',(err, data)=>{
    //console.log(data); //In this case, we are only reading as a string.
    var data = JSON.parse(data); 
    console.log(data.name);
});