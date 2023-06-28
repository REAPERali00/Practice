var express = require('express');
var bodyParser = require('body-parser');
var app = express(); //Creating an instance of express

//Enables access to the files in current directory? 
app.use(express.static(__dirname));
app.use(bodyParser.json()); //This lets our body parser to know that json is coming along with our http request. 
app.use(bodyParser.urlencoded({extended:false}));
var messages = [
    {name: 'Tim', message: 'Hi'}, 
    {name: 'Alireza', message: 'I am the developer'} 

];
app.get('/messages', (req, res)=>{
    res.send(messages);
});

app.post('/messages', (req, res)=>{
    messages.push(req.body);
    res.sendStatus(200);
});

//Sets up the server 
var server = app.listen(3000, ()=>{
    console.log('Server is listening on port ', server.address().port);
});
