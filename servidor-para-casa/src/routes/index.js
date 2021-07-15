const express = require("express");
const router = express.Router();

router.get("/",(request, response) => {
    response.status(200).send({
        "titulo": "Contatos - Reprograma",
        "version": "1.0.0", 
        "mensagem": "Bem vinda a sua API de Contatos. 💌📞"
    })
});

module.exports = router;