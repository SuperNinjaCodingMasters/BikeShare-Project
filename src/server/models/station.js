const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const StationSchema = new Schema({
    name: String,
    timestamp: Date,
    latitude: {
        type: Number,
        required: [true, "Latitude field is required"]
    },
    longitude: {
        type: Number,
        required: [true, "Longitude field is required"]
    },
    free_bikes: Number,
    empty_slots: Number,
    id: String,
    parent_id: String
})

const Station = mongoose.model("Station", StationSchema);

module.exports = Station;