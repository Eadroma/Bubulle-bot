const Discord = require("discord.js");

module.exports = {
    firstcharUC: function(string){
        return string.replace(/\b\w/g, l => l.toUpperCase());
    },

    rdm: function(max){
        return Math.floor(Math.random() * Math.floor(max));
    },

    sendEmbed: function(message, author, authoricon, color, thumbnail, field){
        let embed = new Discord.RichEmbed()
            .setAuthor(author, authoricon)
            .setColor(color)
            .setThumbnail(thumbnail)
        if(field){
            field.forEach(fd =>
                {embed.addField(fd.title, fd.desc, fd.inline);
            })
        }
        message.channel.send(embed);
    },

    sendEmbedChannel: function(channel, author, authoricon, color, thumbnail, field){
        let embed = new Discord.RichEmbed()
            .setAuthor(author, authoricon)
            .setColor(color)
            .setThumbnail(thumbnail)
        if(field){
            field.forEach(fd =>
                {embed.addField(fd.title, fd.desc, fd.inline);
            })
        }
        channel.send(embed);
    }
}