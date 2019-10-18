const Discord = require("discord.js");  
const db = require('quick.db');
exports.run = (client, message, args, functions) => {
  let mention = message.author || message.mentions.users.first();
  let profession = args;

  if(message.author.id == "441293683132989460" || message.author.id == "194543374533918720"){
    try {
      message.channel.send('profession ajouté !');
      db.set(`userInfo_${mention.id}.profession`, profession);
    } catch(err){
      console.log(err);
    }
  } else message.channel.send("Vous n'avez pas les droits pour changer la valeur !");
  
  console.log(db.all());
}
exports.help = {
  name: "addprofession",
  desc: "Ajoute une profession à un utilisateur. \n Usage: !addprofession @utilisateur <string> "
}