module.exports = (sequelize, DataTypes) => {
    const Network = sequelize.define('stations', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING
        },
        timestamp: {
            type: DataTypes.DATE
        },
        latitude: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        longitude: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        free_bikes: {
            type: DataTypes.STRING
        },
        empty_slots: {
            type: DataTypes.INTEGER
        },
        network_id: {
            type: DataTypes.STRING
        }
        }, {
            freezeTableName: true
        });
    return Network;
};