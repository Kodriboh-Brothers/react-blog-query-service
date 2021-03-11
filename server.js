'use strict';

require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = require('express')();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.QUERY_SERVICE_PORT || 4002;

app.get('/posts', (req, res) => {

});

// Receive events from event bus
app.post('/events', (req, res) => {

});

app.listen(port, () => {
    console.log(`Query service listening on port ${port}`);
});