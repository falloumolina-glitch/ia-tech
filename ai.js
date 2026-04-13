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

  add(message,"user");
  input.value = "";

  try{
    let res = await fetch("https://ai-chat-api--falloumolina.replit.app/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: message })
    });

    let data = await res.json();

    add(data.reply,"bot");

  }catch(e){
    add("Erreur de connexion à l'IA ❌","bot");
  }
}
