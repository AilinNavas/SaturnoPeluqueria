const express = require("express");

const mainController = require("../controllers/mainController");

const router = express.Router();

router.get("/", mainController.index);
router.get("/galeria", mainController.gallery);
router.get("/contacto", mainController.contact);




module.exports = router;