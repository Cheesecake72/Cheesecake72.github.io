const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Gold3245126$",
    database: "testdb"
});

db.connect((err) => {
    if(err){
        console.error('Database connection failed: ' + err.stack);
        return;
    }
     console.log('Connected to database.');
});

app.post('/testdb', (req, res) => {

  const sql = "insert into login (Username,Password,Email) values (?,?,?)";

  
  db.query(sql,[req.body.name,req.body.Password,req.body.email],(err,data) => {
    if(err) return console.log("THE DATA FAILED TO SAVE: ",err);
    return res.send("POSTED");
  })

});


app.get('/fetch/:email/:Password',(req,res)=>{
    
    const email = req.params.email;
    const password = req.params.Password

    if(email != null){   
        
     db.query('select * from login where Email=\'' + email + '\' AND Password=\'' + password + '\'',(err,results) =>{
        if(err){
            console.error("Error retrieving from query: ",err);
        }
        if(results != null){
            var value = JSON.parse(JSON.stringify(results));
            console.log(value);
            return res.send(results);
           
        }
        return res.json("wow")
     });
    }
    else{
        console.log('it visited here');
        return res.json('wow');
    }
});

app.get('/testdb',(req,res)=>{
    
    db.query('SELECT * FROM login', (err, results) => {
    if (err) {
     console.error('Error executing query:', err);
     
    }
    console.log('Query results:', results);
    return res.json(results);
    });
});

app.listen(8081,(err) => {
    if(err){
        console.log('failed to create site');
    }
    console.log('success');
});