const express = require('express');
const ctrl = require('./controller')
const SERVER_PORT = 4001;

const app = express();

app.use(express.json());

//endpoints here


app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));

