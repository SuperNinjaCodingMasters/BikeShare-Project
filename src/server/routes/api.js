const express = require('express');
const router = express.Router();

const db = require('../db');

router.get('/networks', (req, res, next) => {

    db.networks.findAll()
        .then(networks => {
            res.status(200).json(networks);
        })
        .catch(err => next(err));
});

module.exports = router;