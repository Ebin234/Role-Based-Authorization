const express = require("express");
const { register, logIn, logout } = require("../controllers/authController");

const router = express.Router();

router.post("/signup", register);
router.post("/login", logIn);
router.post("/logout", logout);

module.exports = router;
