const { EmbedBuilder } = require("discord.js");

module.exports = {
    /**
     * Capitalizes the first character of each word.
     */
    firstcharUC: function(string){
        return string.replace(/\b\w/g, l => l.toUpperCase());
    },

    /**
     * Returns a random integer less than max.
     */
    rdm: function(max){
        return Math.floor(Math.random() * max);
    },

    /**
     * Sends a formatted embedded message to the context channel.
     */
    sendEmbed: function(message, author, authoricon, color, thumbnail, field){
        let embed = new EmbedBuilder()
            .setAuthor({ name: author || "\u200B", iconURL: authoricon || undefined })
            .setColor(color || null);
            
        if (thumbnail) {
            embed.setThumbnail(thumbnail);
        }

        if(field && Array.isArray(field)){
            field.forEach(fd => {
                embed.addFields({ name: fd.title || "\u200B", value: fd.desc || "\u200B", inline: !!fd.inline });
            });
        }
        message.channel.send({ embeds: [embed] });
    },

    /**
     * Sends a formatted embedded message to a specific channel.
     */
    sendEmbedChannel: function(channel, author, authoricon, color, thumbnail, field){
        let embed = new EmbedBuilder()
            .setAuthor({ name: author || "\u200B", iconURL: authoricon || undefined })
            .setColor(color || null);
            
        if (thumbnail) {
            embed.setThumbnail(thumbnail);
        }

        if(field && Array.isArray(field)){
            field.forEach(fd => {
                embed.addFields({ name: fd.title || "\u200B", value: fd.desc || "\u200B", inline: !!fd.inline });
            });
        }
        channel.send({ embeds: [embed] });
    }
}