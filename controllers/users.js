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
  try {
    const { id } = req.params;
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

// PUT/:id : To edit one user(with the id)

const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, age } = req.body;
    const { rows } = await pool.query(
      "UPDATE users SET first_name=$1, last_name=$2, age=$3  WHERE id=$4 RETURNING *;",
      [first_name, last_name, age, id]
    );
    res.json(rows[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("something went wrong");
  }
};

// DELETE/:id:To delete one user(with the id)
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    // const { first_name, last_name, age } = req.body;
    const { rows } = await pool.query("DELETE FROM users WHERE id=$1;", [id]);
    res.json(rows[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("something went wrong");
  }
};

module.exports = { getUsers, getId, newUser, editUser, deleteUser };
