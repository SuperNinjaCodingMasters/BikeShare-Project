const Sequelize = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Network = sequelize.define('networks', {
        company: {
            type: Sequelize.STRING,
            allowNull: false,
            get: () => {
                return this.getDataValue('favColors').split(';')
            },
            set: (val) => {
                this.setDataValue('favColors', val.join(';'));
            }
        },
        href: {
            type: Sequelize.STRING
        },
        id: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        },
        latitude: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        longitude: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
}