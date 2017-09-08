const Sequelize = require('sequelize');
const env = require('./config/env');

const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    dialect: env.DATABASE_DIALECT,
    //logging: false
});
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.networks = require('./models/network.js')(sequelize, Sequelize);
db.stations = require('./models/station.js')(sequelize, Sequelize);

module.exports = db;