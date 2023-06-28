var express = require('express');
var bodyParser = require('body-parser');
var app = express(); //Creating an instance of express

var http = require('http').Server(app);
var io = require('socket.io')(http); //Setting up the io for the backend
var mongoose = require('mongoose');

//Enables access to the files in current directory? 
app.use(express.static(__dirname));
app.use(bodyParser.json()); //This lets our body parser to know that json is coming along with our http request. 
app.use(bodyParser.urlencoded({extended:false}));

var dburl ="mongodb+srv://user:user@learning-node.wucq9ol.mongodb.net/";

var messages = [
    {name: 'Tim', message: 'Hi'}, 
    {name: 'Alireza', message: 'I am the developer'} 

];
app.get('/messages', (req, res)=>{
    res.send(messages);
});

app.post('/messages', (req, res)=>{
    messages.push(req.body);
    io.emit('message', req.body);
    res.sendStatus(200);
});

io.on('connection', (socket)=>{
    console.log('User connected');
});

// mongoose.connect(dburl,{useMongoClient: true}, (error)=>{
//     console.log('mongo db connection', error);
// });
//Sets up the server, only for express
// var server = app.listen(3000, ()=>{
//     console.log('Server is listening on port ', server.address().port);
// });

var server = http.listen(3000, ()=>{
    console.log('Server is listening on port ', server.address().port);
});
