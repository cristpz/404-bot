const discord = require("discord.js");

module.exports.run = async (client, msg, [Name, ID]) => {
    const prefix = msg.guild.settings.prefix || client.config.prefix;

    msg.delete();
    if (!Name) { return msg.channel.send("You need a name of an emote to search with!"); }
    if (msg.content.slice(prefix.length).startsWith("react") && (!ID)) {
        return msg.channel.send("You need to specify a message's ID so that I can find it!").then(msg => { setTimeout(() => { msg.delete(); }, 4000); });
    }

    let emotes = Array.from(client.emojis);
    let emoji = emotes.filter((element) => {
        if (element[1].name === Name) { return element; }
    });
    var type = emoji[0][1].animated === true ? "gif" : "png";

    if (msg.content.slice(prefix.length).startsWith("react")) {
        msg.channel.messages.fetch(ID).then(msg => msg.react(client.emojis.get(emoji[0][0])));
    } else { msg.channel.send({files: [`https://cdn.discordapp.com/emojis/${emoji[0][0]}.${type}`]}); }
};

module.exports.help = {
    name: "emoji",
};
