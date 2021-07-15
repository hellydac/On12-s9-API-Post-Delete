const express = require("express");
const app = express();

const index = require("./routes/index");
const contact = require("./routes/contatoRoutes");

app.use(express.json());// converte o arquivo em json para manipulação
app.use("/", index);
app.use("/contato", contact);

module.exports = app;

