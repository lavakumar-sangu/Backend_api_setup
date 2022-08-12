module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
  var router = require("express").Router();
  router.post("/login", tutorials.create);
  router.delete("/studentdelete", tutorials.DeleteUser);
  router.get("/getstudent",tutorials.GetUser);
  router.put("/update",tutorials.UpdateUser);
    return router;
};