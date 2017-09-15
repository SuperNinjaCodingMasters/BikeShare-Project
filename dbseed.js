const fs = require('fs');
const path = require('path');
const db = require('./src/server/db');
const Network = require('./src/server/models/network')
const Station = require('./src/server/models/station')


const readFiles = (dir, onContent, onError) => {
    fs.readdir(dir, (err, filenames) => {
        if (err) {
            onError(err);
            return;
        }

        filenames.forEach((filename) => {
            fs.readFile('./networks/' + filename, (err, content) => {
                if (err) {
                    onError(err);
                    return;
                }
                onContent(filename, content);
            });
        });
    });
};

readFiles('./networks', async (filename, content) => {
    const data = await JSON.parse(content);

        Network.create({
            company: data.network.company,
            href: data.network.href,
            id: data.network.id,
            location: {
                city: data.network.location.city,
                country: data.network.location.country,
                latitude: data.network.location.latitude,
                longitude: data.network.location.longitude
            }, name: data.network.name
        });

        data.network.stations.forEach((station) => {
            Station.create({
                name: station.name,
                timestamp: station.timestamp,
                latitude: station.latitude,
                longitude: station.longitude,
                empty_slots: station.empty_slots,
                free_bikes: station.free_bikes,
                id: station.id,
                parent_id: data.network.id
            });
        })    
}, (err) => {
    throw err;
});