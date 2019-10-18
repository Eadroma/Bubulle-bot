const config = require("../assets/config.json");
const Discord = require("discord.js");
module.exports = (client, message) => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const functions = require("../functions.js");
    let cmd;
    if (message.author.bot) 
        return;
    if(message.content.indexOf(config.prefix) !== 0) 
        return;

    
    if(client.commands.has(command))
        cmd = client.commands.get(command);
    try {
        cmd.run(client, message, args, functions);
    } catch (err) {
        return;
    };

};