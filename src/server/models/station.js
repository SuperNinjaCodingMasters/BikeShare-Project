import mongoose, { Schema } from "mongoose";

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
    id: String
})

const Station = mongoose.model("Station", StationSchema);

export default Station;