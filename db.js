var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// const createDB = ()=>{
//     con.query("CREATE DATABASE mydb", function (err, result) {
//         if (err) throw err;
//         console.log("Database created");
//       });
// }

// createDB();

// const createTable = () =>{
//     var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// }

const insertValue = ()=>{
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}

// createTable();
insertValue();