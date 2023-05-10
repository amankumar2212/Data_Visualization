const User = require('../models/dataSchema');
const mongoose = require('mongoose')
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected To the Database");
}).catch((err) => {
    console.log(`connection Failed due to ${err.message}`)
});