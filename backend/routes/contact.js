import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// POST /api/contact — store a message sent from the portfolio's contact form
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "name, email and message are all required." });
    }

    const saved = await Message.create({ name, email, message });
    res.status(201).json({ success: true, id: saved._id });
  } catch (err) {
    console.error("Failed to save contact message:", err.message);
    res.status(500).json({ error: "Something went wrong saving your message." });
  }
});

// GET /api/contact — list messages (handy for checking things landed in MongoDB)
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }).limit(100);
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch messages." });
  }
});

export default router;
