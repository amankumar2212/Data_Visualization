const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
const User = require('./models/dataSchema')

dotenv.config({
    path: './config.env'
});

const PORT = process.env.PORT

app.use(express.json());
app.use(cors());
require('./db/conn');

app.use(require('./router/router/router'));
app.get('/', (req, res) => {
    res.send("Hello Server....Connected to the Server");
});

app.listen(PORT, () => {
    console.log(`Hello Server running on Port ${PORT}`);

});