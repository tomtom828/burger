// @author: Thomas Thompson
// @github: tomtom28
// @comment: Homework 14 - Eat the Burger!



// Node Dependency
var mysql = require('mysql');


// Link to MySQL Database
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Iforget123', // Add your password
  database : 'burgers_db' // Add your database
});


// Export the Connection
module.exports = connection;