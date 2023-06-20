const pool = require("../db");

//get all orders
const getOrders = async (req, res) => {
  try {
    const { rows } = await pool.query("select * from orders;");
    res.json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("something went wrong");
  }
};

// get a order by id

const orderById = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM orders where id=$1;", [
      id,
    ]);
    res.json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("something went wrong");
  }
};

//POST / -> To create a new user

const editOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { price, date, user_id } = req.body;
    const { rows } = await pool.query(
      "insert into orders (price, date, user_id) values($1, $2, $3) RETURNING *;",
      [price, date, user_id]
    );
    res.json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("something went wrong");
  }
};

module.exports = { getOrders, orderById, editOrder };
