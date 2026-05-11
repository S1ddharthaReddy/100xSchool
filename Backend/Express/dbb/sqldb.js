
const express = require("express");
const { Pool } = require("pg");

const pool = new Pool({
    connectionString: ""
});

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;

    // A very bad way to do SQL using PG --- This is vulnerable to SQL Injection
    // const response = await pool.query(
    //     `INSERT INTO users (username, email, password)
    //      VALUES ('${username}', '${email}', '${password}') RETURNING id;`
    //   );

    // The best way to write this is
    const response = await pool.query(
        `INSERT INTO users (username, email, password)
         VALUES ($1, $2, $3) RETURNING id;`, [username, email, password]
      );

    console.log(response);

    res.json({
        id: response.rows[0].id,
        message: "Signup done"
    })
})

app.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    const response = await pool.query(`SELECT * FROM users WHERE email='${email}' AND password='${password}'`);
    console.log(response);

    const userExists = response.rows[0];

    if(!userExists) {
        res.status(403).json({
            message: "incorrect creds"
        })
    }
    else {
        res.json({
            token: "token"
        })
    }
})

app.listen(3000);