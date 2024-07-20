const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./utils/connectDB');
const addRoues = require('./utils/addRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());

addRoues('/api', app);

connectDB();

app.listen(port, ()=> {
    console.log(`Server listening on port ${port}`);
})

