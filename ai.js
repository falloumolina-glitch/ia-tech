let memory = {
  name: null,
  lastMessage: null
};

function botReply(message){
  let msg = message.toLowerCase();
  memory.lastMessage = msg;

  // Détection nom
  if(msg.includes("je m'appelle")){
    let name = message.split("je m'appelle")[1].trim();
    memory.name = name;
    return "Enchanté " + name + " 😊";
  }

  // Salutation
  if(msg.includes("bonjour") || msg.includes("salut")){
    if(memory.name){
      return "Salut " + memory.name + " 👋 comment ça va ?";
    }
    return "Salut 👋 comment je peux t’aider ?";
  }

  // Qui es-tu
  if(msg.includes("qui es-tu") || msg.includes("tu es qui")){
    return "Je suis IA-Tech Pro Max 🤖 ton assistant intelligent.";
  }

  // Aide
  if(msg.includes("aide")){
    return "Je peux discuter avec toi, répondre à tes questions et apprendre petit à petit 👍";
  }

  // Mémoire simple
  if(msg.includes("merci")){
    return "Avec plaisir 😊";
  }

  // Réponse par défaut (plus naturelle)
  let responses = [
    "Je ne suis pas sûr de comprendre 🤔",
    "Peux-tu reformuler ?",
    "Intéressant… dis-moi plus 👀",
    "Je réfléchis encore à ça 🤖"
  ];

  return responses[Math.floor(Math.random() * responses.length)];
        }
