var express = require("express");
var path = require("path")

var app = express();

//when we need to start sending static pages
//app.use(express.static(path.join(__dirname, 'public')));

//connect to database here

// add body-pharser here 


//set up  api routes
app.use('/api', require(__dirname+'/routes/api'));
//app.use('/api', require('./routes/api'));

// add middelware for error handling
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  });