var express = require('express');
var path = require('path');
var cors = require('cors');
var app = express();
var port = 8080;
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname +'/site'));

var mintak = 0;
var osszeg = 0;
var pontossag = -1;
var atlag = -1;
var pontossag1=[];
var atlag1=[];
var mintak1={};

app.post('/post_data', function(request, response){
  console.log(request.body);      
  response.send(request.body);
  pontossag=request.body.pontossag;
  mintak+=1;
  osszeg+=pontossag;
  atlag=osszeg/mintak;
  pontossag1=[];
  atlag1=[];
  mintak1=[];
  pontossag1.push(pontossag);
  atlag1.push(atlag);
  mintak1.push(mintak);
});
app.get('/get_pontossag', function(req, res){
    res.send(pontossag1).status(200).end();
});
app.get('/get_atlag', function(req, res){
    res.send(atlag1).status(200).end();
});
app.get('/get_mintak', function(req, res){
    res.send(mintak1).status(200).end();
});


app.listen(port);
