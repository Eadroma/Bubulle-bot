const config = require("../assets/config.json");

module.exports = async (client, message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const functions = require("../functions.js");
    let cmd;

    if (client.commands.has(command)) {
        cmd = client.commands.get(command);
    }
    
    if (cmd) {
        try {
            await cmd.run(client, message, args, functions);
        } catch (err) {
            console.error(err);
        }
    }
};