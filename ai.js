let memory = {
  name: null
};

function botReply(message){

  let msg = message.toLowerCase().trim();

  // ===== NOM =====
  if(msg.includes("je m'appelle")){
    let name = message.split("je m'appelle")[1];
    if(name){
      memory.name = name.trim();
      return "Enchanté " + memory.name + " 😊";
    }
  }

  // ===== SALUT =====
  if(msg.includes("bonjour") || msg.includes("salut")){
    if(memory.name){
      return "Salut " + memory.name + " 👋";
    }
    return "Salut 👋 comment ça va ?";
  }

  // ===== BASE SIMPLE =====
  if(msg.includes("ça va") || msg.includes("ca va")){
    return "Ça va bien 😊 et toi ?";
  }

  if(msg.includes("merci")){
    return "Avec plaisir 😊";
  }

  if(msg.includes("qui es-tu")){
    return "Je suis IA-Tech Pro Max 🤖";
  }

  if(msg.includes("internet")){
    return "Internet est un réseau mondial 🌐";
  }

  if(msg.includes("ia")){
    return "L’IA permet aux machines de réfléchir comme un humain 🤖";
  }

  if(msg.includes("football")){
    return "Le football est un sport ⚽ très populaire";
  }

  if(msg.includes("école") || msg.includes("devoir")){
    return "Je peux t’aider avec tes devoirs 📚";
  }

  if(msg.includes("comment")){
    return "Explique-moi ton problème 👍";
  }

  if(msg.includes("pourquoi")){
    return "Bonne question 🤔 précise un peu plus";
  }

  // ===== FALLBACK (IMPORTANT) =====
  return "🤔 Je n’ai pas compris, peux-tu reformuler ?";
}
