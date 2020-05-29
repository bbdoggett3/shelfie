require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controller');

const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log('Database is connected')
}).catch(error => console.log(error));

//endpoints here
// app.post('/api/product', ctrl.create); //create
app.get('/api/inventory', ctrl.getInventory); 
// app.put('/api/products/:id', ctrl.update); //update
// app.delete('/api/products/:id', ctrl.delete); //delete


app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));

