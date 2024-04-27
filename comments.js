// Create web server
// Load the express library
const express = require('express');
// Load the body-parser library
const bodyParser = require('body-parser');
// Load the cors library
const cors = require('cors');
// Load the path library
const path = require('path');
// Load the fs library
const fs = require('fs');
// Load the uuid library
const uuid = require('uuid');
// Load the app library
const app = express();
// Load the port library
const port = 3000;

// Load the cors middleware
app.use(cors());
// Load the body-parser middleware
app.use(bodyParser.json());
// Load the static middleware
app.use(express.static(path.join(__dirname, 'public')));

// Load the comments.json file
const comments = require('./comments.json');

// GET /comments
app.get('/comments', (req, res) => {
  // Send the comments array as JSON
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  // Create a new comment object
  const comment = {
    id: uuid.v4(),







