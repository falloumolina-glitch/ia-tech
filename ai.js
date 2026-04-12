let memory = {
  name: null,
  lastMessages: []
};

function botReply(message){
  let msg = message.toLowerCase();

  // ===== MÉMOIRE =====
  memory.lastMessages.push(msg);
  if(memory.lastMessages.length > 10){
    memory.lastMessages.shift();
  }

  // ===== NOM UTILISATEUR =====
  if(msg.includes("je m'appelle")){
    let name = message.split("je m'appelle")[1]?.trim();
    memory.name = name;
    return "Enchanté " + name + " 😊. Je suis IA-Tech Pro Max, ton assistant intelligent.";
  }

  // ===== SALUTATION =====
  if(msg.includes("bonjour") || msg.includes("salut") || msg.includes("hello")){
    if(memory.name){
      return "Salut " + memory.name + " 👋 heureux de te revoir ! Comment puis-je t’aider aujourd’hui ?";
    }
    return "Salut 👋 je suis IA-Tech Pro Max, ton assistant intelligent.";
  }

  // ===== QUI ES-TU =====
  if(msg.includes("qui es-tu") || msg.includes("tu es qui")){
    return "Je suis IA-Tech Pro Max 🤖, un assistant intelligent conçu pour répondre à des questions en science, technologie, culture, sport et plus encore.";
  }

  // ===== IA & TECHNOLOGIE =====
  if(msg.includes("ia") || msg.includes("intelligence artificielle")){
    return "L’intelligence artificielle (IA) est une branche de l’informatique qui permet aux machines de simuler l’intelligence humaine : apprendre, comprendre, analyser et répondre 🤖.";
  }

  if(msg.includes("internet")){
    return "Internet est un réseau mondial qui connecte des milliards d’appareils et permet l’échange d’informations 🌐.";
  }

  if(msg.includes("programmation") || msg.includes("code")){
    return "La programmation est l’art d’écrire des instructions que les ordinateurs exécutent pour créer des applications, jeux et sites web 💻.";
  }

  if(msg.includes("github")){
    return "GitHub est une plateforme de stockage et de gestion de code utilisée par les développeurs du monde entier pour collaborer sur des projets 🧑‍💻.";
  }

  // ===== SCIENCE =====
  if(msg.includes("science")){
    return "La science est une méthode d’étude basée sur l’observation, l’expérimentation et la logique pour comprendre le monde 🔬.";
  }

  if(msg.includes("physique")){
    return "La physique étudie les lois fondamentales de l’univers comme la gravité, le mouvement, l’énergie et la lumière ⚛️.";
  }

  if(msg.includes("chimie")){
    return "La chimie analyse la composition de la matière et ses transformations, comme les réactions chimiques 🧪.";
  }

  if(msg.includes("biologie")){
    return "La biologie est la science du vivant : elle étudie les êtres vivants, les cellules et les écosystèmes 🌱.";
  }

  // ===== MATHS =====
  if(msg.includes("math") || msg.includes("calcul")){
    return "Les mathématiques permettent de résoudre des problèmes logiques et numériques, utilisées en science, économie et technologie ➗.";
  }

  // ===== HISTOIRE & CULTURE =====
  if(msg.includes("histoire")){
    return "L’histoire étudie les événements du passé pour comprendre l’évolution des civilisations et des sociétés 📜.";
  }

  if(msg.includes("afrique")){
    return "L’Afrique est un continent riche en cultures, langues, traditions et ressources naturelles 🌍.";
  }

  if(msg.includes("senegal")){
    return "Le Sénégal est un pays d’Afrique de l’Ouest connu pour sa culture, sa musique et son hospitalité 🇸🇳.";
  }

  // ===== SPORT =====
  if(msg.includes("football")){
    return "Le football est un sport mondial joué entre deux équipes de 11 joueurs. Il est le sport le plus populaire au monde ⚽.";
  }

  if(msg.includes("barça") || msg.includes("barcelona")){
    return "Le FC Barcelone est un club de football espagnol très célèbre connu pour son style de jeu basé sur la possession ⚽.";
  }

  // ===== PLANÈTES / UNIVERS =====
  if(msg.includes("planète") || msg.includes("univers")){
    return "L’univers est immense et contient des milliards de galaxies, étoiles et planètes 🌌.";
  }

  if(msg.includes("terre")){
    return "La Terre est la troisième planète du système solaire et la seule connue pour abriter la vie 🌍.";
  }

  // ===== AIDE =====
  if(msg.includes("aide")){
    return "Je peux t’aider sur : science, technologie, histoire, sport, culture, mathématiques et plus encore 👍.";
  }

  // ===== MERCI =====
  if(msg.includes("merci")){
    return "Avec plaisir 😊 je suis là pour t’aider.";
  }

  // ===== LOGIQUE SIMPLE CONTEXTE =====
  if(msg.includes("pourquoi")){
    return "Bonne question 🤔 essaye de préciser le contexte pour que je puisse mieux t’expliquer.";
  }

  if(msg.includes("comment")){
    return "Je peux t’expliquer étape par étape 👍 dis-moi exactement ce que tu veux faire.";
  }

  // ===== FALLBACK INTELLIGENT =====
  let fallback = [
    "Je comprends partiellement 🤔 peux-tu reformuler ?",
    "Intéressant 👀 explique un peu plus.",
    "Je n’ai pas encore cette information mais je peux apprendre avec toi 👍",
    "Je réfléchis encore à ça 🤖 essaye d’être plus précis."
  ];

  return fallback[Math.floor(Math.random() * fallback.length)];
}
