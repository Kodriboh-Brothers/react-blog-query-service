'use strict';

require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = require('express')();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.QUERY_SERVICE_PORT || 4002;

const posts = {}

app.get('/posts', (req, res) => {
    res.send(posts);
});

// Receive events from event bus
app.post('/events', (req, res) => {
    const { type, data } = req.body;

    if (type === 'PostCreated') {
        const { id, title } = data;

        posts[id] = {
            id, title, comments: []
        };
        
    }

    if (type === 'CommentCreated') {
        const { id, content, postId } = data;

        const post = posts[postId];
    }

    // Received and processed event
    res.send({});
});

app.listen(port, () => {
    console.log(`Query service listening on port ${port}`);
});