const Discord = require("discord.js");  
const db = require('quick.db');
const rank = require("../assets/rank.json");
exports.run = (client, message, args, functions) => {
  let mention = message.author || message.mentions.users.first();
  let prenom = args;
  console.log(0);
  if(message.author.id == "441293683132989460" || message.author.id == "194543374533918720"){
    try {
      console.log(1);
      message.channel.send('prénom ajouté !');
      db.set(`userInfo_${mention.id}.prenom`, prenom);
      console.log(2)
    } catch(err){
      console.log(err);
    }
  } else message.channel.send("Vous n'avez pas les droits pour changer la valeur !");
  
  console.log(db.all());
}
exports.help = {
  name: "addprenom",
  desc: "ajoute un prénom à la fiche d'un utilisateur. \n Usage: !addprenom @utilisateur <string>"
}