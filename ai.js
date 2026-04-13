let memory = {
  name: null
};

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

  // ======================
  // 👤 NOM UTILISATEUR
  // ======================
  if(msg.includes("je m'appelle")){
    let name = message.split("je m'appelle")[1]?.trim();
    memory.name = name;
    add("Enchanté " + name + " 😊", "bot");
    input.value = "";
    return;
  }

  // ======================
  // 👑 CRÉATEUR
  // ======================
  if(msg.includes("créateur") || msg.includes("fondateur") || msg.includes("qui t'a créé")){
    add("👑 IA-Tech Pro Max a été créé par Fallou Diop 🚀", "bot");
    input.value = "";
    return;
  }

  // ======================
  // 🤖 IDENTITÉ IA
  // ======================
  if(msg.includes("qui es-tu") || msg.includes("tu es qui")){
    add("🤖 Je suis IA-Tech Pro Max, un assistant intelligent créé par Fallou Diop 👑", "bot");
    input.value = "";
    return;
  }

  // ======================
  // 👋 SALUTATION
  // ======================
  if(msg.includes("bonjour") || msg.includes("salut") || msg.includes("hello")){
    if(memory.name){
      add("Salut " + memory.name + " 👋 heureux de te revoir !", "bot");
    }else{
      add("Salut 👋 je suis IA-Tech Pro Max 🤖", "bot");
    }
    input.value = "";
    return;
  }

  // ======================
  // 🌙 POÉSIE
  // ======================
  if(msg.includes("poésie") || msg.includes("poeme")){
    add("🌙 Le vent écrit des mots invisibles dans le ciel ✨", "bot");
    input.value = "";
    return;
  }

  // ======================
  // 😂 HUMOUR
  // ======================
  if(msg.includes("blague") || msg.includes("drôle")){
    add("😂 Pourquoi les développeurs aiment la nature ? Parce qu’il y a moins de bugs 🌿", "bot");
    input.value = "";
    return;
  }

  // ======================
  // 📚 ÉCOLE
  // ======================
  if(msg.includes("école") || msg.includes("devoir") || msg.includes("math")){
    add("📚 Je peux t’aider en maths, français, science et histoire 👍", "bot");
    input.value = "";
    return;
  }

  // ======================
  // ⚽ SPORT
  // ======================
  if(msg.includes("football") || msg.includes("barça")){
    add("⚽ Le football est le sport le plus populaire au monde 🌍", "bot");
    input.value = "";
    return;
  }

  // ======================
  // 🌍 CULTURE
  // ======================
  if(msg.includes("senegal") || msg.includes("afrique")){
    add("🌍 Le Sénégal est riche en culture et en hospitalité 🇸🇳", "bot");
    input.value = "";
    return;
  }

  // ======================
  // 🤖 IA
  // ======================
  if(msg.includes("ia") || msg.includes("intelligence artificielle")){
    add("🤖 L’IA permet aux machines d’apprendre et de répondre comme les humains.", "bot");
    input.value = "";
    return;
  }

  // ======================
  // 🌐 API (fallback intelligent)
  // ======================
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

    if(!res.ok){
      throw new Error("API error");
    }

    let data = await res.json();

    if(data && data.reply){
      add(data.reply, "bot");
    }else{
      add("Je ne comprends pas encore 🤔", "bot");
    }

  }catch(e){
    add("Erreur de connexion à l'IA ❌", "bot");
    console.log(e);
  }
    }
