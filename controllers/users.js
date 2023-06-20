const pool = require("../db");
const getUsers = async (req, res) => {
  try {
    // const result = await pool.query("SELECT * FROM users;");
    const { rows, rowCount } = await pool.query("SELECT * FROM users;");
    res.json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("something went wrong");
  }
};

const getId = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows, rowCount } = await pool.query(
      "SELECT * FROM users where id=$1;",
      [id]
    );
    res.json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("something went wrong");
  }
};

//POST / -> To create a new user
const newUser = async (req, res) => {
  try {
    const { first_name, last_name, age } = req.body;
    const { rows, rowCount } = await pool.query(
      "INSERT INTO users (first_name, last_name, age) values($1, $2, $3) RETURNING *;",
      [first_name, last_name, age]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("something went wrong");
  }
};

module.exports = { getUsers, getId, newUser };
