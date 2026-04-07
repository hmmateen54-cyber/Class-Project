const express = require("express");
const router = express.Router();

const { userRegister } = require("../Controller/controller");

router.post("/register", userRegister);
module.exports = router;
