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

const createOrder = async (req, res) => {
  try {
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

// PUT /:id  :  To edit one order (with the id)

const editOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { price, date, user_id } = req.body;
    const { rows } = await pool.query(
      "UPDATE orders SET price=$1, date=$2, user_id=$3 WHERE id=$4 RETURNING *;",
      [price, date, user_id, id]
    );
    res.json(rows[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Something went wrong");
  }
};

//DELETE  /:id : To delete one order (with the id)
const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    // const { first_name, last_name, age } = req.body;
    const { rows } = await pool.query("DELETE FROM orders WHERE id=$1;", [id]);
    res.json(rows[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("something went wrong");
  }
};

module.exports = {
  getOrders,
  orderById,
  editOrder,
  createOrder,
  deleteOrder,
};
