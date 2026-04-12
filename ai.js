function botReply(message){
  message = message.toLowerCase();

  if(message.includes("bonjour")){
    return "Salut 👋 je suis IA-Tech Pro Max";
  }

  if(message.includes("qui es-tu")){
    return "Je suis ton assistant intelligent 🤖";
  }

  if(message.includes("aide")){
    return "Je peux répondre à tes questions 👍";
  }

  return "Je n’ai pas encore appris cette réponse 🤔";
}
