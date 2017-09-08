module.exports = (sequelize, DataTypes) => {
    const Network = sequelize.define('networks', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false
        },
        href: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        country: {
            type: DataTypes.STRING
        },
        latitude: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        longitude: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }, {
            freezeTableName: true
    });
    return Network;
};