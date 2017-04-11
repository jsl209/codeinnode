var express = require('express');
var app = express();

var port = process.env.port; 


app.get('/:param/:param2', function (req, res) {
  var p1 = req.params.param;
  var p2 = req.params.param2;
  
  result = p1+p2; 
  res.status(200).json({
    result: result
  });
});

app.listen(3000);
