const express = require ('express');
const router = express.Router();



// get all networks in database
router.get('/networks', function(req, res, next){
    res.send({type: 'GET',name: "networks"});
    /* Databasefunction.find({}).then(function(newtworks){
        res.send(networks)    
    }).catch(next)*/
});
//get a spesifc networks stations
router.get('/networks/:id', function(req, res, next){

    /* Databasefunction.find(req.params.id).then(function(stations){
        res.send(stations)    
    }).catch(next)*/
    res.send({type: 'GET',name: "stations"});
    
    
})
// remove/add bikes to a station (free slots/bikes) and maybe closed?
router.put('/station/:id', function(req, res, next){
    res.send({type: 'PUT',freeslots:"12",bikes:"10"});

    /*
    Databasefunction.updateStation(req.params.id,req.body).then(function(){
        Databasefunction.getOne(req.params.id).then(function(station){
            res.send(station);
        })         

    }).catch(next)
    */
});

// add a review to a spesific station
router.post('/stations/:id', function(req, res, next){
    res.send({type: 'POST',name:"Mark",stars:"3",text:"bla bla bla de bla"})
     /* Databasefunction.creat(req.body).then(function(review){
        res.send(review)    
    }).catch(next)*/
});
module.exports = router;