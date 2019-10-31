const Discord = require("discord.js");  
const db = require('quick.db');
const rank = require("../assets/rank.json");
exports.run = (client, message, args, functions) => {
  let choice = args[0];
  let mention = message.author.id || message.mentions.users.first().id;
  if(message.author.id == "441293683132989460" || message.author.id == "194543374533918720"){
    try {
      switch(choice){
        case 'age':
          let age = args[2];
          message.channel.send('âge ajouté !');
          db.set(`userInfo_${mention}.age`, age);
        break;
        case 'agilite':
          let agilite = args[2];
          message.channel.send('agilité ajouté !');
          db.set(`userStat_${mention.id}.agilite`, agilite);
        break;
        case 'charisme':
          let charisme = args[2];
          message.channel.send('charisme ajouté !');
          db.set(`userStat_${mention.id}.charisme`, charisme);
        break;
        case 'detail':
          const [choise, mention, ...phrase] = args;
          const newphrase = phrase.join(" ");
          message.channel.send(`Détail de la fiche de ${mention.username} a été changé !`);
          db.set(`userInfo_${mention.id}.details`, newphrase);
        break;
        case 'force':
          let force = args[2];
          message.channel.send('force ajouté !');
          db.set(`userStat_${mention.id}.force`, force);
        break;
        case 'mental': 
          let mental = args[2];
          message.channel.send('mental ajouté !');
          db.set(`userStat_${mention.id}.mental`, mental);
        break;
        case 'nom':
          let nom = args[2];
          message.channel.send('nom ajouté !');
          db.set(`userInfo_${mention.id}.nom`, nom);
        break;
        case 'prenom':
          let prenom = args[2];
          message.channel.send('prénom ajouté !');
          db.set(`userInfo_${mention.id}.prenom`, prenom);
        break;
        case 'profession':
          let profession = args[2];
          message.channel.send('profession ajouté !');
          db.set(`userInfo_${mention.id}.profession`, profession);
        break;
        case 'desc':
          const [choice, mentions, ...phrases] = args;
          const newphrases = phrases.join(" ");
          message.channel.send(`Description de la fiche de ${mention.username} a été changé !`);
          db.set(`userInfo_${mention.id}.desc`, newphrase);
        break;
        case 'hp':
          let hp = args[2];
          message.channel.send('hp redéfini !');
          db.set(`userStat_${mention.id}.hp`, hp);
        break;
      }
    } catch(err){
      console.log(err);
    }
  } else message.channel.send("Vous n'avez pas les droits pour changer la valeur !");
}
exports.help = {
  name: "add",
  desc: "Définis la fiche de l'utilisateur\n Usage: !add <value> <args>."
}