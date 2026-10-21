
const express = require("express");

const {
  registerCustomer,
  loginCustomer,
} = require("../controllers/customerController");

const router = express.Router();

// Customer registration
router.post("/register", registerCustomer);

// Customer login
router.post("/login", loginCustomer);

module.exports = router;
