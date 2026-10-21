const express = require("express");
const { adminLogin } = require("../controllers/adminController");
const adminAuth = require("../middleware/adminAuth");

const router = express.Router();

// Admin login
router.post("/login", adminLogin);

// Protected admin test route
router.get("/verify", adminAuth, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Admin authentication successful",
    admin: req.admin,
  });
});

module.exports = router;