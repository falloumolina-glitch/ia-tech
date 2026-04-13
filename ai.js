function add(text, sender){
  let chat = document.getElementById("chat");

  let msg = document.createElement("div");
  msg.className = sender;
  msg.innerText = text;

  chat.appendChild(msg);
}

async function send(){
  let input = document.getElementById("input");
  let message = input.value;

  if(!message) return;

  let msg = message.toLowerCase().trim();

  // =========================
  // 🎯 RÉPONSES RAPIDES (LOCAL)
  // =========================

  if(msg.includes("salut") || msg.includes("bonjour") || msg.includes("hello")){
    add("👋 Bonjour ! Comment puis-je vous aider aujourd'hui ?", "bot");
    input.value = "";
    return;
  }

  if(msg.includes("poésie") || msg.includes("poeme")){
    add("🌙 La poésie est l’art de transformer les émotions en mots ✨", "bot");
    input.value = "";
    return;
  }

  if(msg.includes("blague") || msg.includes("drôle")){
    add("😂 Pourquoi les développeurs aiment la nature ? Parce qu’il y a moins de bugs 🌿", "bot");
    input.value = "";
    return;
  }

  if(msg.includes("école") || msg.includes("devoir") || msg.includes("math")){
    add("📚 Je peux t’aider en maths, français, science et histoire 👍", "bot");
    input.value = "";
    return;
  }

  if(msg.includes("football") || msg.includes("barça")){
    add("⚽ Le football est le sport le plus populaire au monde 🌍", "bot");
    input.value = "";
    return;
  }

  if(msg.includes("senegal") || msg.includes("afrique")){
    add("🌍 Le Sénégal est riche en culture et en hospitalité 🇸🇳", "bot");
    input.value = "";
    return;
  }

  if(msg.includes("ia") || msg.includes("intelligence artificielle")){
    add("🤖 L’IA permet aux machines d’apprendre et de répondre comme les humains.", "bot");
    input.value = "";
    return;
  }

  if(msg.includes("créateur") || msg.includes("qui t'a créé")){
    add("👑 IA-Tech Pro Max a été créé par Fallou Diop 🚀", "bot");
    input.value = "";
    return;
  }

  if(msg.includes("qui es-tu")){
    add("🤖 Je suis IA-Tech Pro Max, un assistant intelligent créé par Fallou Diop 👑", "bot");
    input.value = "";
    return;
  }

  // =========================
  // 🌐 API (CAS COMPLEXE)
  // =========================

  add(message, "user");
  input.value = "";

  try{
    let res = await fetch("https://c4d59d8c-9f9f-46e1-b4b1-3dde5bb835df-00-3858ng3xbepqm.worf.replit.dev/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: message })
    });

    let data = await res.json();

    add(data.reply || "🤔 Je ne comprends pas encore", "bot");

  }catch(e){
    add("❌ Erreur de connexion à l'IA", "bot");
  }
}
