require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));

const userRoutes = require("./routes/users.routes");

app.use("/users", userRoutes);

module.exports = app;
