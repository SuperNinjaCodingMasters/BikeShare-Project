import mongoose from "mongoose";

const env = process.env.NODE_ENV;

const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/bike-networks"

mongoose.Promise = global.Promise;

mongoose.connect(mongoURI, {
    useMongoClient: true
});

export default mongoose;