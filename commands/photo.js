const Discord = require("discord.js");
const photos = require("../assets/photo.json");

exports.run = (client, message, args, functions) => {
	const bite = Object.keys(photos);
	const randIndex = Math.floor(Math.random() * bite.length);
	const randbite = bite[randIndex]; 
	const photo = photos[randbite];
	const pic = photo.photo;

	const embed = new Discord.RichEmbed()
					.setImage(pic)
					.addField(photo.date, "-Bubulle Family", true);

	message.channel.send(embed);
}

exports.help = {
  name: "photo",
  desc: "affiche une photo aléatoire de la famille **BUBULLE**"
}