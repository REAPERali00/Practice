var express = require('express');
var app = express();

//Enables access to the files in current directory? 
app.use(express.static(__dirname));
var messages = [
    {name: 'Tim', message: 'Hi'}, 
    {name: 'Alireza', message: 'Fuck you'}, 

];
app.get('/messages', (req, res)=>{
    res.send(messages);
});
//Sets up the server 
var server = app.listen(3000, ()=>{
    console.log('Server is listening on port ', server.address().port);
});
