const Discord = require("discord.js");  
const db = require('quick.db');
const rank = require("../assets/rank.json");
exports.run = (client, message, args, functions) => {
  let mention = message.author.id || message.mentions.users.first().id;
  let age = args;
  if(message.author.id == "441293683132989460" || message.author.id == "194543374533918720"){
    try {
      message.channel.send('âge ajouté !');
      db.set(`userInfo_${mention}.age`, age);
    } catch(err){
      console.log(err);
    }
  } else message.channel.send("Vous n'avez pas les droits pour changer la valeur !");
  
  console.log(db.all());
}
exports.help = {
  name: "addage",
  desc: "Définis l'âge d'un utilisateur. \n Usage: !addage @utilisateur <value>"
}