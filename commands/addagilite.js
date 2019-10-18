const Discord = require("discord.js");  
const db = require('quick.db');
const rank = require("../assets/rank.json");
exports.run = (client, message, args, functions) => {
  let mention = message.author || message.mentions.users.first();
  let agilite = args;
  if(message.author.id == "441293683132989460" || message.author.id == "194543374533918720"){
    try {
      message.channel.send('agilité ajouté !');
      db.set(`userStat_${mention.id}.agilite`, agilite);
    } catch(err){
      console.log(err);
    }
  } else message.channel.send("Vous n'avez pas les droits pour changer la valeur !");
  
  console.log(db.all());
}
exports.help = {
  name: "addagilite",
  desc: "Définis l'agilité d'un Utilisateur. \n Usage: !addagilite @utilisateur <value>"
}