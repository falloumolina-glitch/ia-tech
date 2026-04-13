const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/healthz", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/chat", (req, res) => {
  const message = req.body.message || "";

  if(message.toLowerCase().includes("bonjour")){
    return res.json({ reply: "Bonjour 👋" });
  }

  return res.json({ reply: "Je ne comprends pas encore 🤔" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
