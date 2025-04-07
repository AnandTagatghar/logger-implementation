const express = require("express");
const { getData, errorData } = require("../controllers/user.controller");

const router = express.Router();

router.route("/get-data").get(getData);
router.route("/error-data").get(errorData);

module.exports = {
  userRouter: router,
};
