const express = require("express");
const ordersRouter = express.Router();
const {
  getOrders,
  orderById,
  createOrder,
  editOrder,
  deleteOrder,
} = require("../controllers/orders");
//get all orders
ordersRouter.get("/", getOrders);
// get a order by id
ordersRouter.get("/:id", orderById);
//POST/ -> To create a new order
ordersRouter.post("/", createOrder);
// PUT/:id => To edit one order (with the id)
ordersRouter.put("/:id", editOrder);

// DELETE/:id :To delete one order (with the id)
ordersRouter.delete("/:id", deleteOrder);

module.exports = ordersRouter;
