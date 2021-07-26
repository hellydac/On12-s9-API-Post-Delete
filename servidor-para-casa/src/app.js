
const express = require("express");
const app = express();

const index = require("./routes/index");
const contato = require("./routes/casaRoutes")

app.use(express.json());

app.use("/", index);

app.use("/contato", contato);

module.exports = app ;