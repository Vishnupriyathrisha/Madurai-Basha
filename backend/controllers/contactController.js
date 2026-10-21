
const ContactMessage = require("../models/ContactMessage");
const { sendCustomerReply } = require("../config/emailService");

// Create a new contact message
const createContactMessage = async (req, res) => {
  try {
    const { name, email, phone = "", subject, message } = req.body;

    if (
      !name?.trim() ||
      !email?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in your name, email, subject, and message.",
      });
    }

    const savedMessage = await ContactMessage.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Your message has been sent successfully!",
      data: {
        id: savedMessage._id,
        name: savedMessage.name,
        email: savedMessage.email,
        subject: savedMessage.subject,
        status: savedMessage.status,
        createdAt: savedMessage.createdAt,
      },
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    console.error("Create contact message error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to send your message. Please try again later.",
    });
  }
};

// Get all contact messages
const getContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    console.error("Get contact messages error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch contact messages.",
    });
  }
};

// Send an email reply to a customer (admin only)
const replyToContactMessage = async (req, res) => {
  try {
    const { subject, message } = req.body;

    if (
      typeof subject !== "string" ||
      !subject.trim() ||
      typeof message !== "string" ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Reply subject and message are required.",
      });
    }

    const contact = await ContactMessage.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found.",
      });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      return res.status(500).json({
        success: false,
        message: "Email service is not configured.",
      });
    }

    await sendCustomerReply({
      to: contact.email,
      subject: subject.trim(),
      message: message.trim(),
    });

    contact.status = "Replied";
    await contact.save();

    return res.status(200).json({
      success: true,
      message: "Reply email sent successfully.",
      data: {
        id: contact._id,
        status: contact.status,
      },
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid contact message ID.",
      });
    }

    console.error("Reply to contact message error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to send reply email.",
    });
  }
};

module.exports = {
  createContactMessage,
  getContactMessages,
  replyToContactMessage,
};
