const mysql = require('mysql')



var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "maindb"
  });
  
  conn.connect((err) => {
  if (err) throw err;
  console.log('Connected to the  database!');
  });

  module.exports = conn;