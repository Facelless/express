const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

router.post('/service', (req, res) => {
    serviceController.create(req, res);
});

// ó aqui aqui o tchaim aqui o tome aqui o tchaim aqui o tome e pal

module.exports = router;