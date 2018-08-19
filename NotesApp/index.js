var express = require('express');
var app = express();

app.get('/home',function(req, res){
  res.send("Home Page Services is loading...");
});

app.post('/hello', function(req, res){
   res.send("You just called the post method \n");
});

app.listen(3000);

// app.createServer(function(req,res){
//   console.log(req);
//   res.writeHead(200, {'Content-Type' : 'text/plain'});
//   res.end("Hello World")
// }).listen(3000);



console.log('Server is Running');