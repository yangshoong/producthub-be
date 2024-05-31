const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// 회원 가입
router.post("/", userController.createUser);

module.exports = router;
