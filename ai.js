function botReply(message){
  let msg = message.toLowerCase().trim();

  // ================== OUTIL RÉPONSE ==================
  const say = (text) => text;

  // ================== SALUTATION FLEXIBLE ==================
  if(/bonjour|salut|hello|hey/.test(msg)){
    return say("Salut 👋 heureux de te parler. Comment tu te sens aujourd’hui ?");
  }

  if(/ça va|ca va|comment tu vas/.test(msg)){
    return say("Ça va bien 😊 et toi ?");
  }

  if(/et toi/.test(msg)){
    return say("Moi ça va bien 😊 merci. Parlons de toi maintenant 👍");
  }

  // ================== ÉMOTIONS ==================
  if(/triste|déprimé|pas bien/.test(msg)){
    return say("❤️ Désolé… tu veux m’expliquer ce qui ne va pas ?");
  }

  if(/stress|stressé/.test(msg)){
    return say("😌 Respire calmement, prends ton temps, tout va bien se passer.");
  }

  if(/fatigue|fatigué/.test(msg)){
    return say("😴 Repose-toi un peu, ton corps en a besoin.");
  }

  if(/motivation|motivé/.test(msg)){
    return say("💪 Tu peux réussir, continue d’avancer petit à petit.");
  }

  // ================== ÉCOLE ==================
  if(/devoir|école|classe/.test(msg)){
    return say("📚 Dis-moi ton devoir, je vais t’aider étape par étape.");
  }

  if(/exercice|problème/.test(msg)){
    return say("👍 Envoie ton exercice, je vais t’expliquer simplement.");
  }

  if(/math|calcul/.test(msg)){
    return say("➗ Les maths servent à comprendre la logique et résoudre des problèmes.");
  }

  if(/anglais/.test(msg)){
    return say("🇬🇧 L’anglais est une langue internationale très utile.");
  }

  // ================== CONSEILS ==================
  if(/conseil/.test(msg)){
    return say("💡 Dis-moi ton problème, je vais te conseiller simplement.");
  }

  if(/quoi faire/.test(msg)){
    return say("🧭 Explique ta situation, je vais t’aider à choisir.");
  }

  if(/je ne sais pas/.test(msg)){
    return say("👍 Pas grave, explique-moi et je t’aide à comprendre.");
  }

  if(/aide/.test(msg)){
    return say("🤝 Je peux t’aider en école, vie, sport, technologie et plus.");
  }

  // ================== TECHNOLOGIE ==================
  if(/internet/.test(msg)){
    return say("🌐 Internet permet de communiquer et apprendre partout dans le monde.");
  }

  if(/téléphone|telephone/.test(msg)){
    return say("📱 Un téléphone sert à communiquer et accéder à l’information.");
  }

  if(/ia|intelligence artificielle/.test(msg)){
    return say("🤖 L’IA permet aux machines de comprendre et répondre comme un humain.");
  }

  if(/code|programmation/.test(msg)){
    return say("💻 Le code permet de créer des applications et des sites web.");
  }

  // ================== SPORT ==================
  if(/football|foot/.test(msg)){
    return say("⚽ Le football est le sport le plus populaire au monde.");
  }

  if(/sport/.test(msg)){
    return say("🏃 Le sport est bon pour la santé et l’énergie.");
  }

  // ================== MONDE ==================
  if(/afrique/.test(msg)){
    return say("🌍 L’Afrique est un continent riche en cultures et traditions.");
  }

  if(/senegal/.test(msg)){
    return say("🇸🇳 Le Sénégal est connu pour sa culture et son hospitalité.");
  }

  if(/monde/.test(msg)){
    return say("🌍 Le monde est composé de nombreux pays et cultures.");
  }

  // ================== LOGIQUE HUMAIN ==================
  if(/pourquoi/.test(msg)){
    return say("🤔 Bonne question, peux-tu préciser un peu plus ?");
  }

  if(/comment/.test(msg)){
    return say("👍 Je peux t’expliquer étape par étape, dis-moi ce que tu veux faire.");
  }

  if(/explique/.test(msg)){
    return say("📖 D’accord, je vais t’expliquer simplement.");
  }

  // ================== COURT / HUMAIN ==================
  if(msg.length <= 2){
    return say("🤔 Dis-moi plus, je ne comprends pas bien.");
  }

  if(/ok|d'accord|dac/.test(msg)){
    return say("👍 Très bien !");
  }

  if(/merci/.test(msg)){
    return say("😊 Avec plaisir !");
  }

  // ================== FALLBACK INTELLIGENT ==================
  let fallback = [
    "🤔 Je ne suis pas sûr, peux-tu reformuler ?",
    "👀 Explique un peu plus.",
    "👍 Je suis là pour t’aider.",
    "🧠 Je réfléchis… dis-moi plus."
  ];

  return fallback[Math.floor(Math.random() * fallback.length)];
      }
