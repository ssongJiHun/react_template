const express = require('express');
const router = express.Router();

const controller = require("./controller");


router.get("/me", controller.me);


module.exports = router;

