const express = require('express');
const router = express.Router();

const controller = require("./controller");

// router.get('/', function (req, res) {
//     res.send('account api');
//   });


// // 미들웨어
router.post("/signIn", controller.signIn);
router.post("/signUp", controller.signUp);

module.exports = router;

