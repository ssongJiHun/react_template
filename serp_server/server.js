const express = require("express");
const cors = require("cors");


const server = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

var corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://localhost:3000",
  ]
};
server.use(cors(corsOptions));


server.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

// router
server.use('/', require('./app/routes'));

// error 잘못된 주소 요청
server.use((_, res) => {
  res.status(404).send({
    ok: false,
    message: 'Unable to find the requested resource.',
  });
});

// database
const db = require("./app/models");
db.sequelize.sync();

// start
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}.`);
});
