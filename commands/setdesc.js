const Discord = require("discord.js");  
const db = require('quick.db');
const rank = require("../assets/rank.json");
exports.run = (client, message, args, functions) => {
  const phrase = args;
  const newphrase = phrase.join(" ");
  let mention = message.author || message.mentions.users.first();
  
  
  message.channel.send(`Description de la fiche de ${mention.username} a été changé !`);
  db.set(`userInfo_${mention.id}.desc`, newphrase);
  
 
  console.log(db.all());
}
exports.help = {
  name: "setdesc",
  desc: "Permet de définir la description. \n Usage : !setdesc 'desc' || !setdesc @utilisateur 'desc'"
}