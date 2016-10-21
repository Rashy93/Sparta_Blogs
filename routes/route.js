var express = require('express');
var router = express.Router();
var app = express();
var web = require("./controllers/index");

/* GET home page*/
router.route('/')
  .get(web.index);

module.exports = router;
