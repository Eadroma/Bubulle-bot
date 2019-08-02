const Discord = require("discord.js");

exports.run = (client, message, args, functions) => {
    let sicon = message.guild.iconURL;
    let command = client.commands.get(args[0]);
    if (!command) 
        functions.sendEmbed(message, message.guild.name, sicon, "#7289DA", sicon, [
            {title:"Help Command", desc:`\n\n${client.commands.map(cmd => `\`${cmd.help.name}\``).join(", ")}`, inline: true},
            {title: "How to use a command", desc: "use !help <argument>", inline: true}
        ]);
    else
        functions.sendEmbed(message, message.guild.name, sicon, "#7289DA", sicon, [
            {title: command.help.name.toUpperCase(), desc: command.help.desc, inline: true}
        ]);
}

exports.help = {
    name: "help",
    desc: "t'as vraiment besoin d'une description pour comprendre ce que ça fait ?"
}