var express = require('express');
var app = express();

//Enables access to the files in current directory? 
app.use(express.static(__dirname));

//Sets up the server 
var server = app.listen(3000, ()=>{
    console.log('Server is listening on port ', server.address().port);
});
