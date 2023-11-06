const express = require("express");
const router = express.Router();

const {
  authController: { createUser, loginUser },
} = require("../controllers");

// ? Rutas de registro de usuarios
router.post("/register", createUser);
router.post("/login", loginUser);

module.exports = router;
