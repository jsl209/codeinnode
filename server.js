var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.status(200).json({
    status: 'nodemon updates this in realtime'
  });
});

app.get('/:param/:param2', function (req, res) {
  var p1 = req.params.param;
  var p2 = req.params.param2;
  
  result = p1+p2; 
  res.status(200).json({
    result: result
  });
});

app.listen(3000);
