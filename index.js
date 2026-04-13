const express = require("express");
const app = express();

app.use(express.json());

// test serveur
app.get("/api/healthz", (req, res) => {
  res.json({ status: "ok" });
});

// chatbot API
app.post("/api/chat", (req, res) => {
  const message = req.body.message || "";

  const msg = message.toLowerCase();

  if(msg.includes("bonjour") || msg.includes("salut")){
    return res.json({ reply: "Bonjour 👋 je suis ton IA" });
  }

  if(msg.includes("poésie")){
    return res.json({ reply: "🌙 La poésie transforme les émotions en mots ✨" });
  }

  if(msg.includes("merci")){
    return res.json({ reply: "Avec plaisir 😊" });
  }

  if(msg.includes("sport")){
    return res.json({ reply: "Le sport est excellent pour la santé ⚽" });
  }

  return res.json({ reply: "Je ne comprends pas encore 🤔" });
});

// port Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Serveur lancé sur le port", PORT);
});
