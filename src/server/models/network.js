const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const NetworkSchema = new Schema({
    "company": [String],
    "href": String,
    "id": String,
    "location": {
        "city": String,
        "country": String,
        "latitude": {
            type: Number
            //required: [true, "Latitude field is required"]
        },
        "longitude": {
            type: Number
            //required: [true, "Longitude field is required"]
        },
    },
    "name": {
        type: String
        //required: [true, "Name field is required"]
    }
})

const Network = mongoose.model("Network", NetworkSchema);

module.exports = Network;