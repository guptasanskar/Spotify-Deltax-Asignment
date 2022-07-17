const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


// Connect to MongoDB
const dburi="mongodb://spotimongodb:27017/spotifyClone";
const connectionString = process.env.MONGODB_URI || dburi;


mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}).then(() => {
    console.log('Connected to MongoDB');
}
).catch((err) => {
    console.log(err);
}
);
const db = mongoose.connection;
module.exports = db;

