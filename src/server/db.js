const mongoose = require('mongoose');

const env = process.env.NODE_ENV;

const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/networkstationtest"

mongoose.Promise = global.Promise;

mongoose.connect(mongoURI, {
    useMongoClient: true
});

const db = mongoose.connection;

module.exports = db;