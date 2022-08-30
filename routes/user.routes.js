module.exports = app => {
  const user = require("../controllers/user.controller.js");
  const login = require('../controllers/login')
  var router = require("express").Router();
  router.post("/createAccount", user.create);
  router.get("/login", login.loginUser);
  router.get("/usersInfo", user.findAll);
  router.delete("/deleteUser", user.delete);
    return router;
};