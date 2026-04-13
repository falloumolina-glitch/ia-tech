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

    if(data && data.reply){
      add(data.reply, "bot");
    }else{
      add("Réponse vide ❌", "bot");
    }

  }catch(e){
    add("Erreur de connexion à l'IA ❌", "bot");
    console.log(e);
  }
      }
