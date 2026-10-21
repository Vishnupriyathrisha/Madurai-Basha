
const express = require("express");

const {
  createContactMessage,
  getContactMessages,
  replyToContactMessage,
} = require("../controllers/contactController");

const adminAuth = require("../middleware/adminAuth");

const router = express.Router();

// Public: customers can submit contact messages
router.post("/", createContactMessage);

// Admin only: view messages
router.get("/", adminAuth, getContactMessages);

// Admin only: reply to a customer by email
router.post("/:id/reply", adminAuth, replyToContactMessage);

module.exports = router;
