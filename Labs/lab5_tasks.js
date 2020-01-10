var mysql = require("mysql");
var http= require("http")

var conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "mydb2"


})

conn.connect(function(err){

    if(err) throw err;
    console.log("Connected");
    var sql = "SELECT * FROM CUSTOMERS LIMIT 5 offset 2 ";
     
     conn.query(sql, function(err,result,fields){
        if(err) throw err;
        
        console.log("Result: ", result);
    })
})