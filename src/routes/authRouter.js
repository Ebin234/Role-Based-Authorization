const express = require("express");
const { register, logIn } = require("../controllers/authController");

const router = express.Router();

router.post("/signup", register);
router.post("/login", logIn);

module.exports = router;
