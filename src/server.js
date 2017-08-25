var express = require("express");
var path = require("path")

var app = express();

//when we need to start sending static pages
//app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  });