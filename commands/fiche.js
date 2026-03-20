const { QuickDB } = require("quick.db");
const db = new QuickDB({ filePath: "json.sqlite" });

exports.run = async (client, message, args, functions) => {
  let mention = message.mentions.users.first() || message.author;
  let stat = await db.get(`userStat_${mention.id}`) || {};
  let fiche = await db.get(`userInfo_${mention.id}`) || {};
  let sicon = message.guild.iconURL() || "";
  let avatar = mention.displayAvatarURL() || "";

  functions.sendEmbed(message, `Fiche de ${fiche.username || mention.username}`, sicon, "Random", avatar, [
    {title: '**Nom**', desc: fiche.nom || "Inconnu", inline: true},
		{title: "**Prénom**", desc: fiche.prenom || "Inconnu", inline: true},
		{title: "**Âge**", desc: fiche.age || "Inconnu", inline: true},
		{title: "**Détails**", desc: fiche.details || "Aucun", inline: true}	
	]); 

  functions.sendEmbed(message, `Statistique de ${fiche.username || mention.username}`, sicon, "Random", avatar, [
    {title: '**Force**', desc: String(stat.force || 0), inline: true},
		{title: "**Agilité**", desc: String(stat.agilite || 0), inline: true},
		{title: "**Mental**", desc: String(stat.mental || 0), inline: true},
    {title: "**Charisme**", desc: String(stat.charisme || 0), inline: true},
    {title: "**Vie**", desc: `${stat.hp || 5}/${stat.hpmax || 5}`, inline: true}
  ]);

  if (fiche.desc) {
    functions.sendEmbed(message, `Description de ${fiche.username || mention.username}`, sicon, "Random", avatar, [
      {title: '**Description**', desc: fiche.desc, inline: true},
    ]);
  }
}

exports.help = {
	name: "fiche",
	desc: "Montre la fiche d'un utilisateur.\n Utilisation : !fiche (<= affiche votre fiche) || !fiche @utilisateur (<= affiche la fiche de l'utilisateur)"
}
