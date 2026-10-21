
const express = require("express");

const {
  createReservation,
  getReservations,
  updateReservationStatus,
} = require("../controllers/reservationController");

const adminAuth = require("../middleware/adminAuth");

const router = express.Router();

// Public: customers can book a table
router.post("/", createReservation);

// Admin only: view all reservations
router.get("/", adminAuth, getReservations);

// Admin only: confirm or cancel a reservation
router.patch("/:id/status", adminAuth, updateReservationStatus);

module.exports = router;
