const fs = require('fs');
const path = require('path');
const db = require('./src/server/db');

const readFiles = (dir, onContent, onError) => {
    fs.readdir(dir, (err, filenames) => {
        if (err) {
            onError(err);
            return;
        }

        filenames.forEach((filename) => {
            fs.readFile(dir + filename, 'utf-8', (err, content) => {
                if (err) {
                    onError(err);
                    return;
                }
                onContent(filename, content);
            });
        });
    });
}

