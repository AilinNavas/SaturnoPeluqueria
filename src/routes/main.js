const express = require("express");

const mainController = require("../controllers/mainController");

const router = express.Router();

router.get("/", mainController.index);

router.get("/galeria", mainController.gallery);

router.get("/informacion", mainController.information);

router.get("/contacto", mainController.contact);

router.get("/catalogo", mainController.products);

router.get("/:id", mainController.productDetail);



module.exports = router;