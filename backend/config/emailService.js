
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

// Existing contact-message reply
const sendCustomerReply = async ({ to, subject, message }) => {
  return transporter.sendMail({
    from: `"Madurai Basha Restaurant" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text: message,
  });
};

// Booking acknowledgement, confirmation and cancellation emails
const sendBookingEmail = async ({
  to,
  customerName,
  date,
  time,
  guests,
  status,
}) => {
  let subject;
  let message;

  if (status === "Received") {
    subject = "We received your table booking request - Madurai Basha";

    message = `Dear ${customerName},

Thank you for choosing Madurai Basha Restaurant!

Your table booking request has been received successfully.

Booking details:
Date: ${date}
Time: ${time}
Guests: ${guests}

Our team will contact you shortly to confirm your reservation. Please note that your booking is not confirmed yet.

Thank you,
Madurai Basha Restaurant Team`;
  } else if (status === "Confirmed") {
    subject = "Your table booking is confirmed - Madurai Basha";

    message = `Dear ${customerName},

Good news! Your table reservation at Madurai Basha Restaurant has been confirmed.

Booking details:
Date: ${date}
Time: ${time}
Guests: ${guests}

We look forward to welcoming you!

Thank you,
Madurai Basha Restaurant Team`;
  } else if (status === "Cancelled") {
    subject = "Update about your table booking - Madurai Basha";

    message = `Dear ${customerName},

We are sorry to inform you that your table reservation at Madurai Basha Restaurant has been cancelled and is not confirmed.

Booking details:
Date: ${date}
Time: ${time}
Guests: ${guests}

Please contact our restaurant team if you need assistance or would like to make another reservation.

Thank you,
Madurai Basha Restaurant Team`;
  } else {
    throw new Error("Invalid booking email status.");
  }

  return transporter.sendMail({
    from: `"Madurai Basha Restaurant" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text: message,
  });
};

module.exports = {
  sendCustomerReply,
  sendBookingEmail,
};
