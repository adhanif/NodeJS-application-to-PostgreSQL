const Pool = require("../db");

const getOrders = async (req, res) => {
  try {
    const { rows } = await Pool.query("select * from orders;");
    res.send(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("something went wrong");
  }
};

module.exports = { getOrders };
