// Create web server
// Load in the express module
const express = require('express');
const app = express();
// Load in the body-parser module
const bodyParser = require('body-parser');
// Load in the fs module
const fs = require('fs');
// Set the port for the server
const port = 3000;

// Load in the comments.json file
const comments = require('./comments.json');

// Use the body-parser module
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up a route to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Set up a route to add a comment
app.post('/comments', (req, res) => {
    // Get the comment from the request body
    const comment = req.body.comment;
    // Add the comment to the comments array
    comments.push(comment);
    // Write the comments array to the comments.json file
    fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
        if (err) {
            return res.status(500).send('Error writing to file');
        }
        res.json(comments);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});