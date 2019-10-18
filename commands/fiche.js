const db = require('quick.db');
exports.run = (client, message, args, functions) => {
  let mention = message.mentions.users.first() || message.author;
  let stat = db.get(`userStat_${mention.id}`);
  let fiche = db.get(`userInfo_${mention.id}`);
  let sicon = message.guild.iconURL;
  functions.sendEmbed(message, `Fiche de ${fiche.username}`, sicon, "RANDOM", mention.avatarURL, [
    {title: '**Nom**', desc: fiche.nom, inline: true},
		{title: "**Prénom**", desc: fiche.prenom, inline: true},
		{title: "**Âge**", desc: fiche.age, inline: true},
		{title: "**Détails**", desc: fiche.details, inline: true}	
	]); 

  functions.sendEmbed(message, `Statistique de ${fiche.username}`, sicon, "RANDOM", mention.avatarURL, [
    {title: '**Force**', desc: stat.force, inline: true},
		{title: "**Agilité**", desc: stat.agilite, inline: true},
		{title: "**Mental**", desc: stat.mental, inline: true},
    {title: "**Charisme**", desc: stat.charisme, inline: true},
    {title: "**Vie**", desc: `${stat.hp}/${stat.hpmax}`, inline: true}
  ]);

  functions.sendEmbed(message, `Description de ${fiche.username}`, sicon, "RANDOM", mention.avatarURL, [
    {title: '**Description**', desc: fiche.desc, inline: true},
  ]);


  message.channel.send(embed);


  
  
}

exports.help = {
	name: "fiche",
	desc: "Montre la fiche d'un utilisateur.\n Utilisation : !fiche (<= affiche votre fiche || !fiche @utilisateur (<= affiche la fiche de l'utilisateur)"
}
