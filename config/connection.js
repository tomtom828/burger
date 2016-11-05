// @author: Thomas Thompson
// @github: tomtom28
// @comment: Homework 14 - Eat the Burger!



// Node Dependency
var mysql = require('mysql');


// Link to MySQL Database
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password', // Add your password
  database : 'burgers_db' // Add your database
});


// Connect to MySQL Database
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   };

//   console.log('connected as id ' + connection.threadId);

// });


// Export the Connection
module.exports = connection;
