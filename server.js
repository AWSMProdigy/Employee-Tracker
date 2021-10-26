const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const api = require('./routes/router.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', api);

app.use(express.static('public'));


// Create connection to local host and the root user

// Return 404 if something goes wrong
app.use((req, res) => {
  res.status(404).end();
});

// Begin to listening to port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
