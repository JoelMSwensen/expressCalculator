const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/bmicalculator.html');
});

app.post('/', function(req, res){

  // console.log(req.body.num1);

  var num1 = Number(req.body.height);
  var num2 = Number(req.body.weight);

  var result = num1 + num2;


  res.send('The result is ' + result);
});

app.listen(3000, function(){
  console.log('server started on port 3000');
});
