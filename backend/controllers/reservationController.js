
const Reservation = require("../models/Reservation");
const { sendBookingEmail } = require("../config/emailService");

// Create a new table reservation
const createReservation = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      date,
      time,
      guests,
      message,
      occasion,
    } = req.body;

    if (!name || !email || !phone || !date || !time || !guests) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required reservation fields.",
      });
    }

    // Save the booking first
    const reservation = await Reservation.create({
      name,
      email,
      phone,
      date,
      time,
      guests,
      message,
      occasion,
    });

    // Send acknowledgement email
    let emailSent = false;

    try {
      await sendBookingEmail({
        to: reservation.email,
        customerName: reservation.name,
        date: reservation.date,
        time: reservation.time,
        guests: reservation.guests,
        status: "Received",
      });

      emailSent = true;
    } catch (emailError) {
      console.error(
        "Booking acknowledgement email failed:",
        emailError.message
      );
    }

    return res.status(201).json({
      success: true,
      message: emailSent
        ? "Booking received. An acknowledgement email was sent."
        : "Booking received, but the acknowledgement email could not be sent.",
      emailSent,
      data: reservation,
    });
  } catch (error) {
    console.error("Create reservation error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to create reservation.",
    });
  }
};

// Get all reservations (admin route must use adminAuth)
const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: reservations.length,
      data: reservations,
    });
  } catch (error) {
    console.error("Get reservations error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch reservations.",
    });
  }
};

// Update reservation status and email the customer
const updateReservationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const allowedStatuses = ["Confirmed", "Cancelled"];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Status must be Confirmed or Cancelled.",
      });
    }

    const reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: "Reservation not found.",
      });
    }

    // Do not send duplicate status emails for an unchanged status
    if (reservation.status === status) {
      return res.status(200).json({
        success: true,
        message: `Reservation is already ${status.toLowerCase()}.`,
        emailSent: false,
        data: reservation,
      });
    }

    // Update and validate the database record
    reservation.status = status;
    await reservation.save();

    // Notify the customer of the status change
    let emailSent = false;

    try {
      await sendBookingEmail({
        to: reservation.email,
        customerName: reservation.name,
        date: reservation.date,
        time: reservation.time,
        guests: reservation.guests,
        status,
      });

      emailSent = true;
    } catch (emailError) {
      console.error(
        `Booking ${status.toLowerCase()} email failed:`,
        emailError.message
      );
    }

    return res.status(200).json({
      success: true,
      message: emailSent
        ? `Reservation ${status.toLowerCase()} successfully. Customer email sent.`
        : `Reservation ${status.toLowerCase()}, but the customer email could not be sent.`,
      emailSent,
      data: reservation,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid reservation ID.",
      });
    }

    console.error("Update reservation status error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to update reservation status.",
    });
  }
};

module.exports = {
  createReservation,
  getReservations,
  updateReservationStatus,
};
