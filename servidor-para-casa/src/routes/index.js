

const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.status(200).send({
        "titulo":"servidor-para-casa",
        "Version":"2.0.0",
        "mensagem":"Bem vindos a API de contatinhos"
    })
});

module.exports = router;