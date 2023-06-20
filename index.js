require("dotenv").config();
const express = require("express");
const cors = require("cors");
const usersRouter = require("./routes/users");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
