var _ = require("lodash");
var debug = require("debug")("login");
const Joi = require("joi");
const loginData = require("../controllers/user.controller")


async function loginUser(req, res) {
    var userData = await loginData.findOne(req, res);
    var now = new Date();
}


module.exports = {
  loginUser
};