const Discord = require('discord.js');
const db = require('quick.db');
exports.run = (client, message, args, functions) => {
  let mention = message.mentions.users.first() || message.author;
  let info = db.get(`userInfo_${mention.id}`);

  if(info == undefined){
    message.channel.send(`La fiche de ${mention.username} a été initialisé !`);
    db.set(`userInfo_${mention.id}`, {username: `${mention.username}`, nom: "", prenom: "", age: "", profession: "", details: "", desc: ""});
    db.set(`userStat_${mention.id}`, {agilite: 0, force: 0, mental: 0, charisme: 0, hp: 5, hpmax: 5});
  } else message.channel.send("Votre fiche a déjà été initialisé ! ");
  

}

exports.help = {
    name: "setfiche",
    desc: "Initialise la fiche si elle est inexistante."
}