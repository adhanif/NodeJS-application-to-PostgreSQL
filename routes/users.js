const express = require("express");
const usersRouter = express.Router();
const { getUsers, getId, newUser } = require("../controllers/users");

//GET  /  : To get all the users
usersRouter.get("/", getUsers);

//GET  /:id :  To get one user (with the id)

usersRouter.get("/:id", getId);
usersRouter.post("/", newUser);

module.exports = usersRouter;
