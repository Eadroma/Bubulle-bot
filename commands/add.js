const { QuickDB } = require("quick.db");
const db = new QuickDB({ filePath: "json.sqlite" });

exports.run = async (client, message, args, functions) => {
  let choice = args[0];
  let mentionUser = message.mentions.users.first();
  let mention = message.author.id || (mentionUser ? mentionUser.id : null);
  
  if(message.author.id == "441293683132989460" || message.author.id == "194543374533918720"){
    try {
      if (!mention) return message.channel.send("Veuillez mentionner un utilisateur.");
      switch(choice){
        case 'age':
          let age = args[2];
          await db.set(`userInfo_${mention}.age`, age);
          message.channel.send('âge ajouté !');
        break;
        case 'agilite':
          let agilite = args[2];
          await db.set(`userStat_${mention}.agilite`, agilite);
          message.channel.send('agilité ajouté !');
        break;
        case 'charisme':
          let charisme = args[2];
          await db.set(`userStat_${mention}.charisme`, charisme);
          message.channel.send('charisme ajouté !');
        break;
        case 'detail':
          const phraseDetail = args.slice(2).join(" ");
          await db.set(`userInfo_${mention}.details`, phraseDetail);
          message.channel.send(`Détail de la fiche a été changé !`);
        break;
        case 'force':
          let force = args[2];
          await db.set(`userStat_${mention}.force`, force);
          message.channel.send('force ajouté !');
        break;
        case 'mental': 
          let mental = args[2];
          await db.set(`userStat_${mention}.mental`, mental);
          message.channel.send('mental ajouté !');
        break;
        case 'nom':
          let nom = args[2];
          await db.set(`userInfo_${mention}.nom`, nom);
          message.channel.send('nom ajouté !');
        break;
        case 'prenom':
          let prenom = args[2];
          await db.set(`userInfo_${mention}.prenom`, prenom);
          message.channel.send('prénom ajouté !');
        break;
        case 'profession':
          let profession = args[2];
          await db.set(`userInfo_${mention}.profession`, profession);
          message.channel.send('profession ajouté !');
        break;
        case 'desc':
          const phraseDesc = args.slice(2).join(" ");
          await db.set(`userInfo_${mention}.desc`, phraseDesc);
          message.channel.send(`Description de la fiche a été changé !`);
        break;
        case 'hp':
          let hp = args[2];
          await db.set(`userStat_${mention}.hp`, hp);
          message.channel.send('hp redéfini !');
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