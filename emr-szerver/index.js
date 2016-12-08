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


app.post('/post_data', function(request, response){
  console.log(request.body);      // your JSON
  response.send(request.body);    // echo the result back
});



app.listen(port);