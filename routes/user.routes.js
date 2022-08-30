module.exports = app => {
  const user = require("../controllers/user.controller.js");
  var router = require("express").Router();
  router.post("/createAccount", user.create);
  router.get("/login", user.findOne);
  router.get("/usersInfo", user.findAll);
  router.delete("/deleteUser", user.delete);
    return router;
};