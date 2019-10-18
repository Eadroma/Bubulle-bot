const Discord = require("discord.js");  
const db = require('quick.db');
const rank = require("../assets/rank.json");
exports.run = (client, message, args, functions) => {
  const phrase = args;
  const newphrase = phrase.join(" ");
  let mention = message.author || message.mentions.users.first();
  
  
  message.channel.send(`Détail de la fiche de ${mention.username} a été changé !`);
  db.set(`userInfo_${mention.id}.details`, newphrase);
  
 
  console.log(db.all());
}
exports.help = {
  name: "adddetail",
  desc: "Définis les détails d'un utilisateur. \n Usage: !adddetail @utilisateur <string>"
}