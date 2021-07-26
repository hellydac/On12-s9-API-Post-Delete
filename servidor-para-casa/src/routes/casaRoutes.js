
const express = require("express")
const router = express.Router();
const controller = require("../controllers/casaControllers.js")

router.get("/", controller.getAll);
router.get("/nome", controller.getByName);
router.get("/:id", controller.getById);

router.post("/cadastrar", controller.criarContato);

router.delete("/:id", controller.deletarContato);


module.exports = router;
