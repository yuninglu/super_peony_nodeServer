const express = require("express");
const router = new express.Router();

const login = require("./model/login");
var data = [login];
data.map((item) => {
  router.use(item.name, item.func);
});
module.exports = router;
