const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await client.chat.completions.create({
      model: "openai/gpt-oss-20b", // change to your Groq model if needed
      messages: [{ role: "user", content: message }],
    });

    const reply = response.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Groq request failed" });
  }
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
