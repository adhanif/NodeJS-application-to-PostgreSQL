const express = require("express");
const ordersRouter = express.Router();
const { getOrders } = require("../controllers/orders");
ordersRouter.get("/", getOrders);
module.exports = ordersRouter;
