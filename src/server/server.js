const express = require("express");
const bodyParser = require('body-parser');
const path = require("path")

const env = require('./config/env');
const db = require('./db');

const app = express();

//when we need to start sending static pages
//app.use(express.static(path.join(__dirname, 'public')));

//Create parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set up  api routes
//app.use('/api', require(__dirname+'/routes/api'));
app.use('/api', require('./routes/api'));

// add middelware for error handling
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

//Synchronize with database
db.sequelize.sync()
    .then(() => {
        app.listen(env.PORT, () => {
            console.log('Development server is listening on port ' + env.PORT);
        });
    }).catch((err) => {
        console.log(err, 'Database update unsuccessful');
    });

module.exports = app;