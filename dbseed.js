const fs = require('fs');
const path = require('path');
const db = require('./src/server/db');

/*const seedNetworks = (parsed) => {
    const company = parsed.network.company.join(';');
    const { city, country, latitude, longitude } = parsed.network.location;
    const { href, id, name } = parsed.network;

    db.networks.create({ company: company, href: href, id: id, city: city, country: country, latitude: latitude, longitude: longitude, name: name })
        .catch((err) => {
            console.log(err, 'SOMETHING IS FUCKED WITH ASYNC IN NETWORKS');
        })
};

const seedStations = (parsed, parentId) => {
    parsed.network.stations.forEach((val, index, arr) => {
        val.network_id = parentId;
        const { id, name, timestamp, latitude, longitude, free_bikes, empty_slots, network_id } = val;

        db.stations.create({ id: id, name: name, latitude: latitude, longitude: longitude, free_bikes: free_bikes, empty_slots: empty_slots, timestamp: timestamp, network_id: network_id })
            .catch((err) => {
                console.log(err, 'SOMETHING IS FUCKED WITH ASYNC IN STATIONS');
            });
    });
};*/

db.sequelize.sync({ force: true })
    .then(() => {
        fs.readdirSync('./networks', (err, files) => {
            files.forEach((file) => {
                fs.readFileSync(`./networks/${file}`, (err, json) => {
                    let parsed;
                    Promise.resolve(JSON.parse(json))
                        .then((parsedJson) => {
                            parsed = parsedJson;
                            const parentId = file.slice(0, -5);
                            const company = parsed.network.company.join(';');
                            const { city, country, latitude, longitude } = parsed.network.location;
                            const { href, id, name } = parsed.network;

                            db.networks.create({ company: company, href: href, id: id, city: city, country: country, latitude: latitude, longitude: longitude, name: name })
                                .catch((err) => {
                                    console.log(err, 'SOMETHING IS FUCKED WITH ASYNC IN NETWORKS');
                                })

                            parsed.network.stations.forEach((val, index, arr) => {
                                val.network_id = parentId;
                                const { id, name, timestamp, latitude, longitude, free_bikes, empty_slots, network_id } = val;

                                db.stations.create({ id: id, name: name, latitude: latitude, longitude: longitude, free_bikes: free_bikes, empty_slots: empty_slots, timestamp: timestamp, network_id: network_id })
                                    .catch((err) => {
                                        console.log(err, 'SOMETHING IS FUCKED WITH ASYNC IN STATIONS');
                                    });
                            });
                        })
                });
            });
        });
})

            /*seedNetworks(parsed);
            seedStations(parsed, network_id);

            Promise.resolve(JSON.parse(json))
                .then((parsed) => {
                    const network_id = file.slice(0, -5);
                    seedNetworks(parsed);
                    seedStations(parsed, network_id);
                })
                .catch((err) => {
                    console.log(err.message, 'SOMETHING IS FUCKED WITH ASYNC PARSING');
                });*/
