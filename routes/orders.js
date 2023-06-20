const express = require("express");
const ordersRouter = express.Router();
const { getOrders, orderById, editOrder } = require("../controllers/orders");
//get all orders
ordersRouter.get("/", getOrders);
// get a order by id
ordersRouter.get("/:id", orderById);
//POST / -> To create a new user
ordersRouter.post("/", editOrder);

module.exports = ordersRouter;
