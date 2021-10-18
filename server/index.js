const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  port: "3306",
  password: "87714414509",
  database: "digitalschool",
});


// --------------- Register - new User(teacher) --------------
app.post('/register', (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  db.query(
  "INSERT INTO users (username, password) VALUES (?,?)", 
  [username, password], 
  (err, result)=> {
    console.log(err)
  })
})


// --------------- Login - of User(teacher) --------------
app.post('/login', (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  db.query(
  "SELECT * FROM users WHERE username = ? AND password = ?", 
  [username, password], 
  (err, result)=> {

    if (err) {
      res.send({err: err})
    } 
    
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password combination!" });
      }
    
  })
})





// --------------- Students-list --------------
app.post("/create", (req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const midterm = req.body.midterm;
  const endterm = req.body.endterm;
  const final = req.body.final;
  const gpa = req.body.gpa;


  db.query(
    "INSERT INTO students (name, surname, midterm, endterm, final, gpa) VALUES (?,?,?,?,?,?)",
    [name, surname, midterm, endterm, final, gpa],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});



app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM students WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
