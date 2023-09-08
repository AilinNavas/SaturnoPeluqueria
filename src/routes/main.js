const express = require("express");

const mainController = require("../controllers/mainController");

const router = express.Router();

router.get("/", mainController.index);
router.get("/galeria", mainController.gallery);
router.get("/contacto", mainController.contact);
// router.get("/catalogo", mainController.catalog);



module.exports = router;