const department = require('express').Router();
const mysql = require('mysql2');

// const { readFromFile, readAndAppend, readAndDelete } = require('../helpers/fsUtils');
// const uuid = require('../helpers/uuid');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'movie_db'
    },
    console.log(`Connected to the movie_db database.`)
  );
// GET Route for retrieving all the tips
department.get('/', (req, res) => {
    console.log("kekwSenpaiDesu");
    db.query('SELECT * FROM department', function (err, results) {
        res.json(results);
      });
});


module.exports = department;